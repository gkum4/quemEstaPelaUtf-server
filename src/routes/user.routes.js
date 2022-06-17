const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const addUserConnectionService = require('../services/addUserConnectionService');
const deleteUserConnectionService = require('../services/deleteUserConnectionService');
const listUserConnectionsService = require('../services/ListUserConnectionsService');
const showUserConnectionService = require('../services/showUserConnectionService');

const userRouter = Router();

userRouter.use(ensureAuthenticated);

userRouter.get('/user/close-users', async (req, res) => {
  const userId = req.user.id;

  try {
    const connections = await listUserConnectionsService({ userId });

    return res.json({ connections });
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.get('/user/connection/:id', (req, res) => {
  const userId = req.user.id;
  const connectionId = req.params.id;

  try {
    const connectionData = await showUserConnectionService({ userId, connectionId });

    return res.json(connectionData);
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.post('/user/connection', (req, res) => {
  const userId = req.user.id;
  const connectionId = req.body.id;

  try {
    await addUserConnectionService({ userId, connectionId });

    return res.json({});
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.delete('/user/connection/:id', (req, res) => {
  const userId = req.user.id;
  const connectionId = req.params.id;

  try {
    await deleteUserConnectionService({ userId, connectionId });

    return res.json({});
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
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