# Authentication Routes
Routes for authentication

## SignIn
Route object with route '/signin', 'POST' method and signIn handler.

## SignUp
Route object with route '/signup', 'POST' method and signUp handler.

 example:

 Route file
 ```javascript
  module.exports = { method: 'POST', path: '/path', handler: handler };
 ```

 Routes file
 ```javascript
  var routes = [];
  routes.puth(require('./route'));
  module.exports = routes;
 ```
