const store = require('../data/store');

function create(card) {
  const item = { id: store.nextCardId++, ...card };
  store.cards.push(item);
  return item;
}

function findByUser(userId) {
  return store.cards.filter(c => c.userId === userId);
}

function findById(id) {
  return store.cards.find(c => c.id === Number(id));
}

function update(id, data) {
  const card = findById(id);
  if (!card) return null;
  Object.assign(card, data);
  return card;
}

function remove(id) {
  const idx = store.cards.findIndex(c => c.id === Number(id));
  if (idx === -1) return false;
  store.cards.splice(idx, 1);
  return true;
}

module.exports = { create, findByUser, findById, update, remove };
