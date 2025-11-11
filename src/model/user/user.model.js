const store = require('../../data/store');

function getById(id) {
	return store.users.find(u => u.id === id);
}

module.exports = { getById };
