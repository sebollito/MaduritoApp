import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../../context/authContext";

const ProfileScreen = (props) => {
  const { navigation } = props;
  const { user, getToken, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getToken();
        const response = await fetch("http://cjoga.dyndns-server.com:5000/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleDeleteHistory = () => {
    // <tbd>
    console.log("Delete History");
  };

  const handleUpdatePassword = () => {
    navigation.navigate("ResetPassword");
  };

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#63A024" />;
  }

  if (!userData) {
    return <Text>Something went wrong...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./profile-picture-test.png")}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.email}>{userData.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDeleteHistory}>
        <Text style={styles.buttonText}>Delete My History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#63A024",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ProfileScreen;
