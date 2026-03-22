import { FaUsers, FaTools, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-50 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-24 text-center overflow-hidden">
        
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20"></div>
          <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full -bottom-20 -right-20"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 relative z-10"
        >
          About FixIt
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg relative z-10"
        >
          FixIt is a modern platform designed to connect skilled local workers
          with people who need reliable home services quickly and easily.
        </motion.p>
      </section>

      {/* OUR MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-700 text-lg leading-8 max-w-3xl mx-auto"
        >
          Our mission is to empower local workers by giving them a digital platform
          where they can connect directly with customers. We aim to make it easier
          for people to find trusted professionals like electricians, plumbers,
          mechanics, and other service providers in their local area.
        </motion.p>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Do
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[{
            icon: FaUsers,
            title: "Connect Workers",
            desc: "We help skilled local workers connect with customers."
          },{
            icon: FaTools,
            title: "Provide Services",
            desc: "Find electricians, plumbers, mechanics and more."
          },{
            icon: FaHandshake,
            title: "Build Trust",
            desc: "We build trust with ratings and verified profiles."
          }].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl text-center"
              >
                <Icon className="text-indigo-600 text-5xl mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose FixIt
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {[[
            "Trusted and verified workers",
            "Fast and easy service booking",
            "Wide range of services",
            "Affordable professionals",
            "Transparent ratings"
          ],[
            "Secure platform",
            "Support for workers",
            "Easy communication",
            "Reliable experience",
            "Growing network"
          ]].map((list, i) => (
            <motion.ul
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4 text-lg text-gray-700"
            >
              {list.map((item, idx) => (
                <li key={idx}>✔ {item}</li>
              ))}
            </motion.ul>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {["500+ Workers", "30+ Services", "10K+ Customers", "4.8★ Rating"].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <h3 className="text-3xl font-bold text-indigo-600">
                {stat.split(" ")[0]}
              </h3>
              <p className="text-gray-600">
                {stat.split(" ").slice(1).join(" ")}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[{
            name: "Gaurav Yadav",
            role: "Founder & Developer",
            img: "https://randomuser.me/api/portraits/men/41.jpg"
          },{
            name: "Rahul Singh",
            role: "Operations Manager",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
          },{
            name: "Anjali Verma",
            role: "Customer Support",
            img: "https://randomuser.me/api/portraits/women/44.jpg"
          }].map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl"
            >
              <img
                src={m.img}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-100"
              />
              <h3 className="font-semibold text-lg">{m.name}</h3>
              <p className="text-gray-500">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Join Our Platform
        </motion.h2>

        <p className="mb-6">
          Find trusted workers or grow your business with FixIt.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg"
          onClick={() => navigate("/join")}
        >
          Get Started
        </motion.button>
      </section>

    </div>
  );
}