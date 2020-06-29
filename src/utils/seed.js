const csv = require('csv-parser');
const fs = require('fs');
const PokemonModel = require('../models/Pokemon');

const populate = async () => {
  PokemonModel.findOne({}).then((res) => {
    if (res) return;
    fs.createReadStream('src/files/pokemon.csv')
      .pipe(csv())
      .on('data', (row) => {
        const pokemon = {};
        pokemon.name = row.Name;
        pokemon.types = [row['Type 1'], row['Type 2']];
        pokemon.generation = row.Generation;
        PokemonModel.create(pokemon).then(() => {
          console.log(`${pokemon.name} was inserted`);
        });
      })
      .on('end', () => console.log('CSV file successfully processed'));
  });
};

module.exports = {
  populate,
};
