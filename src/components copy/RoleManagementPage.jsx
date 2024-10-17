import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const RoleManagementPage = () => {
  // Dummy role data
  const roles = [
    { id: 20462, name: "Regular", users: 10, date: "13/05/2022" },
    { id: 18933, name: "Admin", users: 40, date: "22/05/2022" },
    { id: 45169, name: "Regulator", users: 50, date: "15/06/2022" },
    { id: 34304, name: "Consumer", users: 111, date: "06/09/2022" },
    { id: 17188, name: "Producer", users: 22, date: "25/09/2022" },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Role Management</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Add Role
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Number of Users</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td className="py-2 px-4 border-b">#{role.id}</td>
                  <td className="py-2 px-4 border-b">{role.name}</td>
                  <td className="py-2 px-4 border-b">{role.users}</td>
                  <td className="py-2 px-4 border-b">{role.date}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-500 mr-2">
                      <BiEditAlt />
                    </button>
                    <button className="text-red-500">
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between">
          <p>Showing data 1 to 5 of 5 entries</p>
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

export default RoleManagementPage;
