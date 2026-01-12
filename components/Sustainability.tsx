"use client";
import { motion } from "framer-motion";

export default function Sustainability() {
  return (
    <section className="py-20 bg-green-50 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold"
      >
        Sustainability Promise 🌍
      </motion.h2>
      <p className="mt-4 max-w-xl mx-auto">
        Recyclable bottles, water conservation, and eco-friendly processes.
      </p>
    </section>
  );
}
