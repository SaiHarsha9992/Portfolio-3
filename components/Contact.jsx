"use client";

import { useRef, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDiscord,
  FaMedium,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hgnd1bv", // e.g., service_123abc
        "template_qr88xjb", // e.g., template_ab12cd
        form.current,
        "UfyNsDNPDhoFoCWRP" // e.g., aBcD123456789
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-20 px-6 text-white text-center bg-[#029696] bg-[linear-gradient(to_right,#36454F_1px,transparent_1px),linear-gradient(to_bottom,#36454F_1px,transparent_1px)] bg-[size:14px_24px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-white"
      >
        📬 Let’s Connect
      </motion.h2>
      <p className="mb-10 max-w-xl mx-auto text-white">
        Got an idea, collaboration, or just want to say hi? Drop a message or
        find me on my platforms below.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto grid gap-6 text-left"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-cyan-500 px-6 py-3 rounded-md text-white font-semibold transition-transform hover:scale-105"
        >
          Send Message
        </button>
        {sent && (
          <p className="text-black text-sm mt-2 bg-green-400 p-4 rounded-2xl">
            ✅ Message sent successfully!
          </p>
        )}
      </form>

      <div className="mt-12 flex justify-center gap-6 text-3xl text-black">
        <a
          href="mailto:gaduharsha72@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/SaiHarsha9992"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/g-kedarinadh-sai-harsha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@SaiHarsha9992"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaMedium />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
