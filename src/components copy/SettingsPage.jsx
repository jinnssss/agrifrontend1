import React from "react";
import { useUser } from "../context/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";

const SettingsPage = () => {
  // Get the logged-in user's details from the context
  const user = useUser();

  // Function to render role-based content
  const renderRoleBasedContent = () => {
    switch (user?.role) {
      case "Admin":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold">Admin Settings</h2>
            <p>As an Admin, you can manage all settings and users.</p>
          </div>
        );
      case "Producer":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold">Producer Settings</h2>
            <p>Manage your products and monitor their performance.</p>
          </div>
        );
      case "Consumer":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold">Consumer Settings</h2>
            <p>
              Manage your orders, view product details, and track shipments.
            </p>
          </div>
        );
      case "Distributor":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold">Distributor Settings</h2>
            <p>Oversee deliveries and manage supply chains efficiently.</p>
          </div>
        );
      case "Regulator":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold">Regulator Settings</h2>
            <p>Monitor compliance and ensure that regulations are met.</p>
          </div>
        );
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold">General Settings</h2>
            <p>Manage your account settings and preferences.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Main Content */}
      <div className="flex gap-6 mt-6">
        {/* Left Section */}
        <div className="flex-1">
          {/* Profile Card */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/100" // Placeholder for profile picture
                alt="Profile"
                className="rounded-full w-20 h-20"
              />
              <div className="ml-4">
                <h2 className="text-lg font-bold">{user?.name}</h2>
                <p className="text-gray-500">{user?.role}</p>
              </div>
            </div>
            <div className="flex justify-between text-center">
              <div>
                <h3 className="text-xl font-bold">{user?.posts || 0}</h3>
                <p className="text-gray-500">Posts</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">{user?.views || 0}</h3>
                <p className="text-gray-500">Views</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">{user?.exchanges || 0}</h3>
                <p className="text-gray-500">Exchanges</p>
              </div>
            </div>
          </div>

          {/* Upload Files Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Upload Files</h2>
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center">
              <p className="mb-4">PNG, JPG and GIF files are allowed</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Upload Files
              </button>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Publish now
            </button>
          </div>

          {/* All Products Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">All Products</h2>
            <p className="text-gray-500 mb-4">
              Here you can find more details about your products.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50" // Placeholder for product image
                    alt="Product"
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">Mango</h3>
                    <a href="#" className="text-blue-500 text-sm">
                      See product details
                    </a>
                  </div>
                </div>
                <button>
                  <BiPencil className="text-gray-500" />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50" // Placeholder for product image
                    alt="Product"
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">Apple</h3>
                    <a href="#" className="text-blue-500 text-sm">
                      See product details
                    </a>
                  </div>
                </div>
                <button>
                  <BiPencil className="text-gray-500" />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50" // Placeholder for product image
                    alt="Product"
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">Tea</h3>
                    <a href="#" className="text-blue-500 text-sm">
                      See product details
                    </a>
                  </div>
                </div>
                <button>
                  <BiPencil className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Notifications */}
        <div className="w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p>Item update notifications</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Item comment notifications</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Credentials notifications</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Product reminders notifications</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Meetups near you notifications</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Company news notifications</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>New launches</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Monthly product changes</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Subscribe to newsletter</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <p>Email me when someone views my product</p>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role-Based Content Section */}
      {renderRoleBasedContent()}
    </div>
  );
};

export default SettingsPage;
