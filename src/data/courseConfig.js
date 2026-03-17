const courseConfig = {
  BTech: {
    hasBranch: true,
    years: ["1st", "2nd", "3rd", "4th"],
    semesters: ["1","2","3","4","5","6","7","8"],
    branches: ["CSE", "IT", "ME", "CE", "EEE"]
  },
  BCA: {
    hasBranch: false,
    years: ["1st", "2nd", "3rd"],
    semesters: ["1","2","3","4","5","6"]
  },
  MCA: {
    hasBranch: false,
    years: ["1st", "2nd"],
    semesters: ["1","2","3","4"]
  },
  BBA: {
    hasBranch: false,
    years: ["1st", "2nd", "3rd"],
    semesters: ["1","2","3","4","5","6"]
  },
  BA: {
    hasBranch: false,
    years: ["1st", "2nd", "3rd"],
    semesters: []
  }
};

export default courseConfig;