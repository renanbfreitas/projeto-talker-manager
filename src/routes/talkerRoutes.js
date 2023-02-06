const express = require('express');

const router = express.Router();

const { readTalkers } = require('./utils/index');

router.get('/', async (_req, res) => {
  const talkers = await readTalkers();

  res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readTalkers();

  const talkerById = talkers
    .find((talker) => talker.id === Number(id));

  if (!talkerById) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(talkerById);
});

module.exports = {
  router,
};
