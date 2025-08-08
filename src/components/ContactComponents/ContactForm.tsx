
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);

    const data = {
      user_name: formData.get("user_name")?.toString() || "",
      user_email: formData.get("user_email")?.toString() || "",
      contact_number: formData.get("contact_number")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok && form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen px-4 py-20 bg-stone-50">
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-5xl space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 gap-px bg-white border border-gray-300 sm:grid-cols-2">
          <div className="p-6">
            <label className="block mb-2 text-sm text-gray-700">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="What's your name?"
              className="w-full placeholder-gray-400 bg-transparent focus:outline-none"
            />
          </div>
          <div className="p-6 border-l border-gray-300">
            <label className="block mb-2 text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email address"
              className="w-full placeholder-gray-400 bg-transparent focus:outline-none"
            />
          </div>
          <div className="p-6 border-t border-gray-300">
            <label className="block mb-2 text-sm text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contact_number"
              placeholder="Your phone number"
              className="w-full placeholder-gray-400 bg-transparent focus:outline-none"
            />
          </div>
          <div className="p-6 border-t border-l border-gray-300">
            <label className="block mb-2 text-sm text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="How Can We Help You?"
              className="w-full placeholder-gray-400 bg-transparent focus:outline-none"
            />
          </div>
          <div className="col-span-1 p-6 border-t border-gray-300 sm:col-span-2">
            <label className="block mb-2 text-sm text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us about your query"
              className="w-full placeholder-gray-400 bg-transparent resize-none focus:outline-none"
            />
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start text-sm text-gray-700">
          <input type="checkbox" required className="mt-1 mr-2" />
          <span>
            I am bound by the terms of the Service. I accept the{" "}
            <Link to={"/privacy"} className="underline hover:text-slate-800">
            Privacy Policy
            </Link>
            {/* <a href="#" className="underline hover:text-slate-800">Privacy Policy</a>. */}
          </span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-4 font-semibold text-white transition-all bg-black hover:opacity-90 active:scale-95"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
