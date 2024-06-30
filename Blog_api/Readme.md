#HTTP GET REQUEST
**Method:** GET

**URL:** `http://localhost:5000/api/user`

### This shows lists of users 

**This endpoint makes an HTTP GET request to retrieve user details from the server.
#RESPONSE
**Status:** 200 OK

**Content-Type:** `application/json`

```
{
    "users":[
        {
            "blogs": [],
            "id": "",
            "name": "",
            "email": "",
            "password": "",
            "__v": 0
        }
    ]
}
```

#the JSON response contains an array (`users`) of user objects. Each user object includes the following fields:

-`blogs`: An array representing associated or created by the user
-`_id`: This is the unique identifier of the user generated from mongodb database
-`name`: The name of user
-`email`: The email address of the user 
-`password`: the password of the user
-`__v`: version identifier from MongoDB

### the password was hashed using bcyrpt

##
