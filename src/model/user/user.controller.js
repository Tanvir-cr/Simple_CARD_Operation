const service = require('./user.service');

async function profile(req, res) {
	try {
		const data = await service.profile(req.user.id);
		res.json({ ok: true, user: data });
	} catch (err) {
		res.status(400).json({ ok: false, message: err.message });
	}
}

module.exports = { profile };
