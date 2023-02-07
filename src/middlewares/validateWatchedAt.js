const validateWatchedAt = (req, res, next) => {
    const { talk } = req.body;
  
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (!talk.watchedAt || talk.watchedAt === '') {
      return res.status(400)
      .json({ message: 'O campo "watchedAt" é obrigatório' });
    }
  
    if (!dateRegex.test(talk.watchedAt)) {
      return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
  
    next();
  };
  
  module.exports = validateWatchedAt;