import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const DataExchangePage = () => {
  // Dummy data exchange information
  const dataExchanges = [
    {
      name: "Marketplace",
      status: "Approved",
      date: "24.Jan.2021",
      progress: 80,
    },
    {
      name: "Venus Dashboard Builder",
      status: "Declined",
      date: "30.Dec.2021",
      progress: 40,
    },
    {
      name: "Venus Design System",
      status: "Error",
      date: "20.May.2021",
      progress: 90,
    },
    { name: "Uranus", status: "Approved", date: "12.Jul.2021", progress: 60 },
  ];

  const renderStatus = (status) => {
    switch (status) {
      case "Approved":
        return <span className="text-green-600">Approved</span>;
      case "Declined":
        return <span className="text-red-600">Declined</span>;
      case "Error":
        return <span className="text-yellow-600">Error</span>;
      default:
        return <span className="text-gray-600">Pending</span>;
    }
  };

  const renderProgressBar = (progress) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Data Exchange</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Request Data Exchange
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Data Name</th>
                <th className="py-2 px-4 border-b">Exchange Status</th>
                <th className="py-2 px-4 border-b">Start Date</th>
                <th className="py-2 px-4 border-b">Progress</th>
              </tr>
            </thead>
            <tbody>
              {dataExchanges.map((exchange, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{exchange.name}</td>
                  <td className="py-2 px-4 border-b">
                    {renderStatus(exchange.status)}
                  </td>
                  <td className="py-2 px-4 border-b">{exchange.date}</td>
                  <td className="py-2 px-4 border-b">
                    {renderProgressBar(exchange.progress)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between">
          <p>Showing data 1 to 4 of 4 entries</p>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
              1
            </button>
            <button className="px-3 py-1">2</button>
            <button className="px-3 py-1">3</button>
            <button className="px-3 py-1">...</button>
            <button className="px-3 py-1">5</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataExchangePage;
