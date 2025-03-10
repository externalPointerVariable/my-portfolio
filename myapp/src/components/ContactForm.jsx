import React, {useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  
    await new Promise(resolve => setTimeout(resolve, 2000))
  
    setIsLoading(false);
    setMessageSent(true);
  }
  

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {messageSent && (
        <div className="text-green-500 text-center font-medium">
          ✅ Message sent! I'll get back to you soon.
        </div>
      )}

      <div>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <textarea
          id="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 min-h-[150px] focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition disabled:bg-gray-700"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
