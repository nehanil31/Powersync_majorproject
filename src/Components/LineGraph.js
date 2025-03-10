import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register required components of Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function LineGraph({ data }) {
  // If data is not available yet, show a loading message
  if (!data) {
    return (
      <div className="h-48 w-full flex justify-center items-center">
        <p className="text-gray-500">Loading Data...</p>
      </div>
    );
  }

  // Extract device labels and sum their active power values over time
  const labels = Object.keys(data[0]).filter((key) => key !== "time"); // Exclude 'time'
  const consumptionData = labels.map((label) =>
    data.reduce((sum, item) => sum + item[label], 0)
  );

  // Prepare data for Bar chart
  const chartData = {
    labels: labels.map((label) => label.replace("_active-power", "")), // Clean device names
    datasets: [
      {
        label: "Active Power Consumption (kWh)",
        data: consumptionData, // Total consumption per device
        backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33B5", "#FFC300"], // Colors for bars
        borderColor: "#000000", // Border color for bars
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw.toFixed(2)} kWh`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Devices",
        },
        barPercentage: 0.5, // Reduce bar width
        categoryPercentage: 0.5, // Reduce space per category
      },
      y: {
        title: {
          display: true,
          text: "Active Power (kWh)",
        },
        ticks: {
          callback: function (value) {
            return `${value.toFixed(2)} kWh`; // Show active power values on y-axis
          },
        },
        beginAtZero: true, // Ensure the y-axis starts at zero
      },
    },
  };

  return (
    <div className="h-96 w-full">
      <Bar data={chartData} options={options} /> {/* Render the Bar chart */}
    </div>
  );
}

export default LineGraph;
