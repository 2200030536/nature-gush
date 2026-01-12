"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-6">About naturegush</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          naturegush delivers premium bottled water sourced from pristine natural springs.
          Our commitment to quality and sustainability ensures that every drop meets the
          highest standards of purity and taste. We believe in preserving nature while
          providing healthy hydration to communities worldwide.
        </p>
      </motion.div>
    </section>
  );
}
