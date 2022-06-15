const { Router } = require('express');

const Users = require('../models/User');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const userRouter = Router();

userRouter.use(ensureAuthenticated);

userRouter.get('/user/close-users', async (req, res) => {
  const userId = req.user.id;

  console.log(await Users.findOne({id: userId}));

  return res.json({});
});

userRouter.get('/user/:id', (req, res) => {
  const userId = req.user.id;
  const otherUserId = req.params.id;

  return res.json({});
});

userRouter.get('/user/timetable', (req, res) => {
  const userId = req.user.id;

  return res.json({});
});

userRouter.get('/user/timetable/:dayNumber', (req, res) => {
  const userId = req.user;
  const dayNumber = req.params.dayNumber;

  return res.json({});
});


module.exports = userRouter;