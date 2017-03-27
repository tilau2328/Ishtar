# Ishtar

## Servers
![Project Architecture](https://github.com/tilau2328/Ishtar/blob/master/docs/images/Architecture.png)

### Authentication
Hapi server to handle authentication operations, such as signIn and signUp. 

### Data
Hapi-GraphQL server to handle data access.

### Files
Hapi server to handle file management and access.

### Database
![Database Schema](https://github.com/tilau2328/Ishtar/blob/master/docs/images/Database.png)

 - User
 - File
 - Vote

## Protocols

### JWT authentication
User has to signIn or signUp to get an access token before accessing any other
system's server.

![UploadFileProtocol](https://github.com/tilau2328/Ishtar/blob/master/docs/images/JWT%20Authentication.png)
 - 1 - signIn(username, password) or  signUp(username, email, password)
 - 2 - userToken
 - 3 - authenticated request with userToken in header


### Secure Upload
User sends creation mutation, data server creates file instance in the database,
hashes user and file ids with jwt and returns the uploadToken to the user.

![UploadFileProtocol](https://github.com/tilau2328/Ishtar/blob/master/docs/images/UploadFile.png)
 - 1 - createFile(name, publicPath, userToken)
 - 2 - createFile(name, publicPath)
 - 3 - returns uploadToken with file id and user id hashed into a jwt
 - 4 - uploadFile(file, uploadToken, userToken)
 - 5 - updateFile(id, privatePath)
