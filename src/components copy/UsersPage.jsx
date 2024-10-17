import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const UsersPage = () => {
  // Dummy users data
  const users = [
    {
      id: 1,
      name: "Jane Cooper",
      role: "Regular",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
    },
    {
      id: 2,
      name: "Floyd Miles",
      role: "Admin",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
    },
    {
      id: 3,
      name: "Ronald Richards",
      role: "Distributor",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
    },
    {
      id: 4,
      name: "Marvin McKinney",
      role: "Consumer",
      phone: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
    },
    {
      id: 5,
      name: "Jerome Bell",
      role: "Producer",
      phone: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
    },
    {
      id: 6,
      name: "Kathryn Murphy",
      role: "Consumer",
      phone: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
    },
    {
      id: 7,
      name: "Jacob Jones",
      role: "Admin",
      phone: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
    },
    {
      id: 8,
      name: "Kristin Watson",
      role: "Regular",
      phone: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">All Users</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Add User
          </button>
        </div>

        {/* Search and Sort */}
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded-md"
          />
          <select className="border p-2 rounded-md">
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">User Name</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Phone Number</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Country</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                  <td className="py-2 px-4 border-b">{user.phone}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.country}</td>
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
          <p>Showing data 1 to 8 of 256K entries</p>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
              1
            </button>
            <button className="px-3 py-1">2</button>
            <button className="px-3 py-1">3</button>
            <button className="px-3 py-1">...</button>
            <button className="px-3 py-1">40</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
