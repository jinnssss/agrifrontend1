import React, { useEffect, useState } from "react";
import { FaFileDownload, FaClipboardList } from "react-icons/fa";
import { getReportsData, getRecentActions, exportReports } from "../api/api";

const ReportsPage = () => {
  const [reportData, setReportData] = useState({
    totalCredentials: 0,
    totalProducts: 0,
    dataExchanges: 0,
    totalUsers: 0,
    totalProductPassports: 0,
  });

  const [recentActions, setRecentActions] = useState([]);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await getReportsData();
        setReportData(response.data);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchReportData();
  }, []);

  useEffect(() => {
    const fetchRecentActions = async () => {
      try {
        const response = await getRecentActions();
        setRecentActions(response.data);
      } catch (error) {
        console.error("Error fetching recent actions:", error);
      }
    };

    fetchRecentActions();
  }, []);

  const handleExport = async () => {
    try {
      await exportReports();
      alert("Reports exported successfully!");
    } catch (error) {
      console.error("Error exporting reports:", error);
      alert("Failed to export reports.");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">{reportData.totalCredentials}</h3>
          <p>Total Credentials</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">{reportData.totalProducts}</h3>
          <p>Total Products</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">{reportData.dataExchanges}</h3>
          <p>Data Exchanges</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">{reportData.totalUsers}</h3>
          <p>Total Users</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">
            {reportData.totalProductPassports}
          </h3>
          <p>Total Product Passports</p>
          <a href="#" className="text-blue-500">
            View Report
          </a>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <button className="bg-gray-200 px-4 py-2 mr-4 rounded-md flex items-center">
          <FaClipboardList className="mr-2" /> View Audit Logs
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
          onClick={handleExport}
        >
          <FaFileDownload className="mr-2" /> Export
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Recent Actions</h3>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Action Name</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Time</th>
              <th className="py-2 px-4 border">User</th>
            </tr>
          </thead>
          <tbody>
            {recentActions.map((action) => (
              <tr key={action._id}>
                <td className="py-2 px-4 border">{action.actionName}</td>
                <td className="py-2 px-4 border">{action.status}</td>
                <td className="py-2 px-4 border">
                  {new Date(action.time).toLocaleString()}
                </td>
                <td className="py-2 px-4 border">{action.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">
            Products Mapping by Country
          </h3>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <p>Map Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Visitor Insights</h3>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <p>Graph Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
