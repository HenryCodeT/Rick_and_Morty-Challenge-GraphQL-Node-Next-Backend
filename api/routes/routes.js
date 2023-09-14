// Routers
const RickAndMortyRouter = require('./rickAndMorty.routes')

function routes(app) {
  // Routes
  app.use('/api/rick-morty-characters', RickAndMortyRouter);
}

module.exports = routes;
