import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import './Dashboard.css';

/**
 * Dashboard Page
 * Main page displaying tasks with filter options and task management functionality
 */
const Dashboard = () => {
  const API_BASE_URL = 'http://localhost:8000/api/tasks';

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all tasks from backend on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter and search tasks whenever tasks, filter, or search changes
  useEffect(() => {
    filterAndSearchTasks();
  }, [tasks, activeFilter, searchQuery]);

  /**
   * Fetch tasks from the backend API
   */
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Filter tasks based on active filter and search query
   */
  const filterAndSearchTasks = () => {
    let filtered = [...tasks];

    // Apply filter
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    switch (activeFilter) {
      case 'today':
        filtered = filtered.filter((task) => {
          const taskDate = new Date(task.dueDate);
          taskDate.setHours(0, 0, 0, 0);
          return taskDate.getTime() === today.getTime() && !task.isCompleted;
        });
        break;

      case 'upcoming':
        filtered = filtered.filter((task) => {
          const taskDate = new Date(task.dueDate);
          return taskDate >= tomorrow && !task.isCompleted;
        });
        break;

      case 'completed':
        filtered = filtered.filter((task) => task.isCompleted);
        break;

      case 'all':
      default:
        // No additional filtering, show all
        break;
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          task.description?.toLowerCase().includes(query)
      );
    }

    setFilteredTasks(filtered);
  };

  /**
   * Create or update a task
   */
  const handleTaskSubmit = async (formData) => {
    try {
      const url = formData.id
        ? `${API_BASE_URL}/${formData.id}`
        : API_BASE_URL;
      const method = formData.id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
          priority: formData.priority,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save task');
      }

      // Refresh tasks list
      await fetchTasks();
      setShowTaskForm(false);
      setEditingTask(null);
    } catch (err) {
      setError(err.message);
      console.error('Error saving task:', err);
    }
  };

  /**
   * Delete a task
   */
  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      // Refresh tasks list
      await fetchTasks();
    } catch (err) {
      setError(err.message);
      console.error('Error deleting task:', err);
    }
  };

  /**
   * Toggle task completion status
   */
  const handleToggleComplete = async (taskId, isCompleted) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isCompleted }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      // Refresh tasks list
      await fetchTasks();
    } catch (err) {
      setError(err.message);
      console.error('Error updating task:', err);
    }
  };

  /**
   * Open task form for editing
   */
  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  /**
   * Close task form
   */
  const handleCloseTaskForm = () => {
    setShowTaskForm(false);
    setEditingTask(null);
  };

  /**
   * Handle search input
   */
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  /**
   * Handle filter change
   */
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="dashboard">
      <Header onAddTaskClick={() => setShowTaskForm(true)} onSearch={handleSearch} />

      <div className="dashboard-container">
        <Sidebar activeFilter={activeFilter} onFilterChange={handleFilterChange} />

        <main className="main-content">
          {error && <div className="error-banner">{error}</div>}

          {loading ? (
            <div className="loading-message">Loading tasks...</div>
          ) : filteredTasks.length === 0 ? (
            <div className="empty-state">
              <p>📭 No tasks found</p>
              <p>Create your first task to get started!</p>
            </div>
          ) : (
            <div className="tasks-grid">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                  onToggleComplete={handleToggleComplete}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {showTaskForm && (
        <TaskForm
          task={editingTask}
          onSubmit={handleTaskSubmit}
          onClose={handleCloseTaskForm}
        />
      )}
    </div>
  );
};

export default Dashboard;
