const validateRate = (req, res, next) => {
  const { talk } = req.body;

  if (Number(talk.rate) <= 0 || Number(talk.rate) > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
if (!talk.rate) {
  return res.status(400).json(
{ message: 'O campo "rate" é obrigatório' },
  );
}
if (!Number.isInteger(talk.rate)) {
  return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
}

 next();
};
module.exports = validateRate;