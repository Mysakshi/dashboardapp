// app/dashboard/page.tsx
"use client";
import React from 'react';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import DataTable from '../components/DataTable';
import '../styles/dashboard.css';  // Import the updated CSS file

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="widgets">
        <div className="widget">
          <h2>Line Chart</h2>
          <div className="chart-container">
            <LineChart />
          </div>
        </div>
        <div className="widget">
          <h2>Bar Chart</h2>
          <div className="chart-container">
            <BarChart />
          </div>
        </div>
        <div className="widget">
          <h2>Data Table</h2>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
