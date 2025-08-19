"use client";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section className="min-h-[92vh] relative flex items-center justify-center overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-pink-600 to-rose-500 dark:opacity-90 opacity-95" />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold drop-shadow-2xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, I'm <span className="text-yellow-300">Aman Kumar</span>
        </motion.h1>

        <motion.p
          className="mt-5 text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <Typewriter words={["Java Developer", "Web Learner", "YouTuber"]} />
        </motion.p>

        {/* 🔥 Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* ✅ Resume Download Button */}
          <a
            href="/Amankumar_resume.pdf"
            download="Aman_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            ⬇ Download Resume
          </a>

          <a
            href="https://github.com/amankr556"
            target="_blank"
            className="btn-ghost"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aman-kumar-3b450634b"
            target="_blank"
            className="btn-ghost"
          >
            LinkedIn
          </a>

          <a
            href="https://www.youtube.com/@rcbfan1k"
            target="_blank"
            className="btn-ghost"
          >
            YouTube
          </a>
        </motion.div>
      </motion.div>

      {/* floating effects */}
      <motion.div
        className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
    </section>
  );
}
