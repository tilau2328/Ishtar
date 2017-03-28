# Database Models

## User
Mongoose Schema for user model, with following parameters:
 - Username : String, unique, required
 - Password : String, required
 - Email : String, unique, required

## File
Mongoose Schema for filr model, with following parameters:
 - Author : ObjectId, ref: User, required
 - Name : String, required
 - PublicPath : String, unique, required
 - PrivatePath : String, unique
 - Votes : [ObjectId, ref: User]
 - CreatedAt : Timestamp, default: now
 - UpdatedAt : Timestamp

## Vote
Mongoose Schema for vote model, with following parameters:
 - Author : ObjectId, ref: User, required
 - Value : String, required 
