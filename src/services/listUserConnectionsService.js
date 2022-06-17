const Users = require('../models/User');
const AppError = require('../utils/AppError');

const listUserConnectionsService = async ({ userId }) => {
  const user = await Users.findById(userId);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  if (user.connections.length === 0) {
    return [];
  }

  const connections = [];

  for (const connectionId of user.connections) {
    const connection = await Users.findById(connectionId);

    if (!connection) {
      console.log(`User (_id: ${userId}) connection (id: ${connectionId}) not found.`);
    }

    connections.push(connection);
  }

  const dayNumber = new Date().getDay();

  const result = connections.map(connection => {
    const filteredData = {
      _id: connection._id,
      username: connection.username
    };
    filteredData[dayNumber] = connection[dayNumber];

    return filteredData;
  });

  return result;
}

module.exports = listUserConnectionsService;