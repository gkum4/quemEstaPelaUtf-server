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

  if (user._id === connectionId) {
    throw new AppError('Connection id is the same as user id.');
  }

  if (user.connections.find(connection => connection === connectionId)) {
    throw new AppError("Connection already exists in user's connections.");
  }

  user.connections.push(connectionId);
  await user.save();
}

module.exports = addUserConnectionService;