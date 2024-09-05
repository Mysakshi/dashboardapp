"use client";
import React from 'react';
import { dataTableData } from '../data/mockData';  // Import mock data
import styles from '../styles/DataTable.module.css'; // Import CSS module

const DataTable: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {dataTableData.map((row, index) => (
            <tr key={index}>
              <td data-label="Name">{row.name}</td>
              <td data-label="Email">{row.email}</td>
              <td data-label="Age">{row.age}</td>
              <td data-label="City">{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
