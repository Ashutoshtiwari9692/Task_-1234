import React from 'react';
import './TaskCard.css';

/**
 * TaskCard Component
 * Displays individual task information with priority badge and action buttons
 */
const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  // Format due date to readable format
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Determine priority badge color
  const getPriorityClass = (priority) => {
    return `priority-badge priority-${priority.toLowerCase()}`;
  };

  // Check if task is overdue
  const isOverdue =
    !task.isCompleted && new Date(task.dueDate) < new Date();

  return (
    <div className={`task-card ${task.isCompleted ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <div className="task-header">
        <div className="task-checkbox-wrapper">
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onToggleComplete(task._id, !task.isCompleted)}
            className="task-checkbox"
          />
        </div>
        <div className="task-title-section">
          <h3 className="task-title">{task.title}</h3>
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
        </div>
      </div>

      <div className="task-footer">
        <div className="task-meta">
          <span className={getPriorityClass(task.priority)}>
            {task.priority}
          </span>
          <span className="task-date">
            📅 {formatDate(task.dueDate)}
          </span>
        </div>
        <div className="task-actions">
          <button
            className="action-btn edit-btn"
            onClick={() => onEdit(task)}
            title="Edit task"
          >
            ✏️
          </button>
          <button
            className="action-btn delete-btn"
            onClick={() => onDelete(task._id)}
            title="Delete task"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
