# Source Files
Parallel execution of servers and client webpack dev server with
[AsyncJS](http://caolan.github.io/async/)

## Authentication
Hapi server composed by:
 - Plugins
 - Routes
 - Handlers
 - Controllers
 - Connectors

## Database
Hapi server composed by:
 - Plugins
 - Routes
 - Handlers
 - Controllers
 - Models

## Data
Hapi GraphQL server composed by:
 - Plugins
 - GraphQL
 - Controllers
 - Connectors

## Files
Hapi server composed by:
 - Plugins
 - Routes
 - Handlers
 - Controllers
 - Connectors

## Browser Client
React Redux application with GraphQL client, jwt authentication,
served from webpack dev server and composed by:
  - App
  - Routes
  - Pages
  - Actions
  - Reducers
  - Middlewares
  - GraphQL

```javascript
  async.parallel([
     (callback) => { require('./auth').run(); }
  ], function(err, results) {
     // log error
  });
```
