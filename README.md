# Rick_and_Morty-Challenge-GraphQL-Node-Next-Backend
### init: npm install
### start: npm start
# GraphQL: query
```javascript
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
}
```
