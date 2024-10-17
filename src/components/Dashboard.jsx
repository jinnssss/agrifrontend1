import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import Cookies from "js-cookie";
import { FaUserCircle, FaBell, FaExchangeAlt } from "react-icons/fa";
import { BiLogOut, BiCamera } from "react-icons/bi";
import { MdDashboard, MdReport } from "react-icons/md";
import { GiRobotLeg } from "react-icons/gi";
import { CgEreader, CgProductHunt } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import SettingsPage from "./SettingsPage";
import UsersPage from "./UsersPage";
import RoleManagementPage from "./RoleManagementPage";
import CredentialsPage from "./CredentialsPage";
import DataExchangePage from "./DataExchangePage";
import ProductPassportsPage from "./ProductPassportsPage";
import ReportsPage from "./ReportsPage";
import ProductsPage from "./ProductsPage";
import DashboardContent from "./DashboardContent";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "Dashboard";
  });

  const user = useUser();
  const navigate = useNavigate(); // Use the navigate hook here

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  const navItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard className="mr-2" />,
      section: "Dashboard",
      roles: ["Admin", "Producer", "Consumer", "Distributor", "Regulator"],
    },
    {
      name: "Role Management",
      icon: <GiRobotLeg className="mr-2" />,
      section: "Role Management",
      roles: ["Admin"],
    },
    {
      name: "Users",
      icon: <GrGroup className="mr-2" />,
      section: "Users",
      roles: ["Producer"],
    },
    {
      name: "Products",
      icon: <CgProductHunt className="mr-2" />,
      section: "Products",
      roles: ["Producer", "Admin"],
    },
    {
      name: "Product Passports",
      icon: <BiCamera className="mr-2" />,
      section: "Product Passports",
      roles: ["Consumer", "Admin"],
    },
    {
      name: "Reports",
      icon: <MdReport className="mr-2" />,
      section: "Reports",
      roles: ["Producer", "Regulator"],
    },
    {
      name: "Credentials",
      icon: <CgEreader className="mr-2" />,
      section: "Credentials",
      roles: ["Admin", "Producer", "Consumer"],
    },
    {
      name: "Data Exchange",
      icon: <FaExchangeAlt className="mr-2" />,
      section: "Data Exchange",
      roles: ["Admin", "Consumer"],
    },
    {
      name: "Settings",
      icon: <CiSettings className="mr-2" />,
      section: "Settings",
      roles: ["Admin", "Producer", "Consumer", "Distributor", "Regulator"],
    },
  ];

  const renderRoleBasedContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DashboardContent />;
      case "Role Management":
        return <RoleManagementPage />;
      case "Users":
        return <UsersPage />;
      case "Products":
        return <ProductsPage />;
      case "Product Passports":
        return <ProductPassportsPage />;
      case "Reports":
        return <ReportsPage />;
      case "Credentials":
        return <CredentialsPage />;
      case "Data Exchange":
        return <DataExchangePage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return <p>Welcome to your dashboard.</p>;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-md h-screen fixed">
        <div className="p-4">
          <h2 className="text-xl font-bold m-5">Logo</h2>
        </div>
        <ul className="mt-5 m-5">
          {navItems
            .filter((item) => item.roles.includes(user?.role))
            .map((item) => (
              <li
                key={item.name}
                onClick={() => setActiveSection(item.section)}
                className={`mb-5 p-3 hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer ${
                  activeSection === item.section
                    ? "bg-blue-500 text-white rounded-md"
                    : ""
                }`}
              >
                <a className="flex items-center">
                  {item.icon} {item.name}
                </a>
              </li>
            ))}
          <li className="mb-5 p-3 hover:bg-blue-500 hover:text-white hover:rounded-md bottom-0 absolute">
            <button
              onClick={handleLogout}
              className="text-red-500 flex items-center"
            >
              <BiLogOut className="mr-2" /> Sign Out
            </button>
          </li>
        </ul>
      </aside>

      <div className="flex-1 p-6 bg-gray-100 ml-64 overflow-y-auto">
        <header className="flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-xl font-bold">{activeSection}</h1>
          <div className="flex items-center">
            <FaBell className="mr-6 text-gray-600" />
            <div className="flex items-center">
              <FaUserCircle className="mr-2 text-gray-600" />
              <span className="mr-2 font-semibold">{user?.name}</span>
              <span className="text-gray-500">{user?.role}</span>
            </div>
          </div>
        </header>

        {renderRoleBasedContent()}
      </div>
    </div>
  );
};

export default Dashboard;
