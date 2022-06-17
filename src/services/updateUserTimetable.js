const Users = require('../models/User');
const AppError = require('../utils/AppError');
const checkIfTimeCodeIsValid = require('../utils/timeCode/checkIfTimeCodeIsValid');
const checkIfOneTimeCodeIsBeforeOther = require('../utils/timeCode/checkIfOneTimeCodeIsBeforeOther');

const validateSubjects = (subjects) => {
  for (const subject of subjects) {
    if (
      !subject.name || 
      !subject.code || 
      !subject.class || 
      !subject.locationCode || 
      !subject.timeStartCode ||
      !subject.timeEndCode
    ) {
      throw new AppError('Invalid subjects.');
    }

    if (
      !checkIfTimeCodeIsValid(subject.timeStartCode) || 
      !checkIfTimeCodeIsValid(subject.timeEndCode)
    ) {
      throw new AppError('Invalid subjects.');
    }

    if (!checkIfOneTimeCodeIsBeforeOther(subject.timeStartCode, subject.timeEndCode)) {
      throw new AppError('Invalid subjects.');
    }
  }
}

const updateUserTimetableService = async ({ userId, dayNumber, updatedSubjects = [] }) => {
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

  validateSubjects(updatedSubjects);

  user[dayNumber].subjects = updatedSubjects;
  await user.save();

  return user[dayNumber];
}

module.exports = updateUserTimetableService;