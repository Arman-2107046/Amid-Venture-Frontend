// ContactForm.tsx
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      setStatus("Please accept the privacy policy before submitting.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          number: "",
          subject: "",
          message: "",
          agree: false,
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send. Try again later.");
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-16 bg-[#fef8f7] border-b-stone-400">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-10 space-y-6 bg-white border border-gray-200 shadow-sm rounded-xl"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="w-full p-3 text-sm placeholder-gray-400 bg-transparent border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full p-3 text-sm placeholder-gray-400 bg-transparent border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-700">Contact Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Your phone number"
              required
              className="w-full p-3 text-sm placeholder-gray-400 bg-transparent border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              className="w-full p-3 text-sm placeholder-gray-400 bg-transparent border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your query"
            rows={6}
            required
            className="w-full p-3 text-sm placeholder-gray-400 bg-transparent border border-gray-300 rounded-sm resize-none focus:outline-none focus:ring-1 focus:ring-pink-400"
          ></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-4 h-4 text-pink-400 border-gray-300 rounded focus:ring-pink-400"
          />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-pink-500 underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 text-base font-medium text-white transition bg-black rounded hover:bg-gray-900"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-center text-gray-600">{status}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
