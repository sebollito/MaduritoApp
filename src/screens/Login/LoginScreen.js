import React, { useEffect,useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const LoginScreen = (props) => {
  const { navigation } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBackground, setEmailBackground] = useState('#B2DB5A');
  const [passwordBackground, setPasswordBackground] = useState('#B2DB5A');
  const [loginButtonBackground, setLoginButtonBackground] = useState('#63A024');

  const handleLogin = () => {
    // Logic for handling login
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate("Scanner");
  };

  const handleRegister = () => {
    // Logic for handling registration
    console.log('Register');
    navigation.navigate("Register");
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password
    console.log('Forgot Password');
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image source={require('./OG.png')} style={styles.logo} />

      <TouchableWithoutFeedback
        onPress={() => setEmailBackground('#B2DB5A')}
        onPressOut={() => setEmailBackground('#B2DB5A')}
      >
        <View style={[styles.inputView, { backgroundColor: emailBackground }]}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#ffffff"
            onChangeText={text => setEmail(text)}
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => setPasswordBackground('#B2DB5A')}
        onPressOut={() => setPasswordBackground('#B2DB5A')}
      >
        <View style={[styles.inputView, { backgroundColor: passwordBackground }]}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        style={[styles.loginBtn, { backgroundColor: loginButtonBackground }]}
        onPress={handleLogin}
        onPressIn={() => setLoginButtonBackground('#63A024')}
        onPressOut={() => setLoginButtonBackground('#63A024')}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
        <Text style={styles.registerText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#B2DB5A',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white'
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#B2DB5A',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  forgotPasswordText: {
    color: '#333333',
    marginTop: 10,
  },
  registerBtn: {
    marginTop: 20,
  },
  registerText: {
    color: '#333333',
  },
});

export default LoginScreen;
