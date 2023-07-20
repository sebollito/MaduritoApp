import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/navigations/AppNavigation";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <AppContainer />
    </AuthProvider>
  );
}
