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
   git clone https://github.com/murshidmp/messageApp.git
   ```
2. Navigate to the project root and run `npm install` to install dependencies.
    ```bash
   cd messageApp
    npm install
    ```

### Configuration

1. Create a new file named `.env` in the root of your project.
2. Add your MongoDB connection string to `.env`:

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
