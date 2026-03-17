import React from "react";
import courseConfig from "../data/courseConfig";

const Filters = ({
  course,
  setCourse,
  setBranch,
  setYear,
  setSemester,
  setType,
  setSearch
}) => {

  const config = courseConfig[course];

  return (
    <div className="flex flex-wrap gap-4 mb-6 bg-white p-4 rounded-xl shadow">

      {/* Course */}
      <select
        onChange={(e) => setCourse(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Course</option>
        {Object.keys(courseConfig).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Branch (only if exists) */}
      {config?.hasBranch && (
        <select onChange={(e) => setBranch(e.target.value)} className="p-2 border rounded">
          <option value="">All Branch</option>
          {config.branches.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      )}

      {/* Year */}
      {config && (
        <select onChange={(e) => setYear(e.target.value)} className="p-2 border rounded">
          <option value="">All Year</option>
          {config.years.map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
      )}

      {/* Semester */}
      {config?.semesters?.length > 0 && (
        <select onChange={(e) => setSemester(e.target.value)} className="p-2 border rounded">
          <option value="">All Sem</option>
          {config.semesters.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      )}

      {/* Type */}
      <select onChange={(e) => setType(e.target.value)} className="p-2 border rounded">
        <option value="">All Type</option>
        <option value="Notes">Notes</option>
        <option value="PYQ">PYQ</option>
        <option value="Sessional">Sessional</option>
      </select>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-60"
      />
    </div>
  );
};

export default Filters;