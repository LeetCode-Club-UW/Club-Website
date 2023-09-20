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
  }
]

export { type LessonType, LESSONS };