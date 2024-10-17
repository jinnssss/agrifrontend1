import React from "react";

const DashboardContent = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Statistics Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-pink-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">567</h3>
          <p className="text-sm">Pending Verifications</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">300</h3>
          <p className="text-sm">Total Products</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">5</h3>
          <p className="text-sm">Verified Credentials</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">8</h3>
          <p className="text-sm">New Customers</p>
        </div>
      </div>

      {/* Data Exchanges and Top Products */}
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

      {/* Recent Actions */}
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
            <tr>
              <td className="py-2 px-4 border">Delete User</td>
              <td className="py-2 px-4 border text-green-500">Approved</td>
              <td className="py-2 px-4 border">24.Jan.2021</td>
              <td className="py-2 px-4 border">Palmer</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Verify Product Passport</td>
              <td className="py-2 px-4 border text-red-500">Denied</td>
              <td className="py-2 px-4 border">30.Dec.2021</td>
              <td className="py-2 px-4 border">Joan</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Add Product</td>
              <td className="py-2 px-4 border text-yellow-500">Error</td>
              <td className="py-2 px-4 border">20.May.2021</td>
              <td className="py-2 px-4 border">Stephan</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">User Login</td>
              <td className="py-2 px-4 border text-green-500">Approved</td>
              <td className="py-2 px-4 border">12.Jul.2021</td>
              <td className="py-2 px-4 border">Skipper</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
