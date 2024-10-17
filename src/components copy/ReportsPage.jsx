import React from "react";
import { FaFileDownload, FaClipboardList } from "react-icons/fa";

const ReportsPage = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* General Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">1k</h3>
          <p>Total Credentials</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">300</h3>
          <p>Total Products</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">5</h3>
          <p>Data Exchanges</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">8</h3>
          <p>Total Users</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">25</h3>
          <p>Total Product Passports</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mb-6">
        <button className="bg-gray-200 px-4 py-2 mr-4 rounded-md flex items-center">
          <FaClipboardList className="mr-2" /> View Audit Logs
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <FaFileDownload className="mr-2" /> Export
        </button>
      </div>

      {/* Products Mapping by Country and Visitor Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">
            Products Mapping by Country
          </h3>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for the map */}
            <p>Map Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Visitor Insights</h3>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for the graph */}
            <p>Graph Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
