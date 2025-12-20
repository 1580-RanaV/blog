import { createClient } from "@supabase/supabase-js";

const TABLE = "profile_views";
const ROW_ID = 1;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

async function withTimeout(promise, timeoutMs = 10000) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeoutMs)
    ),
  ]);
}

async function withRetry(fn, maxRetries = 2) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await withTimeout(fn(), 10000);
    } catch (err) {
      const isLastAttempt = i === maxRetries - 1;
      const isNetworkError = 
        err?.message?.includes("ECONNRESET") ||
        err?.message?.includes("fetch failed") ||
        err?.message?.includes("Request timeout") ||
        err?.code === "ECONNRESET" ||
        err?.name === "AbortError";

      if (isLastAttempt || !isNetworkError) {
        throw err;
      }

      // Wait before retry (exponential backoff)
      await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

export async function GET() {
  try {
    const result = await withRetry(async () => {
      const { data, error, status } = await supabase
        .from(TABLE)
        .select("count")
        .eq("id", ROW_ID)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      const currentCount = data?.count ?? 0;
      const nextCount = currentCount + 1;

      const { error: upsertError, data: updated } = await supabase
        .from(TABLE)
        .upsert({ id: ROW_ID, count: nextCount }, { onConflict: "id" })
        .select("count")
        .single();

      if (upsertError) {
        throw upsertError;
      }

      return { count: updated?.count ?? nextCount };
    });

    return Response.json(
      result,
      { status: 200, headers: { "cache-control": "no-store" } }
    );
  } catch (err) {
    // Only log error details in development
    if (process.env.NODE_ENV === "development") {
      console.warn("Profile view increment failed:", {
        message: err?.message || "Unknown error",
        code: err?.code,
        name: err?.name,
      });
    }
    
    return Response.json(
      { error: "Unable to update profile views", count: null },
      { status: 500, headers: { "cache-control": "no-store" } }
    );
  }
}
