const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const talkerPath = path.resolve(__dirname, '../../talker.json');

const readTalkers = async () => {
  try {
    const data = await fs.readFile(talkerPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

const writeTalkers = async (talker) => {
  try {
    const write = await fs
    .writeFile(path.resolve(__dirname, '../../talker.json'), JSON.stringify(talker));
    return write;
  } catch (err) {
    console.log(err.message);
  }
};

const returnToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  readTalkers,
  writeTalkers,
  returnToken,
};
