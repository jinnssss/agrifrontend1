import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const ProductPassportsPage = () => {
  // Dummy product passport data
  const productPassports = [
    { id: "#20462", name: "Hat", credentials: "CR1", date: "13/05/2022" },
    { id: "#18933", name: "Laptop", credentials: "CR2", date: "22/05/2022" },
    { id: "#45169", name: "Phone", credentials: "CR3", date: "15/06/2022" },
    { id: "#34304", name: "Bag", credentials: "CR4", date: "06/09/2022" },
    { id: "#17188", name: "Headset", credentials: "CR5", date: "25/09/2022" },
    { id: "#73003", name: "Mouse", credentials: "CR6", date: "04/10/2022" },
    { id: "#58825", name: "Clock", credentials: "CR7", date: "17/10/2022" },
    { id: "#44122", name: "T-shirt", credentials: "CR8", date: "24/10/2022" },
    { id: "#89094", name: "Monitor", credentials: "CR9", date: "01/11/2022" },
    { id: "#85252", name: "Keyboard", credentials: "CR10", date: "22/11/2022" },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Product Passports</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            + Add Product Passport
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Credentials</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {productPassports.map((passport, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{passport.id}</td>
                  <td className="py-2 px-4 border-b">{passport.name}</td>
                  <td className="py-2 px-4 border-b">{passport.credentials}</td>
                  <td className="py-2 px-4 border-b">{passport.date}</td>
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

export default ProductPassportsPage;
