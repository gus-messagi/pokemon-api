'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./database');
const seed = require('./utils/seed');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(routes);

app.listen(3333, () => {
  try {
    const createP = database.client.query(
      database.query.Create(
        database.query.Collection('test'),
        {
          data: {
            testField: 'testValue'
          },
        }
      )
    );

    createP.then((response) => {
      console.log(response);
    }).catch(console.log);
  } catch(err) {
    console.log(err)
  }
  // db()
  //   .then(() => {
  //     seed.populate().then(() => console.log('Connection is working.'));
  //   })
  //   .catch((err) => console.log(err));
});
