const express = require('express');

const RickAndMortyRouter = express.Router();

const RickAndMortyController = require('../controllers/rickAndMorty.controllers');

RickAndMortyRouter.get('/', RickAndMortyController.findAllCharacters);
RickAndMortyRouter.get('/humans', RickAndMortyController.findHumanCharacters);

module.exports = RickAndMortyRouter;