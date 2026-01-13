import React from 'react';
import './Sidebar.css';

/**
 * Sidebar Component
 * Navigation menu with filter options: All Tasks, Today, Upcoming, Completed
 */
const Sidebar = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Tasks', icon: '📝' },
    { id: 'today', label: 'Today', icon: '📅' },
    { id: 'upcoming', label: 'Upcoming', icon: '⏰' },
    { id: 'completed', label: 'Completed', icon: '✅' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`sidebar-item ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
