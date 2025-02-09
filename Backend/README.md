# User Registration API Documentation

## Register User
`POST /users/register`

Register a new user in the system.

### Request Body
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

### Required Fields
| Field    | Type   | Description                    |
|----------|--------|--------------------------------|
| name     | string | User's full name              |
| email    | string | User's email address          |
| password | string | User's password (min 6 chars)  |
| phone    | string | User's phone number           |

### Response Status Codes
| Status | Description                                           |
|--------|-------------------------------------------------------|
| 201    | User successfully registered                           |
| 400    | Bad Request - Missing or invalid fields               |
| 409    | Conflict - User with email already exists             |
| 500    | Internal Server Error                                 |

### Sample Request
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

### Sample Success Response (201)
```json
{
  "success": true,
  "message": "User registered successfully",
  "userId": "user_id_here"
}
```

### Sample Error Response (400)
```json
{
  "success": false,
  "message": "Invalid input data",
  "errors": [
    "Email is required",
    "Password must be at least 6 characters"
  ]
}
```

###Example Response

-`USer` (object):
  -`fullname` (object).
     -`firstname` (string , required) : User's first name (minimum 3 characters).
     -`lastname` (string , optional) : User's last name (minimum 3 characters).
  -`email` (string , required) : User's email address (must be a valid email).
  -`password` (string , required) : User's password (minimum 6 characters).```


-`token` (string) : JWT Token

## Login User
`POST /users/login`

Authenticate a user and return a JWT token.

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

### Required Fields
| Field    | Type   | Description                    |
|----------|--------|--------------------------------|
| email    | string | User's email address           |
| password | string | User's password (min 6 chars)  |

### Response Status Codes
| Status | Description                                           |
|--------|-------------------------------------------------------|
| 200    | User successfully authenticated                       |
| 400    | Bad Request - Missing or invalid fields               |
| 401    | Unauthorized - Invalid email or password              |
| 500    | Internal Server Error                                 |

### Sample Request
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Sample Success Response (200)
```json
{
  "success": true,
  "message": "User authenticated successfully",
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

### Sample Error Response (400)
```json
{
  "success": false,
  "message": "Invalid input data",
  "errors": [
    "Email is required",
    "Password must be at least 6 characters"
  ]
}
```

### Sample Error Response (401)
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```
###Example Response

-`USer` (object):
  -`fullname` (object).
     -`firstname` (string , required) : User's first name (minimum 3 characters).
     -`lastname` (string , optional) : User's last name (minimum 3 characters).
  -`email` (string , required) : User's email address (must be a valid email).
  -`password` (string , required) : User's password (minimum 6 characters).```


-`token` (string) : JWT Token
