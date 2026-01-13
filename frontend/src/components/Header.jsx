import React from 'react';
import './Header.css';

/**
 * Header Component
 * Displays the app title, search bar, and Add Task button
 */
const Header = ({ onAddTaskClick, onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">
          <h1>📋 TaskFlow</h1>
        </div>

        <div className="header-middle">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search tasks..."
              className="search-input"
              onChange={handleSearchChange}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="header-right">
          <button className="add-task-btn" onClick={onAddTaskClick}>
            + Add Task
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
