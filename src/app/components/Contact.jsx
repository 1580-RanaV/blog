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
        console.warn("Supabase insert error:", error.message ?? error, error);
        setFeedback({ type: "error", text: "Could not send it. Ping me on any link below instead—thanks for understanding." });
      } else {
        setFeedback({ type: "success", text: "Got your message!" });
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
    "text-white underline underline-offset-4 active:translate-y-[1px]";
  const disabledBtn = "text-white/40 cursor-not-allowed";

  return (
    <section className="w-full font-regular text-white space-y-4">
      <div className="space-y-4">
        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Tell me about a project or just say hi."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full rounded-none bg-transparent px-0 py-3 text-white outline-none border-none focus:ring-0 focus:outline-none"
          />
        </div>

        {/* Email + Submit */}
        <div className="flex flex-col gap-3 sm:flex-row">
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
              onKeyDown={(e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                  e.preventDefault();
                  if (!btnDisabled) handleSubmit();
                }
              }}
              className="w-full rounded-none bg-transparent px-0 py-3 text-white outline-none border-none focus:ring-0 focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={btnDisabled}
            aria-disabled={btnDisabled}
            className={`flex-1 inline-flex items-center justify-start px-0 py-3 font-semibold transition-all focus:outline-none ${btnDisabled ? disabledBtn : enabledBtn}`}
            aria-live="polite"
          >
            {showTick ? (
              <span className="inline-flex items-center gap-2">
                <FaCheck aria-hidden="true" />
                sent
              </span>
            ) : isSubmitting ? (
              "sending..."
            ) : (
              "send"
            )}
          </button>
        </div>

        {/* Feedback */}
        {feedback.text && (
          <div className="mt-2" aria-live="polite">
            <p className="leading-relaxed text-white/80">
              {feedback.text}
            </p>
          </div>
        )}

        {/* Footnote */}
        <p className="text-white/60 text-sm">
          tip: <span className="font-regular">Cmd/Ctrl + Enter</span> to send.
        </p>
      </div>
    </section>
  );
}
