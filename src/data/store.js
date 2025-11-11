const store = {
  users: [
    {
      id: 1,
      name: "string",
      email: "string",
      password: "string",
      required: true
    }
  ], // { id, name, email, password }

  sessions: new Map(), // token -> userId

  cards: [
    {
      id: 1,
      userId: 1,
      title: "string",
      content: "string"
    }
  ], // { id, userId, title, content }

  nextUserId: 1,
  nextCardId: 1,
};

module.exports = store;

