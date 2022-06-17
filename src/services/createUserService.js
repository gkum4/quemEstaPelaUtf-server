const Users = require('../models/User');
const AppError = require('../utils/AppError');
const generateHash = require('../utils/crypt/genarateHash');

const createUserService = async ({ email, username, password }) => {
  if (!email || !username || !password) {
    throw new AppError('Missing data.');
  }

  const checkUserExistsWithEmail = await Users.findOne({ email });
  const checkUserExistsWithUsername = await Users.findOne({ username });

  if (checkUserExistsWithEmail || checkUserExistsWithUsername) {
    throw new AppError('Email or username already used');
  }

  const hashedPassword = await generateHash(password);

  const userData = { 
    email, 
    username, 
    password: hashedPassword, 
    connections: [],
    isAdmin: false
  };

  const user = await new Users(userData).save();

  return {
    _id: user._id,
    username: user.username,
    email: user.email
  };
}

module.exports = createUserService;