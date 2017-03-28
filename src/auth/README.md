# Authentication Server

The authentication server has two primary function:
 SignIn
 - username : In
 - password : In
 - user_token : Out

 Validates credentials and returns a token to authenticate requests for the rest
 service.

 SignUp
 - username : In
 - email : In
 - password : In
 - user_token : Out

Create user and return a token to authenticate requests for the rest of the
service.

The server should register plugins and routes and return a run method to
start the server.

Server.js

```javascript
 const server = new require('hapi').Server();
 server.connection({ host, port });
 server.register(require('./plugins'), (err) => {
   hapi_jwt.register(server);
   server.route(require('./routes'));
 });
 module.exports = server;
```

Index.js 

```javascript
 const server = require('./server');
 module.exports = function(callback){
   server.start((err) => {
     if (err) { callback(err); }
     console.log(`Server running at: ${server.info.uri}`);
   });
 }
```
