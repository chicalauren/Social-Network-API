# Social Network API

This project is a backend API for a social network application, built with Node.js, Express, and MongoDB. The API allows users to interact with thoughts, react to them, and manage users.

## Features

- **User Management**: Create and manage users.
- **Thoughts**: Create, view, and manage thoughts.
- **Reactions**: Users can react to thoughts by posting a reaction to them.

## Walkthrough Video

[Click here](https://app.screencastify.com/v3/watch/67IBWnVITnFb75bq5UUo)

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: MongoDB object modeling for Node.js.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/chicalauren/Social-Network-API.git
cd social-network-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your MongoDB URI:

```plaintext
MONGODB_URI=your-mongo-db-uri
```

### 4. Start the Server

```bash
npm start
```

The server will run on `http://localhost:5000`.

## API Endpoints

### 1. **Create User**

- **Route**: `POST /api/users`
- **Request Body**:
  ```json
  {
    "username": "john_doe",
    "email": "john.doe@example.com"
  }
  ```
- **Response**: Created user data.

### 2. **Create Thought**

- **Route**: `POST /api/thought`
- **Request Body**:
  ```json
  {
    "thoughtText": "This is a new thought!"
  }
  ```
- **Response**: Created thought data.

### 3. **Get All Thoughts**

- **Route**: `GET /api/thought`
- **Response**: List of all thoughts.

### 4. **Add Reaction to a Thought**

- **Route**: `POST /api/users/:userId/thought/:thoughtId/reaction`
- **Request Body**:
  ```json
  {
    "reaction": "This is a great thought!"
  }
  ```
- **Response**: Updated thought with the added reaction.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
