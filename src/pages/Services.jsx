import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/services";
import { motion } from "framer-motion";

export default function Services() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredServices = servicesData.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Our Services
      </motion.h1>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredServices.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/workers?service=${s.name}`)}
              className="bg-white h-36 flex flex-col items-center justify-center p-4 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer text-center font-medium"
            >
              <Icon className="text-indigo-500 text-4xl mb-2" />
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No services found.
        </p>
      )}
    </div>
  );
}