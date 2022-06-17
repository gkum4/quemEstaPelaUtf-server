const Users = require('../models/User');
const AppError = require('../utils/AppError');

const updateUserTimetableService = ({ userId, dayNumber, updatedSubjects = [] }) => {
  const user = await Users.findById(userId);

  if (!user) {
    throw new AppError('User not found.', 404);
  }

  if (isNaN(dayNumber)) {
    throw new AppError('Specified day number is not a number');
  }

  const number = parseInt(dayNumber);

  if (!(number >= 2 && number <= 7)) {
    throw new AppError('Specified day number does not correspond to a day of the week');
  }

  user[dayNumber].subjects = updatedSubjects;
  await user.save();

  return user[dayNumber];
}

module.exports = updateUserTimetableService;