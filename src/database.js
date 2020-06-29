const Mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connection = () =>
  Mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connection;
