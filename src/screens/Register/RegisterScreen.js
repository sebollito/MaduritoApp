import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../../context/authContext";

const RegisterScreen = (props) => {
  const { navigation } = props;
  const { register, isLoading, error, setError, user } =
    useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user !== null) {
      console.log("User is registered");
      console.log(user);
      navigation.navigate("Scanner");
    }
  }, [user, navigation]);

  const handleRegister = () => {
    // Logic for handling registration
    register(name, email, password);
  };

  return (
    <View style={styles.container}>
      {/* Loading Indicator */}
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {/* App Logo */}
      <Text style={styles.logo}>Register</Text>

      {/* Name Input */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => {
            setName(text);
            setError(""); // Clear error when name is modified
          }}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => {
            setEmail(text);
            setError(""); // Clear error when email is modified
          }}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            setError(""); // Clear error when password is modified
          }}
        />
      </View>

      {/* Register Error Message */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Register Button */}
      <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#333333",
    marginBottom: 50,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#B2DB5A",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  registerBtn: {
    width: "80%",
    backgroundColor: "#63A024",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  registerText: {
    color: "white",
  },
});

export default RegisterScreen;
