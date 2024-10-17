import React, { useEffect, useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { getProducts, deleteProduct, addProduct } from "../api/api";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    customer: "",
    date: "",
    amount: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product!");
    }
  };

  const handleAddProduct = async () => {
    try {
      const addedProduct = await addProduct(newProduct);
      setProducts([...products, addedProduct.data]);
      setNewProduct({ name: "", Origin: "", akddssd: "", amount: "" });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product!");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Products</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddProduct}
        >
          + Add Product
        </button>
      </div>

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
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(product.id)}
                  >
                    <BiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span>
          Showing data 1 to {products.length} of {products.length} entries
        </span>
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
