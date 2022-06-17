const Users = require('../models/User');
const AppError = require('../utils/AppError');

const listAllUsersService = async () => {
  const users = await Users.find({}, 'username');

  return users;
}

module.exports = listAllUsersService;