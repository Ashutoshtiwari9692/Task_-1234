# TaskFlow - Task Management Application

A modern, clean task management app built with the MERN stack (MongoDB, Express, React, Node.js). Perfect for a fresher's MERN portfolio project showcasing professional development practices.

![Project Structure](./project-structure.txt)

## 🎯 Features

### Frontend (React)

- ✨ Modern, minimal dark theme UI
- 📱 Fully responsive design (desktop, tablet, mobile)
- 📝 Create, edit, delete tasks
- 🔍 Search functionality
- 🏷️ Filter tasks (All, Today, Upcoming, Completed)
- 📊 Priority levels (High, Medium, Low)
- ✅ Mark tasks as complete/incomplete
- 📅 Due date tracking
- ⚠️ Overdue task indicator

### Backend (Node + Express)

- 🔌 RESTful API for task management
- 📦 MongoDB with Mongoose schema validation
- 🔐 Error handling and validation
- 📊 Organized controller and route structure
- ⚙️ Environment variable configuration

## 📁 Project Structure

```
Task Management/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx & Header.css
│   │   │   ├── Sidebar.jsx & Sidebar.css
│   │   │   ├── TaskCard.jsx & TaskCard.css
│   │   │   └── TaskForm.jsx & TaskForm.css
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx & Dashboard.css
│   │   ├── index.jsx
│   │   ├── index.css
│   │   └── README.md
│   ├── package.json
│   └── .gitignore
│
├── backend/
│   ├── models/
│   │   └── Task.js (Mongoose schema)
│   ├── controllers/
│   │   └── taskController.js (Business logic)
│   ├── routes/
│   │   └── taskRoutes.js (API endpoints)
│   ├── server.js (Main server file)
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
└── README.md (This file)
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud)

### Backend Setup

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/task-management
PORT=5000
NODE_ENV=development
```

5. Start the backend server:

```bash
npm start
# Or for development with auto-reload:
npm run dev
```

The backend will run at `http://localhost:5000`

### Frontend Setup

1. In a new terminal, navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

The frontend will open at `http://localhost:3000`

## 📡 API Endpoints

All endpoints are prefixed with `/api/tasks`

### Create Task

```
POST /api/tasks
Body: {
  "title": "Task title",
  "description": "Task description",
  "dueDate": "2024-12-31",
  "priority": "High" | "Medium" | "Low"
}
Response: { success: true, data: { ...task } }
```

### Get All Tasks

```
GET /api/tasks
Response: {
  success: true,
  count: 5,
  data: [ { ...task }, ... ]
}
```

### Get Single Task

```
GET /api/tasks/:id
Response: { success: true, data: { ...task } }
```

### Update Task

```
PUT /api/tasks/:id
Body: {
  "title": "Updated title",
  "description": "Updated description",
  "dueDate": "2024-12-31",
  "priority": "High",
  "isCompleted": true
}
Response: { success: true, data: { ...updatedTask } }
```

### Delete Task

```
DELETE /api/tasks/:id
Response: { success: true, data: {} }
```

## 🎨 Design Highlights

### Color Scheme (Dark Theme)

```css
Primary Background: #0f172a (Dark Navy)
Secondary Background: #1a2847
Tertiary Background: #2d3e5f
Primary Accent: #3b82f6 (Blue)
Danger: #ef4444 (Red)
Success: #4ade80 (Green)
Warning: #facc15 (Yellow)
```

### Typography

- Clean, system font stack for cross-platform consistency
- Proper font sizing hierarchy for readability
- Smooth transitions and hover effects

### Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Flexible grid layout for task cards
- Touch-friendly button sizes

## 💻 Key Technologies

### Frontend

- **React 18** - UI library
- **Plain CSS** - Custom styling with CSS variables
- **Fetch API** - HTTP client for backend communication
- **ES6+** - Modern JavaScript

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## ✅ Code Quality Standards

- Clean, well-organized folder structure
- Meaningful component and function names
- Comments on complex logic
- Error handling on both frontend and backend
- Consistent code style
- Reusable components
- Separation of concerns (components, controllers, models)
- Validation on form inputs
- Beginner-friendly yet professional code

## 🔧 Development Tips

### Adding a New Feature

1. **Backend**:

   - Update the Task model if needed in `models/Task.js`
   - Add logic in `controllers/taskController.js`
   - Update routes in `routes/taskRoutes.js`

2. **Frontend**:
   - Create new components in `components/`
   - Add component styles in corresponding `.css` file
   - Update `Dashboard.jsx` to use new components
   - Add API calls in Dashboard.jsx

### Debugging

**Frontend**:

- Check browser console for errors
- Use React DevTools browser extension
- Use browser Network tab to inspect API calls

**Backend**:

- Check terminal logs
- Use Postman/Insomnia to test API endpoints
- Check MongoDB connection in `.env`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Guide](https://mongoosejs.com)

## 🛠️ Troubleshooting

### Port Already in Use

```bash
# Find and kill process using port 5000 (backend)
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### MongoDB Connection Error

- Ensure MongoDB is running locally or Atlas connection is correct
- Check MONGODB_URI in `.env` file
- Verify network access if using MongoDB Atlas

### CORS Error

- Ensure backend is running on http://localhost:5000
- Check `proxy` setting in `frontend/package.json`

### Frontend won't connect to backend

- Make sure backend server is running
- Check that frontend `API_BASE_URL` matches backend URL
- Verify no firewall blocking port 5000

## 📈 Future Enhancements

- User authentication and authorization
- Task categories/tags
- Recurring tasks
- Task reminders/notifications
- Dark/Light theme toggle
- Task collaboration and sharing
- Analytics dashboard
- Export tasks to PDF/CSV
- Task attachments

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author Notes

This is a portfolio-ready project that demonstrates:

- Full-stack development capabilities
- Clean code practices
- Responsive design implementation
- RESTful API design
- Database schema design
- Component-based architecture
- Error handling and validation
- Professional project organization

Perfect for showcasing your MERN skills to potential employers!

---

**Happy Coding! 🚀**

For questions or improvements, feel free to enhance this project and share it on GitHub!
