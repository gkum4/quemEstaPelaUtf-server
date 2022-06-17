const allTimeCodes = require('./allTimeCodes');

// start and end codes must be valid timeCodes.
const checkIfOneTimeCodeIsBeforeOther = (start, end) => {
  let startIndex;
  let endIndex;
  
  allTimeCodes.forEach((item, index) => {
    if (item === start) {
      startIndex = index;
    }

    if (item === end) {
      endIndex = index;
    }
  });

  return startIndex < endIndex;
}


module.exports = checkIfOneTimeCodeIsBeforeOther;