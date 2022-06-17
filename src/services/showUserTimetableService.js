const Users = require('../models/User');
const AppError = require('../utils/AppError');

const showUserTimetableService = async ({ userId }) => {
  const userSubjects = await Users.findById(userId, '2 3 4 5 6 7');

  if (!userSubjects) {
    throw new AppError('User not found.', 404);
  }

  return userSubjects;
}

module.exports = showUserTimetableService;