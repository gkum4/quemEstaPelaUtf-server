const Users = require('../models/User');
const AppError = require('../utils/AppError');

const listUserConnectionsWithFilteredSubjectsService = async ({ userId }) => {
  const user = await Users.findById(userId);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  if (user.connections.length === 0) {
    return [];
  }

  const connections = [];
  const dayNumber = new Date().getDay();

  for (const connectionId of user.connections) {
    const connection = await Users.findById(connectionId, `username ${dayNumber}`);

    if (!connection) {
      console.log(`User (_id: ${userId}) connection (id: ${connectionId}) not found.`);
    }

    connections.push(connection);
  }

  return connections;
}

module.exports = listUserConnectionsWithFilteredSubjectsService;