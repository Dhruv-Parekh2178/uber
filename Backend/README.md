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

## Get User Profile
`GET /users/profile`

Retrieve the authenticated user's profile information.

### Headers
| Field         | Value              | Description                    |
|---------------|-------------------|--------------------------------|
| Authorization | Bearer {token}    | JWT authentication token       |

### Response Status Codes
| Status | Description                                           |
|--------|-------------------------------------------------------|
| 200    | Success - Returns user profile                        |
| 401    | Unauthorized - Invalid or missing token               |
| 500    | Internal Server Error                                 |

### Sample Success Response (200)
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com"
}
```

### Sample Error Response (401)
```json
{
  "message": "Unauthorized"
}
```

## Logout User
`GET /users/logout`

Log out the current user and invalidate their token.

### Headers
| Field         | Value              | Description                    |
|---------------|-------------------|--------------------------------|
| Authorization | Bearer {token}    | JWT authentication token       |

### Response Status Codes
| Status | Description                                           |
|--------|-------------------------------------------------------|
| 200    | Success - User logged out successfully                |
| 401    | Unauthorized - Invalid or missing token               |
| 500    | Internal Server Error                                 |

### Sample Success Response (200)
```json
{
  "message": "Logged out successfully"
}
```

### Sample Error Response (401)
```json
{
  "message": "Unauthorized"
}
```

# Captain API Documentation

## Register Captain
`POST /captains/register`

Register a new captain in the system.

### Request Body
```json
{
  "fullname": {
    "firstname": "John", // required, minimum 3 characters
    "lastname": "Doe"    // optional, minimum 3 characters if provided
  },
  "email": "john@example.com",    // required, must be valid email format
  "password": "password123",      // required, minimum 6 characters
  "vehicle": {
    "color": "Black",            // required, minimum 3 characters
    "plate": "ABC123",           // required, minimum 3 characters
    "capacity": 4,               // required, minimum value 1
    "vehicleType": "car"         // required, must be "car", "motorcycle", or "auto"
  }
}
```

### Required Fields
| Field                | Type   | Description                                      |
|---------------------|--------|--------------------------------------------------|
| fullname.firstname  | string | Captain's first name (min 3 chars)              |
| fullname.lastname   | string | Captain's last name (min 3 chars)               |
| email              | string | Captain's email address                         |
| password           | string | Captain's password (min 6 chars)                |
| vehicle.color      | string | Vehicle color (min 3 chars)                     |
| vehicle.plate      | string | Vehicle plate number (min 3 chars)              |
| vehicle.capacity   | number | Vehicle passenger capacity (min 1)              |
| vehicle.vehicleType| string | Type of vehicle (car/motorcycle/auto)           |

### Response Status Codes
| Status | Description                                           |
|--------|-------------------------------------------------------|
| 201    | Captain successfully registered                        |
| 400    | Bad Request - Missing or invalid fields               |
| 409    | Conflict - Captain with email already exists          |
| 500    | Internal Server Error                                 |

### Sample Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Sample Success Response (201)
```json
{
  "success": true,
  "message": "Captain registered successfully",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

### Sample Error Response (400)
```json
{
  "success": false,
  "message": "Invalid input data",
  "errors": [
    "Firstname must be at least 3 characters long",
    "Vehicle type must be car, motorcycle, or auto"
  ]
}
```

### Success Response (201)
```json
{
  "token": "jwt_token_here",     // JWT token for authentication
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"         // default status for new captains
  }
}
```

## Login Captain
`POST /captains/login`

Authenticate a captain and return a JWT token.

### Request Body
```json
{
  "email": "john@example.com",    // required, must be valid email
  "password": "password123"       // required, minimum 6 characters
}
```

### Success Response (200)
```json
{
  "token": "jwt_token_here",      // JWT token for authentication
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

## Get Captain Profile
`GET /captains/profile`

Retrieve the authenticated captain's profile information.

### Headers
| Field         | Value              | Description                    |
|---------------|-------------------|--------------------------------|
| Authorization | Bearer {token}    | JWT authentication token       |

### Success Response (200)
```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

## Logout Captain
`GET /captains/logout`

Log out the current captain and invalidate their token.

### Headers
| Field         | Value              | Description                    |
|---------------|-------------------|--------------------------------|
| Authorization | Bearer {token}    | JWT authentication token       |

### Success Response (200)
```json
{
  "message": "Logged out successfully"
}
```
