const Mongoose = require('mongoose');

const pokemonSchema = new Mongoose.Schema({
  name: { type: 'string', required: true },
  types: { type: [], required: false },
  generation: { type: Number, required: true },
});

module.exports = Mongoose.model('Pokemon', pokemonSchema);
