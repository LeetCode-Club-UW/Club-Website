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
  },
  {
    title: "Graphs & DFS Search",
    date: new Date("October 17, 2023 18:30:00 CST"),
    description: "A lesson about Graphs and Depth-First Search.",
    recordingUrl: "https://mediaspace.wisc.edu/media/LeetCode%20Club%20Meeting%203%20-%20Ingraham%20B10-10_17_23-18%3A30%3A10/1_5871ow49",
    resourcesUrl: "https://docs.google.com/document/d/1QhdcqXLdqWsaZ-LCTPQoXLCrfLr7_mxx5WGnGegoxuc/edit"
  },
  {
    title: "Binary Search",
    date: new Date("November 2, 2023 18:30:00 CST"),
    description: "A lesson about Binary Search.",
    recordingUrl: "https://mediaspace.wisc.edu/media/LeetCode%20Club%20Meeting%204%20-%20Computer%20Science%201325-11_02_23-18%3A35%3A16/1_qquvtkgc",
    resourcesUrl: "https://docs.google.com/document/d/1Zoz09ppcgbnOX2-8xgwqw3yXUmPCa23R0LLLzZQ3lLM/edit"
  },
  {
    title: "Greedy",
    date: new Date("November 14, 2023 18:30:00 CST"),
    description: "A lesson about the Greedy Algorithm.",
    recordingUrl: "https://mediaspace.wisc.edu/media/LeetCode%20Club%20Meeting%205%20-%20Computer%20Science%201325-11_14_23-18%3A32%3A39/1_134fm5bq",
    resourcesUrl: "https://docs.google.com/document/d/1BCbnPTSWz52vWW5_eW-zfOfvQwDe4k-M9QWo2_0-4Gc/edit"
  }
]

export { type LessonType, LESSONS };