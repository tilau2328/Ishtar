# Ishtar

## Servers
![Project Architecture](https://github.com/tilau2328/Ishta/docs/images/Architecture.png)

### Authentication
Hapi server to handle authentication operations, such as signIn and signUp.

### Data
Hapi-GraphQL server to handle data access.

### Files
Hapi server to handle file management and access.

### Database
![Database Schema](https://github.com/tilau2328/Ishta/docs/images/Database.png)

## Protocols

### JWT authentication
User has to signIn or signUp to get an access token before accessing any other
system's server.

### Secure Upload
![UploadFileProtocol](https://github.com/tilau2328/Ishta/docs/images/UploadFile.png)
 - 1 - createFile(name, publicPath, userToken)
 - 2 - createFile(name, publicPath)
 - 3 - returns uploadToken with file id and user id hashed into a jwt
 - 4 - uploadFile(file, uploadToken, userToken)
 - 5 - updateFile(id, privatePath)
