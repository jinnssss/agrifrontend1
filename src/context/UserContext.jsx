// src/context/UserContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "../api/api";
import Cookies from "js-cookie";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("user", user);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getUserDetails();
        setUser(response.data);
        console.log("Fetched User Details:", response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    const token = Cookies.get("authToken");
    if (token) {
      fetchUserDetails();
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
