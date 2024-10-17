import React, { useEffect, useState } from "react";
import { getProducts, getRecentActions } from "../api/api"; // Import API functions
import { useUser } from "../context/UserContext";

const DashboardContent = () => {
  const user = useUser();

  const [pendingVerifications, setPendingVerifications] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [verifiedCredentials, setVerifiedCredentials] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);
  const [recentActions, setRecentActions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming you have corresponding API functions in your api.js file
        const productsResponse = await getProducts();
        const actionsResponse = await getRecentActions();

        setTotalProducts(productsResponse.data.length || 0); // Total products count
        setRecentActions(actionsResponse.data || []); // Recent actions data
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData(); // Fetch data when component mounts
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-pink-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">{pendingVerifications}</h3>
          <p className="text-sm">Pending Verifications</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">{totalProducts}</h3>
          <p className="text-sm">Total Products</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">{verifiedCredentials}</h3>
          <p className="text-sm">Verified Credentials</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">{newCustomers}</h3>
          <p className="text-sm">New Customers</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="font-bold mb-4">Data Exchanges</h3>
          <div className="h-32 bg-gray-100 rounded-lg"></div>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="font-bold mb-4">Top Products</h3>
          <ul>
            <li className="flex justify-between py-2">
              <span>Apple</span>
              <div className="w-1/2 bg-gray-200 h-3 rounded-lg">
                <div className="bg-blue-500 h-full w-3/4 rounded-lg"></div>
              </div>
            </li>
            <li className="flex justify-between py-2">
              <span>Potato</span>
              <div className="w-1/2 bg-gray-200 h-3 rounded-lg">
                <div className="bg-green-500 h-full w-1/2 rounded-lg"></div>
              </div>
            </li>
            <li className="flex justify-between py-2">
              <span>Mango</span>
              <div className="w-1/2 bg-gray-200 h-3 rounded-lg">
                <div className="bg-purple-500 h-full w-2/3 rounded-lg"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="font-bold mb-4">Recent Actions</h3>
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
            {recentActions.map((action, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{action.name}</td>
                <td
                  className={`py-2 px-4 border text-${
                    action.status === "Approved"
                      ? "green"
                      : action.status === "Denied"
                      ? "red"
                      : "yellow"
                  }-500`}
                >
                  {action.status}
                </td>
                <td className="py-2 px-4 border">
                  {new Date(action.time).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border">{action.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
