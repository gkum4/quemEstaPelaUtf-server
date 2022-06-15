const { verify } = require('jsonwebtoken');

const ensureAutenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'JWT token is missing' });
  }
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, process.env.APP_SECRET);

    const { sub } = decoded;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid JWT token' });
  }
}

module.exports = ensureAutenticated;