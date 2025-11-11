const store = require('../data/store');

function findUserByEmailAndPassword(email, password) {
	return store.users.find(u => u.email === email && u.password === password);
}

module.exports = { findUserByEmailAndPassword };
