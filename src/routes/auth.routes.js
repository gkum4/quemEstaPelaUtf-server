const { Router } = require('express');

const createUserService = require('../services/createUserService');
const authenticateUserService = require('../services/authenticateUserService');

const authRouter = Router();

authRouter.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await createUserService({ email, username, password });

    return res.json(user);
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

authRouter.post('/login', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const { token } = await authenticateUserService({ email, username, password });

    return res.json({ token });
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

authRouter.post('/recovery', (req, res) => {
  const { email } = req.body;

  // TODO

  return res.json({});
});

module.exports = authRouter;