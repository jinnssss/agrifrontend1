import React, { useEffect, useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { getCredentials, deleteCredential } from "../api/api";

const CredentialsPage = () => {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await getCredentials();
        setCredentials(response.data || []);
      } catch (error) {
        console.error("Error fetching credentials:", error);
      }
    };

    fetchCredentials();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCredential(id);
      setCredentials(credentials.filter((cred) => cred.id !== id));
    } catch (error) {
      console.error("Error deleting credential:", error);
      alert("Failed to delete credential!");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Credentials</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Add Credential
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Credential Name</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {credentials.length > 0 ? (
                credentials.map((credential) => (
                  <tr key={credential.id}>
                    <td className="py-2 px-4 border-b">#{credential.id}</td>
                    <td className="py-2 px-4 border-b">{credential.name}</td>
                    <td className="py-2 px-4 border-b">
                      {credential.status === "Approved" ? (
                        <span className="text-green-600">Approved</span>
                      ) : (
                        <span className="text-red-600">Not Valid</span>
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {new Date(credential.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button className="text-blue-500 mr-2">
                        <BiEditAlt />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(credential.id)}
                      >
                        <BiTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 border-b text-center">
                    No credentials found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between">
          <p>
            Showing data 1 to {credentials.length} of {credentials.length}{" "}
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

export default CredentialsPage;
