# Database Models
[Mongoose Models](http://mongoosejs.com/docs/models.html)

## User
Mongoose Schema for user model, with following parameters:
 - Username : String, unique, required
 - Password : String, required
 - Email : String, unique, required

And following methods:
 - PreSave : Hash password with salt, using mongoose's
 [PreSave](http://mongoosejs.com/docs/middleware.html)
 method and [Bcrypt](https://www.npmjs.com/package/bcrypt-nodejs)'s
 genSalt and hash function.

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
