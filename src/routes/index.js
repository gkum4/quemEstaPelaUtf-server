const { Router } = require('express');

const adminRouter = require('./admin.routes');
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/user', userRouter);
routes.use('/admin', adminRouter);

module.exports = routes;