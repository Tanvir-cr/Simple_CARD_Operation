const model = require('./registration.model');

function register(payload) {
	const { name, email, password } = payload;
	if (!name || !email || !password) throw new Error('Missing fields');
	const user = model.createUser({ name, email, password });
	const { password: _p, ...rest } = user;
	return rest;
}

module.exports = { register };
