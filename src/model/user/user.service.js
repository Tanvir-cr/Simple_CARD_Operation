const model = require('./user.model');

function profile(userId) {
	const u = model.getById(userId);
	if (!u) throw new Error('User not found');
	const { password, ...rest } = u;
	return rest;
}

module.exports = { profile };
