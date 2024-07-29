import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// This registers the chart components we'll be using
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// This is a functional component named DataVisualization
const DataVisualization = ({ data }) => {
  // Here we're preparing the data for the chart
  // This is a simple example and might need to be adjusted based on your actual data structure
  const chartData = {
    // We're assuming the first column of the CSV will be used for labels
    labels: data.map(row => row[Object.keys(row)[0]]),
    datasets: [{
      // We're using the second column for the data values
      label: Object.keys(data[0])[1],
      data: data.map(row => row[Object.keys(row)[1]]),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  // The component returns a Bar chart component from react-chartjs-2
  return <Bar data={chartData} />;
};

export default DataVisualization;