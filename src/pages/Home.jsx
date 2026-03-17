import React, { useState } from "react";
import notesData from "../data/notesData";
import NoteCard from "../components/NoteCard";
import Filters from "../components/Filters";

const Home = () => {
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  // 🔍 Filter Logic
  const filteredNotes = notesData.filter((note) => {
    return (
      (course ? note.course === course : true) &&
      (branch ? note.branch === branch : true) &&
      (year ? note.year === year : true) &&
      (semester ? note.semester === semester : true) &&
      (type ? note.type === type : true) &&
      note.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  // 📄 Full Screen
  if (selectedNote) {
    return (
      <div className="w-full h-screen flex flex-col bg-gray-50">
        <div className="p-3 bg-white shadow flex items-center justify-between">
          <button
            onClick={() => setSelectedNote(null)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            ← Back
          </button>
          <h2>{selectedNote.title}</h2>
        </div>

        <iframe
          src={selectedNote.link}
          className="flex-1 w-full"
          title={selectedNote.title}
        />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Filters */}
     <Filters
       course={course}
       setCourse={setCourse}
       setBranch={setBranch}
       setYear={setYear}
       setSemester={setSemester}
       setType={setType}
       setSearch={setSearch}
      />

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onClick={setSelectedNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;