const { sign } = require('jsonwebtoken');

const AppError = require('../utils/AppError');
const Users = require('../models/User');
const compareHash = require('../utils/crypt/compareHash');

const authenticateUserService = async ({ email, username, password }) => {
  if (!email && !username) {
    throw new AppError('No email or username found on request.', 400);
  }

  let user;

  if (email) {
    user = await Users.findOne({ email });
  }

  if (!user) {
    user = await Users.findOne({ username });
  }

  if (!user) {
    throw new AppError('Authentication failed due to incorrect username or password.', 401);
  }
  
  const passwordMatched = await compareHash(password, user.password);

  if (!passwordMatched) {
    throw new AppError('Authentication failed due to incorrect username or password.', 401);
  }

  const secret = process.env.APP_SECRET;

  const token = sign({}, secret, {
    subject: user.id,
    expiresIn: '30d',
  });

  delete user.password;

  return { token };
}

module.exports = authenticateUserService;