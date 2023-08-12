type ClubMember = {
  name: string;
  role: string;
  email?: string;
  photo: string;
}

const MEMBERS: ClubMember[] = [
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
  }
];

export { type ClubMember, MEMBERS };