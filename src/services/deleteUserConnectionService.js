const Users = require('../models/User');
const AppError = require('../utils/AppError');

const deleteUserConnectionService = async ({ userId, connectionId }) => {
  const user = await Users.findById(userId);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  const index = user.connections.findIndex(connection => connection === connectionId);

  if (index < 0) {
    return;
  }

  user.connections.splice(index, 1);
  await user.save();
}

module.exports = deleteUserConnectionService;