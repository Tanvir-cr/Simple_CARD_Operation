const model = require('./auth.model');
const store = require('../data/store');

function login({ email, password }) {
	if (!email || !password) throw new Error('Missing email or password');
	const user = model.findUserByEmailAndPassword(email, password);
	if (!user) throw new Error('Invalid credentials');
	const token = `${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
	store.sessions.set(token, user.id);
	return { token, user: { id: user.id, name: user.name, email: user.email } };
}

module.exports = { login };
