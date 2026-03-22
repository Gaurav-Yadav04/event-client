import { useState } from "react";
import { motion } from "framer-motion";

export default function JoinWorker() {

  const [form, setForm] = useState({
    name: "",
    job: "",
    phone: "",
    location: "",
    experience: "",
    about: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setForm({ ...form, image: file });

      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Application Submitted 🚀");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl"
      >

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Join as Worker
        </h2>

        {/* IMAGE UPLOAD */}
        <div className="flex flex-col items-center mb-6">
          <label className="cursor-pointer">

            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
              />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 text-sm">
                Upload Photo
              </div>
            )}

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-4">

          <input name="name" placeholder="Full Name" onChange={handleChange} required className="input"/>
          <input name="job" placeholder="Service (e.g. AC Repair)" onChange={handleChange} required className="input"/>
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required className="input"/>
          <input name="location" placeholder="Location" onChange={handleChange} required className="input"/>
          <input name="experience" placeholder="Experience (e.g. 5 Years)" onChange={handleChange} className="input"/>

          <textarea name="about" placeholder="About your work" onChange={handleChange} className="input col-span-2"/>

        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold"
        >
          Submit Application
        </motion.button>

      </motion.form>

    </div>
  );
}