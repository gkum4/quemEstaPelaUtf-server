# Quem Está Pela UTF - Server

## Rotas da aplicação

### POST `/signup`
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

### POST `/login`
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

### POST `/recovery`
Request Body
```JSON
{
  "email": "STRING",
}
```

### GET `/close-users`
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

### GET `user/ID`
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

### GET `/timetable`
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
}
```

### PUT `/timetable/DAY_NUMBER`
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
Request Headers
```JSON
{
  "authorization": "STRING", // token
}
```