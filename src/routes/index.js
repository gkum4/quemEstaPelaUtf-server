const { Router } = require('express');

const adminRouter = require('./admin.routes');
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

const routes = Router();

routes.use(adminRouter);
routes.use(authRouter);
routes.use(userRouter);

module.exports = routes;