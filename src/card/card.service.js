const model = require('./card.model');

function createCard(userId, payload) {
  const { title, content } = payload;
  if (!title) throw new Error('Title required');
  return model.create({ userId, title, content: content || '' });
}

function listCards(userId) {
  return model.findByUser(userId);
}

function updateCard(userId, id, payload) {
  const card = model.findById(id);
  if (!card || card.userId !== userId) throw new Error('Not found');
  return model.update(id, payload);
}

function deleteCard(userId, id) {
  const card = model.findById(id);
  if (!card || card.userId !== userId) throw new Error('Not found');
  return model.remove(id);
}

module.exports = { createCard, listCards, updateCard, deleteCard };
