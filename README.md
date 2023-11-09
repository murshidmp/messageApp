# MESSAGE_APP

A simple web application that allows users to post and view messages.

## Features

- Submit a message via a form.
- View all submitted messages in a list.

## Technologies Used

- MongoDB
- Express
- React
- Node.js

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com
   ```
2. Navigate to the project root and run `npm install` to install dependencies.
    ```bash
   cd MESSAGE_APP
    npm install
    ```

### Configuration

1. Set up your MongoDB database and update the connection string in `server.js`.

### Running the Application

1. Run the backend server: `npm start` (in the root directory).
2. Run the frontend: 
```bash`cd client && npm start`.```
The application will be accessible at `http://localhost:3000`.

## API Endpoints

- `GET /messages`: Retrieve all messages.
- `POST /messages`: Insert a new message.

## Error Handling

- Proper status codes and messages for API errors.
