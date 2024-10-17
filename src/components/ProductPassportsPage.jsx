import React, { useEffect, useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import {
  getProductPassports,
  deleteProductPassport,
  addProductPassport,
  updateProductPassport,
} from "../api/api";

const ProductPassportsPage = () => {
  const [productPassports, setProductPassports] = useState([]);
  const [editingPassport, setEditingPassport] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    credentials: "",
    date: "",
  });

  useEffect(() => {
    const fetchProductPassports = async () => {
      try {
        const response = await getProductPassports();
        setProductPassports(response.data || []);
      } catch (error) {
        console.error("Error fetching product passports:", error);
      }
    };

    fetchProductPassports();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProductPassport(id);
      setProductPassports(
        productPassports.filter((passport) => passport._id !== id)
      );
    } catch (error) {
      console.error("Error deleting product passport:", error);
      alert("Failed to delete product passport!");
    }
  };

  const handleAddProductPassport = async () => {
    try {
      const newPassport = {
        name: "New Product",
        credentials: "CR11",
        date: new Date().toISOString(),
      };
      await addProductPassport(newPassport);
      const response = await getProductPassports();
      setProductPassports(response.data || []);
    } catch (error) {
      console.error("Error adding product passport:", error);
      alert("Failed to add product passport!");
    }
  };

  const handleEdit = (passport) => {
    setEditingPassport(passport);
    setFormValues({
      name: passport.name,
      credentials: passport.credentials,
      date: new Date(passport.date).toISOString().split("T")[0],
    });
  };

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = async () => {
    try {
      await updateProductPassport(editingPassport._id, formValues);
      const response = await getProductPassports();
      setProductPassports(response.data || []);
      setEditingPassport(null);
    } catch (error) {
      console.error("Error updating product passport:", error);
      alert("Failed to update product passport!");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Product Passports</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddProductPassport}
          >
            + Add Product Passport
          </button>
        </div>

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
              {productPassports.length > 0 ? (
                productPassports.map((passport) => (
                  <tr key={passport._id}>
                    <td className="py-2 px-4 border-b">{passport._id}</td>
                    <td className="py-2 px-4 border-b">{passport.name}</td>
                    <td className="py-2 px-4 border-b">
                      {passport.credentials}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {new Date(passport.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="text-blue-500 mr-2"
                        onClick={() => handleEdit(passport)}
                      >
                        <BiEditAlt />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(passport._id)}
                      >
                        <BiTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 border-b text-center">
                    No product passports found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {editingPassport && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Edit Product Passport</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleFormChange}
                placeholder="Product Name"
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                name="credentials"
                value={formValues.credentials}
                onChange={handleFormChange}
                placeholder="Credentials"
                className="border p-2 rounded-md"
              />
              <input
                type="date"
                name="date"
                value={formValues.date}
                onChange={handleFormChange}
                className="border p-2 rounded-md"
              />
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleSaveEdit}
              >
                Save Changes
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md ml-4"
                onClick={() => setEditingPassport(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPassportsPage;
