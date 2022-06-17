const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const addUserConnectionService = require('../services/addUserConnectionService');
const deleteUserConnectionService = require('../services/deleteUserConnectionService');
const listUserConnectionsWithFilteredSubjectsService = require(
  '../services/listUserConnectionsWithFilteredSubjectsService'
);
const showUserConnectionService = require('../services/showUserConnectionService');
const showUserTimetableService = require('../services/showUserTimetableService');
const updateUserTimetableService = require('../services/updateUserTimetable');

const userRouter = Router();

userRouter.use(ensureAuthenticated);

userRouter.get('/user/close-users', async (req, res) => {
  const userId = req.user.id;

  try {
    const connections = await listUserConnectionsWithFilteredSubjectsService({ userId });

    return res.json({ connections });
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.get('/user/connection/:id', async (req, res) => {
  const userId = req.user.id;
  const connectionId = req.params.id;

  try {
    const connectionData = await showUserConnectionService({ userId, connectionId });

    return res.json(connectionData);
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.post('/user/connection', async (req, res) => {
  const userId = req.user.id;
  const connectionId = req.body.id;

  try {
    await addUserConnectionService({ userId, connectionId });

    return res.json({});
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.delete('/user/connection/:id', async (req, res) => {
  const userId = req.user.id;
  const connectionId = req.params.id;

  try {
    await deleteUserConnectionService({ userId, connectionId });

    return res.json({});
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.get('/user/timetable', async (req, res) => {
  const userId = req.user.id;

  try {
    const timetable = await showUserTimetableService({ userId });

    return res.json(timetable);
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});

userRouter.put('/user/timetable/:dayNumber', async (req, res) => {
  const userId = req.user.id;
  const dayNumber = req.params.dayNumber;
  const updatedSubjects = req.body.subjects;

  try {
    const updatedData = await updateUserTimetableService({ userId, dayNumber, updatedSubjects });

    return res.json(updatedData);
  } catch (error) {
    return res.status(error.statusCode ? error.statusCode : 400).json({ message: error.message });
  }
});


module.exports = userRouter;