type LessonType = {
  title: string;
  date: Date;
  description: string;
  recordingUrl: string;
  resourcesUrl: string;
}

const LESSONS: LessonType[] = [
  {
    title: "Sliding Window",
    date: new Date("September 19, 2023 18:30:00 CST"),
    description: "An introductory lesson into the Sliding Window concept, with a small section about simple Two Pointers.",
    recordingUrl: "https://mediaspace.wisc.edu/media/t/1_zkknzx52",
    resourcesUrl: "https://docs.google.com/document/d/1wmEsex0S4yLnERw61qHX4O8mr-OhOfQyiSmuCpFjU7k/edit"
  },
  {
    title: "Two Pointers",
    date: new Date("October 3, 2023 18:30:00 CST"),
    description: "A lesson about Time Complexity, Big-O Notation and the Two Pointers concept.",
    recordingUrl: "https://mediaspace.wisc.edu/media/LeetCode+Club+Meeting+1+-+Biochemistry+1125-10+03+23-18A30A07/1_is3tzqls",
    resourcesUrl: "https://docs.google.com/document/d/1tERJj_FBdnUpZ51rzfpeXU_AA7hyhi0GTY_x2lM9-x4/edit"
  }
]

export { type LessonType, LESSONS };