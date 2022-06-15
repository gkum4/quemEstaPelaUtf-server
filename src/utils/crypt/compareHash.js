const { compare } = require('bcryptjs');

const compareHash = async (value, hashedValue) => {
  const isSame = await compare(value, hashedValue);

  return isSame;
}

module.exports = compareHash;