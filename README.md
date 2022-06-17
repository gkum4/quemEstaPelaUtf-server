# Quem Está Pela UTF - Server

## Rotas da aplicação

### POST `/auth/signup`
Create account.

Request Body
```JSON
{
  "email": "STRING",
  "username": "STRING",
  "password": "STRING",
}
```

Response Body
```JSON
{
  "id": "STRING",
  "email": "STRING",
  "username": "STRING",
}
```

### POST `/auth/login`
Log in account.

Request Body
```JSON
{
  "email": "STRING", // Optional if username provided
  "username": "STRING", // Optional if email provided
  "password": "STRING",
}
```

Response Body
```JSON
{
  "token": "STRING"
}
```

### POST `/auth/recovery`
Recover password.

Request Body
```JSON
{
  "email": "STRING",
}
```

### GET `/user/close-users`
Get user connections with subjects in actual day of the week.

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```

Response Body
```JSON
{
  "users": [
    {
      "id": "STRING",
      "username": "STRING",
      "7": { // depends on the day (could be between 2 and 7)
        "subjects": [
          {
            "name": "STRING",
            "code": "STRING",
            "class": "STRING",
            "locationCode": "STRING",
            "timeStartCode": "STRING",
            "timeEndCode": "STRING",
          },
          // ...
        ],
      },
    },
    //...
  ]
}
```

### GET `user/connection/:ID`
Get user connection data (all subjects).

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```

Response Body
```JSON
{
  "id": "STRING",
  "username": "STRING",
  "2": {
    "subjects": [
      {
        "name": "STRING",
        "code": "STRING",
        "class": "STRING",
        "locationCode": "STRING",
        "timeStartCode": "STRING",
        "timeEndCode": "STRING",
      },
      // ...
    ],
  },
  // ...
  "7": {
    "subjects": [
      {
        "name": "STRING",
        "code": "STRING",
        "class": "STRING",
        "locationCode": "STRING",
        "timeStartCode": "STRING",
        "timeEndCode": "STRING",
      },
      // ...
    ],
  },
},
```

### POST `user/connection`
Add new connection to user.

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```

Request Body
```JSON
{
  "id": "STRING",
}
```

Response Body
```JSON
{
  "id": "STRING",
  "username": "STRING",
},
```

### DELETE `user/connection/:ID`
Delete user connection.

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```

### GET `/user/timetable`
Get user timetable data.

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```

Response Body
```JSON
{
  "2": {
    "subjects": [
      {
        "name": "STRING",
        "code": "STRING",
        "class": "STRING",
        "locationCode": "STRING",
        "timeStartCode": "STRING",
        "timeEndCode": "STRING",
      },
      // ...
    ],
  },
  // ...
  "7": {
    "subjects": [
      {
        "name": "STRING",
        "code": "STRING",
        "class": "STRING",
        "locationCode": "STRING",
        "timeStartCode": "STRING",
        "timeEndCode": "STRING",
      },
      // ...
    ],
  },
}
```

### PUT `/user/timetable/:DAY_NUMBER`
Edit user subjects from day of the week.

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```

Request Body
```JSON
{
  "subjects": [
    {
      "name": "STRING",
      "code": "STRING",
      "class": "STRING",
      "locationCode": "STRING",
      "timeStartCode": "STRING",
      "timeEndCode": "STRING",
    },
    // ...
  ],
}
```

Response Body
```JSON
{
  "subjects": [
    {
      "name": "STRING",
      "code": "STRING",
      "class": "STRING",
      "locationCode": "STRING",
      "timeStartCode": "STRING",
      "timeEndCode": "STRING",
    },
    // ...
  ],
}
```

### POST `/admin/login`
Log in admin account.

Request Body
```JSON
{
  "email": "STRING", // Optional if username provided
  "username": "STRING", // Optional if email provided
  "password": "STRING",
}
```

Response Body
```JSON
{
  "token": "STRING"
}
```

### GET `/admin/users`
Get all platform users.

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```

Response Body
```JSON
{
  "users": [
    {
      "id": "STRING",
      "username": "STRING",
      "created_at": "STRING", // DATE,
      "updated_at": "STRING", // DATE,
    },
    //...
  ]
}
```

### DELETE `/admin/users/ID`
Delete user.

Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```