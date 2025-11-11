const service = require('./registration.service');

async function register(req, res) {
	try {
		const user = await service.register(req.body);
		res.status(201).json({ ok: true, user });
	} catch (err) {
		res.status(400).json({ ok: false, message: err.message });
	}
}

module.exports = { register };
