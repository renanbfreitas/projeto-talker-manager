const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const router = require('./routes/talkerRoutes');
const loginRouter = require('./routes/loginRoutes');

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', router);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
