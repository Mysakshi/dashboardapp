// data/mockData.ts
export const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1
      },
      {
        label: 'Sales 2024',
        data: [70, 65, 85, 90, 60, 58],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1
      }
    ]
  };
  
  export const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue 2023',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'Revenue 2024',
        data: [15, 22, 8, 7],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }
    ]
  };
  
  // Added fields to dataTableData
  export const dataTableData = [
    { name: 'sam doe', email: 'sam@example.com', age: 28, city: 'India' },
    { name: 'Jane Smith', email: 'jane@example.com', age: 34, city: 'New York' },
    { name: 'Alice Johnson', email: 'alice@example.com', age: 29, city: 'Chicago' },
    { name: 'Bob Brown', email: 'bob@example.com', age: 42, city: 'Houston' },
  ];
  