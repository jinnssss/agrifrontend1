import React, { useEffect, useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { getRoles, deleteRole, createRole, updateRole } from "../api/api";

const RoleManagementPage = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");
  const [editRoleId, setEditRoleId] = useState(null);
  const [editRoleName, setEditRoleName] = useState("");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles();
        console.log("Roles fetched from API:", response.data);
        setRoles(response.data.roles);
        console.log("Fetched Roles:", roles);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleDeleteRole = async (roleId) => {
    try {
      await deleteRole(roleId);
      setRoles(roles.filter((role) => role._id !== roleId));
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  const handleAddRole = async () => {
    if (!newRole) {
      alert("Role name cannot be empty!");
      return;
    }
    try {
      const response = await createRole({ role: newRole });
      setRoles([...roles, response.data]);
      setNewRole("");
    } catch (error) {
      console.error("Error adding role:", error);
      alert("Failed to add role.");
    }
  };

  const handleEditRole = async (roleId) => {
    setEditRoleId(roleId);
    const roleToEdit = roles.find((role) => role._id === roleId);
    if (roleToEdit) setEditRoleName(roleToEdit.role);
  };

  const handleUpdateRole = async () => {
    if (!editRoleName) {
      alert("Updated role name cannot be empty!");
      return;
    }
    try {
      const response = await updateRole(editRoleId, { role: editRoleName });
      setRoles(
        roles.map((role) =>
          role._id === editRoleId ? { ...role, role: response.data.role } : role
        )
      );
      setEditRoleId(null);
      setEditRoleName("");
    } catch (error) {
      console.error("Error updating role:", error);
      alert("Failed to update role.");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Role Management</h2>
          <div>
            <input
              type="text"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              placeholder="New Role Name"
              className="border p-2 mr-2 rounded-md"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleAddRole}
            >
              + Add Role
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Role Name</th>
                <th className="py-2 px-4 border-b">Number of Users</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {roles.length > 0 ? (
                roles.map((role) => (
                  <tr key={role._id}>
                    <td className="py-2 px-4 border-b">#{role._id}</td>
                    <td className="py-2 px-4 border-b">
                      {editRoleId === role._id ? (
                        <input
                          type="text"
                          value={editRoleName}
                          onChange={(e) => setEditRoleName(e.target.value)}
                          className="border p-2 rounded-md"
                        />
                      ) : (
                        role.role
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {role.users || "N/A"}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {new Date(role.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {editRoleId === role._id ? (
                        <button
                          className="text-green-500 mr-2"
                          onClick={handleUpdateRole}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="text-blue-500 mr-2"
                          onClick={() => handleEditRole(role._id)}
                        >
                          <BiEditAlt />
                        </button>
                      )}
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteRole(role._id)}
                      >
                        <BiTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 border-b text-center">
                    No roles found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoleManagementPage;
