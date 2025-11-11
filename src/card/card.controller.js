const service = require('./card.service');

async function create(req, res) {
  try {
    const card = service.createCard(req.user.id, req.body);
    res.status(201).json({ ok: true, card });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
}

async function list(req, res) {
  try {
    const cards = service.listCards(req.user.id);
    res.json({ ok: true, cards });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
}

async function update(req, res) {
  try {
    const card = service.updateCard(req.user.id, req.params.id, req.body);
    res.json({ ok: true, card });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
}

async function remove(req, res) {
  try {
    service.deleteCard(req.user.id, req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
}

module.exports = { create, list, update, remove };
