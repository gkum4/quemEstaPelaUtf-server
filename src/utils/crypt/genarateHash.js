const { hash } = require('bcryptjs');

const generateHash = async (value) => {
  const hashedValue = await hash(value, 8);

  return hashedValue;
}

module.exports = generateHash;