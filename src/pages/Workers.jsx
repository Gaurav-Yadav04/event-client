import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WorkerCard from "../components/WorkerCard";
import WorkerModal from "../components/WorkerModal";
import { workers } from "../data/workers";
import { motion } from "framer-motion";

export default function Workers() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const serviceFromURL = query.get("service");

  const [selected, setSelected] = useState(null);
  const [service, setService] = useState(serviceFromURL || "All");
  const [userLocation, setUserLocation] = useState(null);
  const [filtered, setFiltered] = useState(workers);

  const services = ["All", ...new Set(workers.map((w) => w.job))];

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  useEffect(() => {
    if (serviceFromURL) {
      setService(serviceFromURL);
    }
  }, [serviceFromURL]);

  useEffect(() => {
    let result = workers;

    if (service !== "All") {
      result = result.filter((w) => w.job === service);
    }

    if (userLocation) {
      result = result
        .map((w) => ({
          ...w,
          distance: getDistance(
            userLocation.lat,
            userLocation.lng,
            w.lat,
            w.lng
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    setFiltered(result);
  }, [service, userLocation]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Our Workers
      </motion.h1>

      {/* FILTER BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10"
      >
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-60"
        >
          {services.map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>

        <button
          onClick={getLocation}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 w-full md:w-auto"
        >
          📍 Use My Location
        </button>
      </motion.div>

      {/* WORKERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map((w, i) => (
          <motion.div
            key={w.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <WorkerCard worker={w} onClick={setSelected} />
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <WorkerModal
        worker={selected}
        close={() => setSelected(null)}
      />
    </div>
  );
}