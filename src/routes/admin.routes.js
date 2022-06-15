const { Router } = require('express');

const adminRouter = Router();

adminRouter.post('/admin/login', (req, res) => {
  const { email, username, password } = req.body;

  return res.json({});
});

adminRouter.get('/admin/users', (req, res) => {
  const userId = req.user.id;

  return res.json({});
});

adminRouter.delete('/admin/users/:id', (req, res) => {
  const userId = req.params.id;

  return res.json({});
});

module.exports = adminRouter;