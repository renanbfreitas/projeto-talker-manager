const validateAge = (req, res, next) => {
    const { age } = req.body;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof age !== 'number') {
    return res.status(400).json({ message: 'O campo "age" deve ser do tipo "number"' });
  }
  if (!Number.isInteger(Number(age))) {
    return res.status(400).json({
      message: 'O campo "age" deve ser um "number" do tipo inteiro',
    });
  }
  if (Number(age) < 18) {
    return res.status(400).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
  next();
};

module.exports = validateAge;