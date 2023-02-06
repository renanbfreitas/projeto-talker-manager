const express = require('express');

const router = express.Router();

const { readTalkers } = require('./utils/index');

router.get('/', async (_req, res) => {
  const talkers = await readTalkers();

  res.status(200).json(talkers);
});

module.exports = {
  router,
};
