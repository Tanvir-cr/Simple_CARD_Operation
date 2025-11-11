const express = require('express');

const regRoute = require('./src/registration/registration.route');
const authRoute = require('./src/auth/auth.route');
const userRoute = require('./src/model/user/user.route');
const cardRoute = require('./src/card/card.route');

const app = express();

// ✅ Use express.json() directly
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Simple CARD Operation API' });
});

app.use('/api/register', regRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/cards', cardRoute);

module.exports = app;
