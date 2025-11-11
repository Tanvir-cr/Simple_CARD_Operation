const service = require('./auth.service');

async function login(req, res) {
	try {
		const data = await service.login(req.body);
		res.json({ ok: true, ...data });
	} catch (err) {
		res.status(400).json({ ok: false, message: err.message });
	}
}

module.exports = { login };
