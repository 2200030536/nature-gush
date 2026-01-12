"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Source", desc: "Natural spring water from protected reserves" },
  { title: "Filter", desc: "Multi-stage purification process" },
  { title: "Test", desc: "Rigorous quality control checks" },
  { title: "Bottle", desc: "Sealed in eco-friendly packaging" },
];

export default function Process() {
  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">{i + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
