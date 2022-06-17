const allTimeCodes = require('./allTimeCodes');

const checkIfTimeCodeIsValid = (timeCode) => {
  const found = allTimeCodes.find(item => item === timeCode);

  if (!found) {
    return false;
  }

  return true;
};

module.exports = checkIfTimeCodeIsValid;