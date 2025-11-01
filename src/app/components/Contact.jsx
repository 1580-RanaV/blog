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

    const { error } = await supabase.from("messages").insert([
      { email: email.trim(), message: message.trim() },
    ]);

    if (error) {
      console.error(error);
      setFeedback({ type: "error", text: "Couldn't send it, please try later :(" });
    } else {
      setFeedback({ type: "success", text: "Got your message! :)" });
      setShowTick(true);
      setTimeout(() => setShowTick(false), 1600);
      setMessage("");
      setEmail("");
    }

    setIsSubmitting(false);
  }

  function handleKeyDown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      if (!btnDisabled) handleSubmit();
    }
  }

  return (
    <div className="w-full font-regular">
      {/* Section heading */}
      <h2 className="font-regular font-semibold uppercase tracking-[0.14em] text-neutral-500">
        Contact
      </h2>
      <p className="mt-2 font-regular font-semibold leading-tight tracking-tight text-neutral-900">
        Reach out to me
      </p>

      <article className="font-regular">
        <p className="font-regular leading-relaxed text-neutral-700 mt-2">
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
            className="w-full resize-y rounded-lg border border-neutral-300 bg-white p-3 leading-relaxed text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-900 focus:ring-0 font-regular"
          />
        </div>

        {/* Email + Submit */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row font-regular">
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
              className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-900 focus:ring-0 font-regular"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={btnDisabled}
            className={`flex-1 inline-flex items-center justify-center rounded-lg px-4 py-3 font-regular font-medium text-white transition-all focus:outline-none
              ${
                btnDisabled
                  ? "bg-neutral-400 cursor-not-allowed"
                  : "bg-neutral-900 hover:bg-neutral-800 active:translate-y-[1px]"
              }`}
            aria-live="polite"
          >
            {showTick ? (
              <span className="inline-flex items-center gap-2 font-regular">
                <FaCheck aria-hidden="true" />
                Sent
              </span>
            ) : isSubmitting ? (
              "Sending…"
            ) : (
              "Send"
            )}
          </button>
        </div>

        {/* Feedback */}
        {feedback.text && (
          <div className="mt-3" aria-live="polite">
            <p
              className={`font-regular leading-relaxed ${
                feedback.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {feedback.text}
            </p>
          </div>
        )}

        {/* Footnote */}
        <p className="mt-4 text-neutral-500 font-regular">
          Tip: <span className="font-regular">⌘/Ctrl + Enter</span> to send.
        </p>
      </article>
    </div>
  );
}
