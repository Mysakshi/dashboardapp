"use client"
import React from 'react';
import styles from './styles/HomePage.module.css';  // Import CSS module

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Dashboard</h1>
      <p className={styles.subtitle}>Use the navigation to access different sections.</p>
      <p className={styles.description}>
        Explore various features and tools available in the dashboard. You can view charts, manage settings, and more. Enjoy your journey!
      </p>
    </div>
  );
};

export default HomePage;
