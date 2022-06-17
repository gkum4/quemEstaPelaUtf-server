const Users = require('../models/User');

const ensureIsAdminUser = (req, res, next) => {
  const userId = req.user.id;

  let user;

  try {
    user = await Users.findById(userId);
  } catch (error) {
    return res.status(500).json({ message: 'Error searching for user.' });
  }

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  if (!user.isAdmin) {
    return res.status(401).json({ message: 'User is not admin.' });
  }

  return next();
}

module.exports = ensureIsAdminUser;