# Authentication Handlers
Handlers for authentiction

## SignIn
Handler function for signIn,
expects username and password in payload,
calls signIn controller,
returns token for user, if credentials are valid.

## SignUp
Handler function for signIn,
expects username, email and password in payload,
calls signUp controller,
returns token for user, if credentials are valid.

Example

Handler file

```javascript
 module.exports = function(req, res){
   const param = req.params.param;
   const payload = req.payload;
   const response = controllers.controller(payload, param);
   res({ response });
 }
```

Handlers file

```javascript
 module.exports = {
   handler1: require('./handler1'),
   handler2: require('./handler2')
   ...
 };
```
