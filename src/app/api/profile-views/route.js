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

export async function GET() {
  try {
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

    return Response.json(
      { count: updated?.count ?? nextCount },
      { status: 200, headers: { "cache-control": "no-store" } }
    );
  } catch (err) {
    console.warn("Profile view increment failed:", err);
    return Response.json(
      { error: "Unable to update profile views" },
      { status: 500, headers: { "cache-control": "no-store" } }
    );
  }
}
