const store = require('../data/store');
const userModel = require('../model/user/user.model');

function UserCheck(req, res, next) {
	const auth = req.headers['authorization'] || req.headers['x-auth-token'];
	if (!auth) return res.status(401).json({ ok: false, message: 'No token' });
	const token = auth.startsWith('Bearer ') ? auth.slice(7) : auth;
	const userId = store.sessions.get(token);
	if (!userId) return res.status(401).json({ ok: false, message: 'Invalid token' });
	const user = userModel.getById(userId);
	if (!user) return res.status(401).json({ ok: false, message: 'User not found' });
	req.user = { id: user.id, name: user.name, email: user.email };
	next();
}

module.exports = UserCheck;
