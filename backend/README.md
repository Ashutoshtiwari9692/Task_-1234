# Backend README

## Task Management Backend API

A RESTful API built with Node.js, Express, and MongoDB for managing tasks.

## Quick Start

### Installation

```bash
npm install
```

### Configuration

1. Copy `.env.example` to `.env`
2. Update the following variables:

```
MONGODB_URI=mongodb://localhost:27017/task-management
PORT=5000
NODE_ENV=development
```

### Running the Server

```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

Server runs on `http://localhost:5000`

## Folder Structure

- `models/` - Mongoose schemas and models
- `controllers/` - Business logic for handling requests
- `routes/` - API route definitions
- `server.js` - Main application file

## API Endpoints

See the main README for complete API documentation.

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

## Validation

Tasks are validated on the server:

- Title is required (max 100 characters)
- Due date is required
- Priority must be Low, Medium, or High
- Description is optional (max 500 characters)

## Database

MongoDB schema includes:

- `title` (String, required)
- `description` (String, optional)
- `dueDate` (Date, required)
- `priority` (String, enum, default: Medium)
- `isCompleted` (Boolean, default: false)
- `createdAt` & `updatedAt` (Auto-generated timestamps)
