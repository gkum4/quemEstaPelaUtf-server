const Users = require('../models/User');
const AppError = require('../utils/AppError');

const showUserConnectionService = async ({ userId, connectionId }) => {
  const user = await Users.findById(userId);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  const userHasConnection = user.connections.includes(connectionId);

  if (!userHasConnection) {
    throw new AppError('User does not have the specified connection.');
  }

  const connection = await Users.findById(connectionId, 'username 2 3 4 5 6 7');

  return connection;
}

module.exports = showUserConnectionService;