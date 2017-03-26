# Authentication Server

The authentication server has two primary function:
 - SignIn
 -- username : In
 -- password : In
 -- user_token : Out

 Validates credentials and returns a token to authenticate requests for the rest
 service.

 - SignUp
 -- username : In
 -- email : In
 -- password : In
 -- user_token : Out

Create user and return a token to authenticate requests for the rest of the
service.
