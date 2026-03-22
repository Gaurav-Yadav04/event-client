import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkerCard from "../components/WorkerCard";
import WorkerModal from "../components/WorkerModal"; // ✅ ADD
import { workers } from "../data/workers";
import { servicesData } from "../data/services";
import {
  FaBolt,
  FaToolbox,
  FaHome,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  // ✅ Modal state
  const [selected, setSelected] = useState(null);

  const testimonials = [
    { text: "Excellent electricians! Very professional and timely service.", name: "Rajesh" },
    { text: "Plumber fixed my leak in no time. Highly recommended!", name: "Priya" },
    { text: "Great mechanics, very skilled and trustworthy.", name: "Amit" },
    { text: "Loved the AC repair service, arrived on time!", name: "Sneha" },
    { text: "Amazing sofa cleaning, my home looks brand new.", name: "Ankit" },
  ];

  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-32 px-6 text-center">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-72 h-72 bg-indigo-400 rounded-full opacity-20 -top-24 -left-24"></div>
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 -bottom-24 -right-24"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-4xl sm:text-5xl md:text-6xl font-bold z-10"
        >
          Find Trusted Local Workers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-lg relative z-10"
        >
          Electrician • Plumber • Mechanic • Mason
        </motion.p>
      </section>

      {/* FEATURED WORKERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Workers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {workers.slice(0, 4).map((w, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-xl overflow-hidden shadow cursor-pointer"
            >
              {/* ✅ CHANGE: open modal instead of navigate */}
              <WorkerCard
                worker={w}
                onClick={() => setSelected(w)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="bg-gray-50 py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Popular Services
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {servicesData.slice(0, 10).map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 2 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(`/workers?service=${s.name}`)}
                className="bg-white p-6 rounded-xl shadow cursor-pointer text-center"
              >
                <div className="text-indigo-500 text-5xl mb-3">
                  <Icon />
                </div>
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          How It Works
        </motion.h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {[FaBolt, FaToolbox, FaHome].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow"
            >
              <Icon className="text-indigo-500 text-6xl mb-4" />
              <h3 className="font-bold text-xl mb-2">
                {i === 0 ? "Search Service" : i === 1 ? "Hire Worker" : "Get Job Done"}
              </h3>
              <p className="text-gray-500 text-sm">
                {i === 0
                  ? "Find the service you need from our professionals."
                  : i === 1
                  ? "Select a trusted worker and hire with ease."
                  : "Enjoy hassle-free service at your home."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What Our Customers Say
        </motion.h2>

        <div className="max-w-5xl mx-auto overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow"
              >
                <p className="text-gray-700">{t.text}</p>
                <p className="mt-4 font-semibold">- {t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Hire Trusted Workers Today!
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-full shadow"
          onClick={() => navigate("/join")}
        >
          Get Started
        </motion.button>
      </section>

      {/* ✅ MODAL */}
      <WorkerModal
        worker={selected}
        close={() => setSelected(null)}
      />

    </div>
  );
}