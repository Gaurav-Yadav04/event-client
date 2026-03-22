import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-6xl font-bold text-indigo-600"
      >
        404
      </motion.h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for doesn't exist.
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg"
        onClick={() => navigate("/")}
      >
        Go Home
      </motion.button>

    </div>
  );
}