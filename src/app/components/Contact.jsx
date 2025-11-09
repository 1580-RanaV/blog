"use client";

import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { FaCheck } from "react-icons/fa";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });
  const [showTick, setShowTick] = useState(false);

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const btnDisabled = isSubmitting || !email || !message;

  async function handleSubmit() {
    if (!email || !message) {
      setFeedback({ type: "error", text: "Please fill in all fields." });
      return;
    }
    if (!isValidEmail(email)) {
      setFeedback({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: "", text: "" });

    try {
      const { error } = await supabase.from("messages").insert([
        { email: email.trim(), message: message.trim() },
      ]);

      if (error) {
        // Avoid red dev overlay; still keep a useful console line
        console.warn("Supabase insert error:", error.message ?? error, error);
        setFeedback({ type: "error", text: "Couldn't send it, please try later :( you can ping me on any of the links at the bottom of the site or in the profile, thank you for understanding." });
      } else {
        setFeedback({ type: "success", text: "Got your message! :)" });
        setShowTick(true);
        setTimeout(() => setShowTick(false), 1600);
        setMessage("");
        setEmail("");
      }
    } catch (err) {
      console.warn("Unexpected submit error:", err);
      setFeedback({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleKeyDown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      if (!btnDisabled) handleSubmit();
    }
  }

  const enabledBtn =
    "bg-neutral-900 text-white hover:bg-neutral-800 active:translate-y-[1px]";
  const disabledBtn = "bg-neutral-300 text-neutral-600 cursor-not-allowed";

  return (
    <div className="w-full font-regular text-neutral-900">
      <p className="mt-2 font-regular font-semibold leading-tight tracking-tight text-neutral-900">
        Reach out to me
      </p>

      <article className="font-regular text-neutral-900">
        <p className="font-regular leading-relaxed mt-2 text-neutral-900">
          Leave a message below — I check my inbox now and then.
        </p>

        {/* Message */}
        <div className="mt-5">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your note…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full resize-y rounded-lg border border-neutral-300 bg-white p-3 leading-relaxed text-neutral-900 outline-none focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-400/50"
          />
        </div>

        {/* Email + Submit */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row font-regular text-neutral-900">
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-neutral-900 outline-none focus:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-400/50"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={btnDisabled}
            aria-disabled={btnDisabled}
            className={`flex-1 inline-flex items-center justify-center rounded-lg px-4 py-3 font-regular font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 ${btnDisabled ? disabledBtn : enabledBtn}`}
            aria-live="polite"
          >
            {showTick ? (
              <span className="inline-flex items-center gap-2">
                <FaCheck aria-hidden="true" />
                Sent
              </span>
            ) : isSubmitting ? (
              "sending…"
            ) : (
              "send"
            )}
          </button>
        </div>

        {/* Feedback */}
        {feedback.text && (
          <div className="mt-3" aria-live="polite">
            <p className="font-regular leading-relaxed text-neutral-900">
              {feedback.text}
            </p>
          </div>
        )}

        {/* Footnote */}
        <p className="mt-4 font-regular text-neutral-900">
          tip: <span className="font-regular">⌘/Ctrl + Enter</span> to send.
        </p>
      </article>
    </div>
  );
}
