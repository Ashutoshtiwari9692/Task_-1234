# Task Management Frontend

This is the frontend application for the Task Management App built with React.

## Features

- ✨ Modern, clean dark theme UI
- 📱 Fully responsive design (desktop and mobile)
- 📝 Create, read, update, and delete tasks
- 🔍 Search functionality
- 🏷️ Task filters (All, Today, Upcoming, Completed)
- 📊 Priority levels (High, Medium, Low)
- ✅ Mark tasks as complete
- 📅 Due date tracking

## Folder Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   ├── TaskCard.jsx
│   │   ├── TaskCard.css
│   │   ├── TaskForm.jsx
│   │   └── TaskForm.css
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   ├── index.jsx
│   ├── index.css
│   └── App.jsx
├── package.json
└── README.md
```

## Installation

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm start
```

The application will open at `http://localhost:3000`

## Building for Production

Create an optimized production build:

```bash
npm build
```

## Technologies Used

- **React 18** - UI library
- **Plain CSS** - Styling with dark theme
- **Fetch API** - Backend communication
- **ES6+** - Modern JavaScript

## Component Overview

### Header.jsx

Displays the app title, search bar, and Add Task button.

### Sidebar.jsx

Navigation menu with filter options:

- All Tasks
- Today
- Upcoming
- Completed

### TaskCard.jsx

Displays individual task information including:

- Task title and description
- Due date
- Priority badge
- Edit and delete buttons
- Completion checkbox

### TaskForm.jsx

Modal form for creating and editing tasks with validation.

### Dashboard.jsx

Main page that manages task state and communicates with the backend API.

## API Integration

The frontend connects to the backend API at `http://localhost:5000/api/tasks`

### Endpoints:

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a specific task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Dark Theme Colors

- **Primary Background**: #0f172a
- **Secondary Background**: #1a2847
- **Tertiary Background**: #2d3e5f
- **Primary Accent**: #3b82f6 (Blue)
- **Danger Color**: #ef4444 (Red)
- **Success Color**: #4ade80 (Green)
- **Warning Color**: #facc15 (Yellow)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- No external CSS libraries or Tailwind CSS used
- All styling is custom CSS with CSS custom properties (variables)
- Responsive design using CSS media queries
- Smooth animations and transitions for better UX
