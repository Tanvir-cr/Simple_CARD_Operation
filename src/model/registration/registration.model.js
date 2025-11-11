const store = require('../../data/store');

function createUser({ name, email, password }) {
	const existing = store.users.find(u => u.email === email);
	if (existing) throw new Error('Email already registered');
	const user = { id: store.nextUserId++, name, email, password };
	store.users.push(user);
	return user;
}

function findByEmail(email) {
	return store.users.find(u => u.email === email);
}

function findById(id) {
	return store.users.find(u => u.id === id);
}

module.exports = { createUser, findByEmail, findById };
