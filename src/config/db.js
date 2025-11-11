
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/simple_card_db';

function connectDB(opts = {}) {
	const options = Object.assign({
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, opts);

	return mongoose.connect(MONGO_URI, options)
		.then((conn) => {
			const c = conn.connection;
			console.log(`MongoDB connected: ${c.host}:${c.port}/${c.name}`);
			return conn;
		})
		.catch((err) => {
			console.error('MongoDB connection error:', err && err.message ? err.message : err);
			throw err;
		});
}

function disconnectDB() {
	if (mongoose.connection && mongoose.connection.readyState !== 0) {
		return mongoose.disconnect();
	}
	return Promise.resolve();
}

module.exports = {
	connectDB,
	disconnectDB,
	mongoose,
};
