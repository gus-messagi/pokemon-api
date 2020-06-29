'use strict';

const express = require('express');
const db = require('./database');
const seed = require('./utils/seed');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(routes);

app.listen(3000, () => {
  db()
    .then(() => {
      seed.populate().then(() => console.log('Connection is working.'));
    })
    .catch((err) => console.log(err));
});
