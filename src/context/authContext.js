import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(""); // New state for storing error message

  useEffect(() => {
    AsyncStorage.getItem("user").then((data) => {
      if (data) {
        setUser(JSON.parse(data));
      }
    });
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://cjoga.dyndns-server.com:5000/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (data.access_token) {
        const user = { email, token: data.access_token };
        setUser(user);
        await AsyncStorage.setItem("user", JSON.stringify(user));
        setError(""); // Clear the error if login was successful
      } else {
        showMessage({ message: data.message, type: "danger" });
        setError(data.message); // Set the error message if login was unsuccessful
      }
    } catch (error) {
      showMessage({ message: error.message, type: "danger" });
      setError(error.message); // Set the error message if an exception was thrown
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://cjoga.dyndns-server.com:5000/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();
      if (data.message === "New user created") {
        await login(email, password);
      } else {
        showMessage({ message: data.message, type: "danger" });
        setError(data.message); // Set the error message if registration was unsuccessful
      }
    } catch (error) {
      showMessage({ message: error.message, type: "danger" });
      setError(error.message); // Set the error message if an exception was thrown
    } finally {
      setLoading(false);
    }
  };

  const getToken = () => (user ? user.token : null);

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
    setError(""); // Clear the error when the user logs out
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        setError,
        login,
        register,
        getToken,
        logout,
      }} // Include error and setError in the context value
    >
      {children}
    </AuthContext.Provider>
  );
};
