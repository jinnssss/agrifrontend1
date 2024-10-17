import React, { useEffect, useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { getDataExchanges, requestDataExchange } from "../api/api";

const DataExchangePage = () => {
  const [dataExchanges, setDataExchanges] = useState([]);

  useEffect(() => {
    const fetchDataExchanges = async () => {
      try {
        const response = await getDataExchanges();
        setDataExchanges(response.data || []);
      } catch (error) {
        console.error("Error fetching data exchanges:", error);
      }
    };

    fetchDataExchanges();
  }, []);

  const handleRequestDataExchange = async () => {
    try {
      await requestDataExchange();
      const response = await getDataExchanges();
      setDataExchanges(response.data || []);
    } catch (error) {
      console.error("Error requesting data exchange:", error);
      alert("Failed to request data exchange!");
    }
  };

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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Data Exchange</h2>
          <button
            onClick={handleRequestDataExchange}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            + Request Data Exchange
          </button>
        </div>

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
              {dataExchanges.length > 0 ? (
                dataExchanges.map((exchange, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{exchange.name}</td>
                    <td className="py-2 px-4 border-b">
                      {renderStatus(exchange.status)}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {new Date(exchange.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {renderProgressBar(exchange.progress)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 px-4 border-b text-center">
                    No data exchanges found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between">
          <p>
            Showing data 1 to {dataExchanges.length} of {dataExchanges.length}{" "}
            entries
          </p>
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
