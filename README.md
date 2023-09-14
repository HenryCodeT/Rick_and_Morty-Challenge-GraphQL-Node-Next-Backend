# Rick and Morty Challenge Backend
### init: npm install
### start: npm start

# Código de Node Express Backend

En este proyecto de Node Express Backend, se han implementado dos endpoints para proporcionar datos de personajes de la serie "Rick and Morty". Además, se ha establecido una estructura de carpetas bien organizada para mantener el código limpio y modular.

## Estructura de Carpetas

El proyecto se organiza en las siguientes carpetas:

### `controllers`

La carpeta `controllers` contiene los archivos responsables de controlar las solicitudes HTTP y las respuestas correspondientes. En este caso, se han creado controladores para manejar las dos rutas del proyecto: una que devuelve todas las especies (tanto aliens como humanos) y otra que solo devuelve humanos.

### `routes`

La carpeta `routes` almacena los archivos que definen las rutas y la asignación de controladores a esas rutas. Aquí se definen las rutas para los dos endpoints mencionados anteriormente y se especifica qué controlador debe manejar cada ruta.

### `services`

La carpeta `services` es la encargada de servir a los controladores. En esta carpeta, se han implementado servicios que interactúan con una consulta GraphQL de "Rick and Morty" para obtener los datos necesarios. Estos servicios proporcionan los datos requeridos por los controladores.

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
