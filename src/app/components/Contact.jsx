"use client";

import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });
  const [showTick, setShowTick] = useState(false);

  const isValidEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubmit = async () => {
    // basic validation
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
      {
        email: email.trim(),
        message: message.trim(),
      },
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
  };

  const btnDisabled = isSubmitting || !email || !message;

  return (
    <section className="w-full py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section heading (matches scale/weight) */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Reach out to me
        </h2>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <p className="font-mono text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                Leave a message below — I check my inbox now and then.
              </p>

              {/* Message */}
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="what's poppin?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-4 w-full rounded-2xl bg-white text-neutral-900 placeholder-neutral-400 ring-1 ring-inset ring-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder-neutral-500 dark:ring-neutral-800 p-4"
              />

              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                {/* Email */}
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl bg-white text-neutral-900 placeholder-neutral-400 ring-1 ring-inset ring-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder-neutral-500 dark:ring-neutral-800 p-4"
                  />
                </div>

                {/* Submit */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={btnDisabled}
                  className={`flex-1 relative inline-flex items-center justify-center rounded-2xl px-4 py-4 font-medium text-white shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    btnDisabled
                      ? "bg-neutral-400 dark:bg-neutral-700 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600 active:translate-y-[1px]"
                  }`}
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
                    "lezzzgo"
                  )}
                </button>
              </div>

              {/* Feedback */}
              <div className="mt-3 flex justify-center" aria-live="polite">
                {feedback.text ? (
                  <p
                    className={`font-mono text-sm sm:text-base ${
                      feedback.type === "error"
                        ? "text-red-600 dark:text-red-400"
                        : "text-green-600 dark:text-green-400"
                    }`}
                  >
                    {feedback.text}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
