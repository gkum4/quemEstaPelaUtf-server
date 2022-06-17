const Users = require('../models/User');
const AppError = require('../utils/AppError');

const showUserTimetableService = ({ userId }) => {
  const user = await Users.findById(userId);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  return {
    2: user[2],
    3: user[3],
    4: user[4],
    5: user[5],
    6: user[6],
    7: user[7],
  };
}

module.exports = showUserTimetableService;