const Users = require('../models/User');
const AppError = require('../utils/AppError');

const listAllUsersService = async ({ userId }) => {
  const users = await Users.find({}, 'username updatedAt createdAt');

  const result = [...users];

  const index = result.findIndex(user => String(user._id) === userId);

  if (index < 0) {
    throw new AppError('Error listing users.', 400);
  }

  result.splice(index, 1);

  return result;
}

module.exports = listAllUsersService;