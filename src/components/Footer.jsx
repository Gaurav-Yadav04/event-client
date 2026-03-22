import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            FixIt
          </h2>
          <p className="text-sm leading-6">
            FixIt connects skilled local workers with people who need reliable home services.
            Book electricians, plumbers, mechanics and more in seconds.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {["Electrician", "Plumber", "Mechanic", "Mason", "Carpenter", "AC Repair"].map(service => (
              <li 
                key={service} 
                className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Workers", path: "/workers" },
              { name: "About", path: "/about" },
            ].map(link => (
              <li key={link.name} className="relative group">
                <Link to={link.path} className="hover:text-white transition-colors duration-200">
                  {link.name}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 9876543210</li>
            <li>📧 support@fixit.com</li>
            <li>📍 Lucknow, India</li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl">
            <FaGlobe className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110" />
            <FaFacebookF className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110" />
            <FaInstagram className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110" />
            <FaTwitter className="cursor-pointer hover:text-white transition-transform duration-200 hover:scale-110" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © 2026 FixIt. All Rights Reserved.
      </div>
    </footer>
  );
}