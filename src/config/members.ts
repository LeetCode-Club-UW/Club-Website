type MemberType = {
  name: string;
  role: string;
  email?: string;
  photo: string;
}

const MEMBERS: MemberType[] = [
  {
    name: "Max Maeder",
    role: "Co-founder",
    email: "max@leetcodeclub.org",
    photo: "/max.jpeg"
  },
  {
    name: "Jeremy Kintana",
    role: "Co-founder",
    email: "jeremy@leetcodeclub.org",
    photo: "/jeremy.jpeg"
  },
  {
    name: "Rahul Hathwar",
    role: "Executive team",
    photo: "/rahul.jpeg"
  },
  {
    name: "Sarthak Agrawal",
    role: "Executive team",
    photo: "/sarthak.jpeg"
  },
  {
    name: "Nikita Agarwal",
    role: "Executive team",
    photo: "/nikita.jpeg"
  }
];

const COMPANIES = [
  {
    name: "Amazon",
    photo: "/amazon.png"
  },
  {
    name: "Meta",
    photo: "/meta.png"
  },
  {
    name: "Splunk",
    photo: "/splunk.png"
  },
  {
    name: "Walmart Global Tech",
    photo: "/walmart.png"
  },
  {
    name: "Langan",
    photo: "/langan.png"
  },
  {
    name: "Extreme Engineering Solutions",
    photo: "/xes.png"
  }
]

export { type MemberType, MEMBERS, COMPANIES };