"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { generate } from "random-words";
import { sendEmail } from "@/lib/sendEmail";

export default function TypingChallenge() {
  const [referenceText, setReferenceText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  // Generate new text when component mounts
  useEffect(() => {
    generateText();
  }, []);

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
    if (userInput === referenceText) {
      const end = Date.now();
      const minutes = (end - startTime) / 60000;
      const words = referenceText.trim().split(" ").length;
      const speed = Math.round(words / minutes);
      setEndTime(end);
      setWpm(speed);
      if (speed > 88) {
        setResult("🔥 You beat Harsha! 🎉");
        sendNotification(speed);
      } else {
        setResult("😎 Not fast enough! Try again.");
      }
    }
  }, [userInput]);

  const generateText = () => {
    const wordsArray = generate(10);
    setReferenceText(wordsArray.join(" "));
  };

  const handleChange = (e) => {
    if (!endTime) {
      setUserInput(e.target.value);
    }
  };

  const reset = () => {
    setUserInput("");
    setStartTime(null);
    setEndTime(null);
    setWpm(null);
    setResult("");
    generateText();
    inputRef.current.focus();
  };

  const sendNotification = async (speed) => {
    try {
      await sendEmail({
        name: "Typing Challenger",
        email: "typing@bot.com",
        wpm: speed,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="typing-challenge"
      className="relative py-20 px-4 text-white text-center overflow-hidden"
    >
      {/* Background Grid Layer */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-cyan-400"
      >
        🚀 Typing Challenge
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-lg max-w-3xl mx-auto"
      >
        Harsha's highest typing speed is 88 WPM. Can you beat that?
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-lg max-w-3xl mx-auto text-purple-300"
      >
        {referenceText}
      </motion.p>

      <textarea
        ref={inputRef}
        value={userInput}
        onChange={handleChange}
        rows={3}
        className="w-full max-w-3xl mx-auto text-white p-4 rounded-lg border-2 border-white shadow-md focus:outline-none bg-transparent"
        placeholder="Start typing here..."
      />

      <div className="mt-6 space-y-3">
        {wpm && <p className="text-xl text-green-400">Your WPM: {wpm}</p>}
        {result && <p className="text-xl text-pink-400">{result}</p>}
        {endTime && (
          <button
            onClick={reset}
            className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
          >
            Try Again
          </button>
        )}
      </div>
    </section>
  );
}
