import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const ProductsPage = () => {
  const products = [
    {
      id: "#20462",
      name: "Hat",
      customer: "Matt Dickerson",
      date: "13/05/2022",
      amount: "$4.95",
    },
    {
      id: "#18933",
      name: "Laptop",
      customer: "Wiktoria",
      date: "22/05/2022",
      amount: "$8.95",
    },
    {
      id: "#45169",
      name: "Phone",
      customer: "Trixie Byrd",
      date: "15/06/2022",
      amount: "$1,149.95",
    },
    {
      id: "#34304",
      name: "Bag",
      customer: "Brad Mason",
      date: "06/09/2022",
      amount: "$899.95",
    },
    {
      id: "#17188",
      name: "Headset",
      customer: "Sanderson",
      date: "25/09/2022",
      amount: "$22.95",
    },
    {
      id: "#73003",
      name: "Mouse",
      customer: "Jun Redfern",
      date: "04/10/2022",
      amount: "$54.95",
    },
    {
      id: "#58825",
      name: "Clock",
      customer: "Miriam Kidd",
      date: "17/10/2022",
      amount: "$174.95",
    },
    {
      id: "#44122",
      name: "T-shirt",
      customer: "Dominic",
      date: "24/10/2022",
      amount: "$249.95",
    },
    {
      id: "#89094",
      name: "Monitor",
      customer: "Shanice",
      date: "01/11/2022",
      amount: "$899.95",
    },
    {
      id: "#85252",
      name: "Keyboard",
      customer: "Poppy-Rose",
      date: "22/11/2022",
      amount: "$6.95",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Products</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          + Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.customer}</td>
                <td className="py-2 px-4 border-b">{product.date}</td>
                <td className="py-2 px-4 border-b">{product.amount}</td>
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
      <div className="flex justify-between items-center mt-4">
        <span>Showing data 1 to 10 of 256K entries</span>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded">3</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
