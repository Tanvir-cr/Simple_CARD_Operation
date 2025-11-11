const store = {
  users: [{
    name: "string", required: true,
    email: "string", required: true,
    password: "string", required: true,
    id: "number"
  }], // { id, name, email, password }
  sessions: new Map(token => userId), // token -> userId
  cards: [
    {
        id: "number",
        userId: "number",
        title: "string",
        content: "string"
    }
  ], // { id, userId, title, content }
  nextUserId: 1,
  nextCardId: 1,
};

module.exports = store;
