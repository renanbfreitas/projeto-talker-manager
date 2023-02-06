const express = require('express');
const { returnToken } = require('./utils');

const loginRouter = express.Router();

loginRouter.post('/', (_req, res) => {
  const tokenObj = { token: returnToken() };

  res.status(200).json(tokenObj);
});

module.exports = {
  loginRouter,
};
