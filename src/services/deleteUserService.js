const Users = require('../models/User');
const AppError = require('../utils/AppError');

const deleteUserService = async ({ userId }) => {
  const user = await Users.findByIdAndDelete(userId);
}

module.exports = deleteUserService;