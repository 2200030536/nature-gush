"use client";
import { motion } from "framer-motion";

const products = ["250ml", "500ml", "1L", "20L Jar"];

export default function Products() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
        {products.map((p) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={p}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold">{p}</h3>
            <p className="text-gray-500 mt-2">Crystal clear purity</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
