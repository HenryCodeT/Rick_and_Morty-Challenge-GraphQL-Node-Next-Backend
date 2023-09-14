# Rick and Morty Challenge Backend
### init: npm install
### start: npm start
### server: http://localhost:8080
### GraphQL: query
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
### Endpoints
- (get all characters) GET: http://localhost:8080/api/rick-morty-characters
- (get human characters) GET: http://localhost:8080/api/rick-morty-characters/humans
