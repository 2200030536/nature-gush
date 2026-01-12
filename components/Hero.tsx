"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-500 to-green-400 flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Pure Water. Natural Life.</h1>
        <p className="mt-4 text-lg">
          Nature Gush – Bottled with purity and care
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold">
          Explore Our Process
        </button>
      </motion.div>
    </section>
  );
}
