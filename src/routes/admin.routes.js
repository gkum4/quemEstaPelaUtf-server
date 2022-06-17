const { Router } = require('express');

const authenticateAdminUserService = require('../services/authenticateAdminUserService');
const listAllUsersService = require('../services/listAllUsersService');
const deleteUserService = require('../services/deleteUserService');
const ensureAutenticated = require('../middlewares/ensureAuthenticated');
const ensureIsAdminUser = require('../middlewares/ensureIsAdminUser');

const adminRouter = Router();

adminRouter.use(ensureAutenticated);
adminRouter.use(ensureIsAdminUser);

adminRouter.post('/admin/login', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const { token } = await authenticateAdminUserService({ email, username, password });

    return res.json({ token });
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

adminRouter.get('/admin/users', async (req, res) => {
  const userId = req.user.id;

  try {
    const users = await listAllUsersService();

    return res.json({ users });
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

adminRouter.delete('/admin/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    await deleteUserService({ userId });

    return res.json({});
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

module.exports = adminRouter;