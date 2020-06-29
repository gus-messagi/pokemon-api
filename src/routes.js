const express = require('express');
const PokemonModel = require('./models/Pokemon');

const router = express.Router();

router.get('/pokemons', (_, res) => {
  PokemonModel.find().then((result) => {
    res.send(result);
  });
});

router.get('/pokemons/:name', (req, res) => {
  const { name } = req.params;
  PokemonModel.find({ name })
    .then((result) => {
      if (result.length === 0) res.status(404).send('Pokemon was not found');
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
