'use client';

import React, { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showTick, setShowTick] = useState(false);

  const handleSubmit = async () => {
    if (!email || !message) {
      setFeedback('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setFeedback('');

    const { data, error } = await supabase.from('messages').insert([
      {
        email,
        message,
      },
    ]);

    if (error) {
      setFeedback('couldn\'t get it, can u pls try later? :(');
      console.error(error);
    } else {
      setFeedback('got your message! :)');
      setShowTick(true);
      setTimeout(() => {
        setShowTick(false);
      }, 3000);
      setMessage('');
      setEmail('');
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <section>
        <h3 className="font-sans text-black mb-5">Reach out to me</h3>
        <div className="mb-5">
          <div className="border border-gray-200 border-1 p-5 rounded-2xl shadow-lg">
            <div className="mb-2 flex items-center">
              <p className="text-black leading-relaxed font-sans">
                Leave a message below, I do check my messages every now and then!
              </p>
            </div>
            <input
              type="text"
              placeholder="what's poppin?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-200 border-1 p-4 rounded-2xl shadow-lg mb-5"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-1/2 border border-gray-200 border-1 p-4 rounded-2xl shadow-lg mb-5"
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-1/2 border text-white ${
                  isSubmitting ? 'bg-gray-400' : 'bg-green-500'
                } border-1 p-4 rounded-2xl shadow-lg mb-5 relative`}
              >
                {showTick ? (
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white animate-bounce">
                    <FaCheck />
                  </span>
                ) : (
                  'lezzzgo'
                )}
              </button>
            </div>
            <div className="flex justify-center">
              {feedback && (
                <p className={feedback}>
                  {feedback}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;