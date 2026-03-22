import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTools } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Workers", path: "/workers" },
    { name: "About", path: "/about" },
  ];

  // Scroll hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.25 }}
          className="bg-white shadow-md fixed w-full z-50"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* 🔥 LOGO + TEXT */}
            <Link to="/">
              <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition">
                <FaTools className="text-indigo-600 text-2xl" />
                <h1 className="text-2xl font-bold text-indigo-600">
                  FixIt
                </h1>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 font-medium">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className={`relative group ${
                    location.pathname === link.path
                      ? "text-indigo-600 font-bold"
                      : "text-gray-700"
                  } hover:text-indigo-500 transition`}
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-3xl font-bold text-gray-700 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                    open ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 shadow-md"
              >
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`py-2 text-gray-700 font-medium hover:text-indigo-500 transition ${
                      location.pathname === link.path
                        ? "text-indigo-600 font-bold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.nav>
      )}
    </AnimatePresence>
  );
}