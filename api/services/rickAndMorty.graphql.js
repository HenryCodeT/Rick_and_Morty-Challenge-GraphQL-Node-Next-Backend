const axios = require('axios'); // Import Axios if you're using Node.js

async function getCharacters() {
  try {
    const response = await axios.post('https://rickandmortyapi.com/graphql', {
      query: `
        {
          characters {
            results {
              id
              name
              species
              image
            }
          }
        }
      `,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const characters = response.data;
    return characters
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}

module.exports = {
  getCharacters
}