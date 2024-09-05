"use client"
import React, { ReactNode } from 'react';
import './globals.css';  // Import global styles

interface LayoutProps {
  children: ReactNode;  // Define the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/settings">Settings</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
