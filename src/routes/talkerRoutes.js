const express = require('express');
const validateName = require('../middlewares/validateName');
const validateRate = require('../middlewares/validateRate');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateToken = require('../middlewares/validateToken');
const { readTalkers, writeTalkers } = require('./utils');

const router = express.Router();

router.get('/search', validateToken, async (req, res) => {
  const { q } = req.query;
  const talkers = await readTalkers();

  if (!q || q === '') {
    return res.status(200).json(talkers);
  }

  const talkersFiltered = talkers
    .filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));
  if (talkersFiltered.length === 0) {
    return res.status(200).json([]);
  }

  res.status(200).json(talkersFiltered);
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

router.get('/', async (_req, res) => {
  const talkers = await readTalkers();

  res.status(200).json(talkers);
});

router.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
  const talkers = await readTalkers();
  const newTalker = {
  id: talkers.length + 1,
  ...req.body,
};
  const talkerObj = [...talkers, newTalker];
  await writeTalkers(talkerObj);
  res.status(201).json(newTalker);
});

router.put('/:id',
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,
    async (req, res) => {
    const { id } = req.params;
    const talkers = await readTalkers();
    const talkerIndex = talkers.findIndex((e) => e.id === Number(id));
    talkers[talkerIndex] = { id: Number(id), ...req.body };
    await writeTalkers(talkers);
    const findTalker = talkers.find((e) => e.id === Number(id)); 
    res.status(200).json(findTalker);
    });

    router.delete('/:id', validateToken, async (req, res) => {
      const { id } = req.params;
      const talkers = await readTalkers();
      const talkerIndex = talkers
        .findIndex((talker) => talker.id === Number(id));
    
      talkers.splice(talkerIndex, 1);
      await writeTalkers(talkers);
    
      res.status(204).end();
    });

module.exports = router;
