module.exports = [
  {
    id: "p1",
    userId: "u1",
    content: "Just learned Express.js ",
    likes: ["u2"],
    comments: [
      {
        userId: "u2",
        text: "Nice bro!"
      }
    ],
    createdAt: new Date("2026-04-15T10:00:00Z")
  },
  {
    id: "p2",
    userId: "u2",
    content: "MongoDB is powerful",
    likes: [],
    comments: [],
    createdAt: new Date("2026-04-16T08:00:00Z")
  }
];