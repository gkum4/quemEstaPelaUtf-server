const Users = require('../models/User');
const AppError = require('../utils/AppError');

const addUserConnectionService = async ({ userId, connectionId }) => {
  const connectionUserExists = await Users.findById(connectionId);

  if (!connectionUserExists) {
    throw new AppError('Connection id specified does not match any user.', 404);
  }

  const user = await Users.findById(userId);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  user.connections.push(connectionId);
  await user.save();
}

module.exports = addUserConnectionService;