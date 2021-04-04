const faunadb = require('faunadb');

const client = new faunadb.Client({ secret: process.env.SECRET_FAUNADB_KEY });
const query = faunadb.query;

module.exports = {
  client,
  query
};