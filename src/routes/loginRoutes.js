const express = require('express');
const { returnToken } = require('./utils');
const validateLogin = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, (_req, res) => {
  const tokenObj = { token: returnToken() };

  res.status(200).json(tokenObj);
});

module.exports = loginRouter;
