import React, { useEffect, useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { getAllUsers, deleteUser, updateUserRole } from "../api/api";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(userId);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        ); // Update UI
      } catch (error) {
        alert("Error deleting user");
      }
    }
  };

  const handleEditRole = async (userId) => {
    const newRole = prompt("Enter the new role for this user:");
    if (newRole) {
      try {
        await updateUserRole(userId, { role: newRole });
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, role: newRole } : user
          )
        );
      } catch (error) {
        alert("Error updating user role");
      }
    }
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">All Users</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Add User
          </button>
        </div>

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
                <tr key={user._id}>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                  <td className="py-2 px-4 border-b">{user.phone}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.country}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-blue-500 mr-2"
                      onClick={() => handleEditRole(user._id)}
                    >
                      <BiEditAlt />
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(user._id)}
                    >
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between">
          <p>
            Showing data 1 to {users.length} of {users.length} entries
          </p>
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
