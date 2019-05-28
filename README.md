# NodeJS_miniproject
Mini Project - 1 (Advanced Web Development

“STACK” is a backend API which is aim to develop for manage users in a school website. In this
mini project session you are going to develop some of the key features in the API.
Note :
You must use following node-js packages for the project.
● Express : https://yarnpkg.com/en/package/express
● nodemon : https://yarnpkg.com/en/package/nodemon
● loadash : https://yarnpkg.com/en/package/lodash
● async : https://yarnpkg.com/en/package/async
● jwt : https://yarnpkg.com/en/package/jwt
● bluebird : https://yarnpkg.com/en/package/bluebird
● bcrypt : https://yarnpkg.com/en/package/bcrypt
● Mongodb / mysql : https://yarnpkg.com/en/package/mongodb /
https://yarnpkg.com/en/package/mysql
Basic Features :
1. The user management API has methods for handling typical user actions such as
signup, login and logout.
✓ In the signup process you have to assign a temporary avatar for a user.
✓ signup, login and logout must be a POST request.
✓ Generate userID for each user automatically. You can use shortid package
for this task.(https://www.npmjs.com/package/shortid)
✓ Sample signup request should be take following form.
API Request : /user/new
{
"id": "example-id",
"username": "example-username",
"password": "example-password-clear",
"field1" "additional-field-passed-in",
"fieldN" "additional-field-passed-in",
}
2. Change user properties, reset the password, enable or disable users (Optional)
✓ Ask for more details
3. Show user details.
✓ A GET to /user/:id fetches the user object.
4. Publishing a post.
✓ A POST request (/post/new/:userID/:postID)
✓ Must check for authentication.
{
"title": "example-title",
"content": "content-of-the-post",
"field1" "additional-field-passed-in",
"fieldN" "additional-field-passed-in",
}
5. Authenticate user (Use jwt package)
✓ A post request to authenticate user.
✓ You have to validate the user with jwt.
6. Username Existence Check
✓ Quickly check whether a specific username already exists within the
database.
Database Design
user :
userID , title, username, password, firstName, lastName, avatarURL, enableFlag, userLevel,
createedTime, updatedTime
post :
postID, title, content, categoryID, remarks, publish, createedTime, updatedTime
