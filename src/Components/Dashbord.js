import React, { useState, useEffect } from "react";
import LineGraph from "./LineGraph"; // Placeholder for a line graph
import PieChart from "./PieChart"; // Placeholder for a pie chart

function Dashboard() {
  const [consumptionData, setConsumptionData] = useState(null); // For dynamic data

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchConsumptionData = async () => {
      try {
        const response = await fetch('https://4388-34-82-43-143.ngrok-free.app/get_latest_data', {
          headers: {
            'ngrok-skip-browser-warning': '69420'  // Skips ngrok's warning page
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Received non-JSON response');
        }
        const data = await response.json();
        setConsumptionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchConsumptionData();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="flex-1 bg-gray-50 p-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-purple-700 mb-6">Consumption Trends →</h2>

      {/* Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Alert Box */}
        <div className="col-span-3 md:col-span-1 bg-red-100 border-l-4 border-red-600 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-red-600 font-bold">Alert !!!</h3>
            <button className="text-red-600 font-bold">✕</button>
          </div>
          <p className="text-sm mt-2">
            Your energy consumption between <strong>6-10PM</strong> has increased by <strong>15%</strong> this week. Review appliance usage.
          </p>
        </div>

        {/* Pie Chart */}
        <div className="col-span-3 md:col-span-1 bg-white rounded-lg shadow p-2">
          <h3 className="text-lg font-semibold mb-4">Device Consumption</h3>
          <PieChart data={consumptionData} /> {/* Pass dynamic data */}
        </div>

        {/* Line Graph */}
        <div className="col-span-3 md:col-span-2 bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Consumption Over Last</h3>
            <select className="border rounded-lg p-1">
              <option>6 hr</option>
              <option>12 hr</option>
              <option>24 hr</option>
            </select>
          </div>
          <LineGraph data={consumptionData} /> {/* Pass dynamic data */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
