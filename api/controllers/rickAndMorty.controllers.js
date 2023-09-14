const { getCharacters } = require("../services/rickAndMorty.graphql");

const findAllCharacters = (request,response) => {
  getCharacters()
    .then(characters=>{
      const charactersResult = characters.data.characters
      response.statusMessage = 'Characters Found'
      response.status(200).json(charactersResult)
    })
    .catch(err=>{
      response.statusMessage="Something Went Wrong"
      response.status(400).json(err)
    })
}

const findHumanCharacters = (request,response) => {
  getCharacters()
    .then(characters=>{
      const filteredCharacters =  characters.data.characters.results.filter(character => character.species==='Human')
      response.statusMessage = 'Characters Found'
      response.status(200).json(filteredCharacters)
    })
    .catch(err=>{
      response.statusMessage="Something Went Wrong"
      response.status(400).json(err)
    })
}

module.exports = { 
  findAllCharacters,
  findHumanCharacters
}