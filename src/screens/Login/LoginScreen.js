import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../../context/authContext"; // Import the context

const LoginScreen = (props) => {
  const { navigation } = props;
  const { login, isLoading, error, setError } = useContext(AuthContext); // Destructure login function, isLoading state, and error from context
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailBackground, setEmailBackground] = useState("#B2DB5A");
  const [passwordBackground, setPasswordBackground] = useState("#B2DB5A");
  const [loginButtonBackground, setLoginButtonBackground] = useState("#63A024");

  useEffect(() => {
    if (user !== null) {
      console.log("User is logged in");
      console.log(user);
      navigation.navigate("Scanner"); // replace "Scanner" with the name of your Scan section
    }
  }, [user, navigation]);

  const handleLogin = () => {
    // Use login function from context
    login(email, password);
  };

  const handleRegister = () => {
    // Navigate to registration
    navigation.navigate("Register");
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      {/* Loading Indicator */}
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {/* App Logo */}
      <Image source={require("./OG.png")} style={styles.logo} />

      {/* Email Input */}
      <TouchableWithoutFeedback
        onPress={() => setEmailBackground("#B2DB5A")}
        onPressOut={() => setEmailBackground("#B2DB5A")}
      >
        <View style={[styles.inputView, { backgroundColor: emailBackground }]}>
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
      </TouchableWithoutFeedback>

      {/* Password Input */}
      <TouchableWithoutFeedback
        onPress={() => setPasswordBackground("#B2DB5A")}
        onPressOut={() => setPasswordBackground("#B2DB5A")}
      >
        <View
          style={[styles.inputView, { backgroundColor: passwordBackground }]}
        >
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
      </TouchableWithoutFeedback>

      {/* Login Error Message */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.loginBtn, { backgroundColor: loginButtonBackground }]}
        onPress={handleLogin}
        onPressIn={() => setLoginButtonBackground("#63A024")}
        onPressOut={() => setLoginButtonBackground("#63A024")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
        <Text style={styles.registerText}>Sign Up</Text>
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
    width: 250,
    height: 250,
    resizeMode: "contain",
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
  loginBtn: {
    width: "80%",
    backgroundColor: "#B2DB5A",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  forgotPasswordText: {
    color: "#333333",
    marginTop: 10,
  },
  registerBtn: {
    marginTop: 20,
  },
  registerText: {
    color: "#333333",
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
});

export default LoginScreen;
