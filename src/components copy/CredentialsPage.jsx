import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const CredentialsPage = () => {
  // Dummy credentials data
  const credentials = [
    { id: 20462, name: "CR1", status: "Approved", date: "13/05/2022" },
    { id: 18933, name: "CR2", status: "Approved", date: "22/05/2022" },
    { id: 45169, name: "CR3", status: "Approved", date: "15/06/2022" },
    { id: 34304, name: "CR4", status: "Approved", date: "06/09/2022" },
    { id: 17188, name: "CR5", status: "Not Valid", date: "25/09/2022" },
    { id: 73003, name: "CR6", status: "Not Valid", date: "04/10/2022" },
    { id: 58825, name: "CR7", status: "Approved", date: "17/10/2022" },
    { id: 44122, name: "CR8", status: "Not Valid", date: "24/10/2022" },
    { id: 89094, name: "CR9", status: "Approved", date: "01/11/2022" },
    { id: 85252, name: "CR10", status: "Approved", date: "22/11/2022" },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Credentials</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Add Credential
          </button>
        </div>

        {/* Table */}
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
              {credentials.map((credential) => (
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
                  <td className="py-2 px-4 border-b">{credential.date}</td>
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
          <p>Showing data 1 to 10 of 10 entries</p>
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
