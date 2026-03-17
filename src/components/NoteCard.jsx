import React from "react";

const NoteCard = ({ note, onClick }) => {
  return (
    <div
      onClick={() => onClick(note)}
      className="bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer 
      hover:shadow-xl hover:-translate-y-1 transition duration-300 
      flex flex-col justify-between h-44"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {note.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {note.subject}
          </p>
        </div>

        {/* Right Badge */}
        <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {note.type}
        </span>
      </div>

      {/* Middle Info */}
      <div className="flex justify-between text-sm text-gray-600 mt-3">
        
        {/* Left Info */}
        <div className="space-y-1">
          <p>🎓 {note.course}</p>
          {note.branch && <p>🏫 {note.branch}</p>}
        </div>

        {/* Right Info */}
        <div className="text-right space-y-1">
          <p>📅 {note.year}</p>
          {note.semester && <p>Sem {note.semester}</p>}
        </div>

      </div>

      {/* Bottom Action */}
      <div className="flex justify-between items-center mt-4">
        
        <span className="text-xs text-gray-400">
          Click to open
        </span>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View →
        </button>

      </div>
    </div>
  );
};

export default NoteCard;