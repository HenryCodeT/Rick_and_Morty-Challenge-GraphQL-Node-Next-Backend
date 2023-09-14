// //// FIELDS ///////////////////
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

// using cors permitions
app.use(cors());
// midle ware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// This is where we import the r&m routes function from our routes.js file
const AllMyRickAndMortyRoutes = require("./api/routes/routes");
AllMyRickAndMortyRoutes(app);

const server = app.listen(port, () =>
  console.log(`Fake API (Core) on port ${server.address().port}!`)
);