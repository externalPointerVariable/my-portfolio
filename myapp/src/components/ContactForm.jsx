import React, { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setMessageSent(true);

    setTimeout(() => setMessageSent(false), 3000);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {messageSent && (
        <div className="text-green-500 text-center font-medium transition-opacity duration-500 ease-in-out opacity-100">
          ✅ Message sent! I'll get back to you soon.
        </div>
      )}

      <div>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 rounded-lg text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 rounded-lg text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div>
        <textarea
          id="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 rounded-lg text-black dark:text-white placeholder-gray-500 min-h-[150px] focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition disabled:bg-gray-700 disabled:cursor-not-allowed flex justify-center items-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
