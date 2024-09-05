// settings/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import "../styles/settings.css"; // Import CSS for settings page
import { dataTableData } from "../data/mockData"; // Import your mock data

const SettingsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const [theme, setTheme] = useState<string>("light");
  const [showCharts, setShowCharts] = useState<boolean>(true);
  const [filteredData, setFilteredData] = useState(dataTableData);

  // Function to filter the data based on the filter input
  useEffect(() => {
    const filtered = dataTableData.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.email.toLowerCase().includes(filter.toLowerCase()) ||
      item.city.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filtered);
  }, [filter]);

  // Apply theme class to the container element
  useEffect(() => {
    document.body.className = theme; // Apply theme to body or a wrapper div
  }, [theme]);

  return (
    <div className={`settings-container ${theme}`}>
        <header className="settings-header">
      <h1>Settings</h1>
      </header>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="data-filter">Data Filter:</label>
          <input
            id="data-filter"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>


        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={showCharts}
              onChange={(e) => setShowCharts(e.target.checked)}
            />
            Show Charts
          </label>
        </div>

        
      </form>

      {/* Render filtered data */}
      <div className="filtered-data">
        <h2>Filtered Data</h2>
        <div className="data-cards">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div className="data-card" key={index}>
                <h3>{item.name}</h3>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>City:</strong> {item.city}</p>
                <p><strong>Age:</strong> {item.age}</p>
              </div>
            ))
          ) : (
            <p>No matching data found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
