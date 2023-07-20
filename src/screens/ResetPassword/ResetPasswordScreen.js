import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordScreen = (props) => {
  const { navigation } = props;

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Logic for resetting password
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Reset Password</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="New Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          onChangeText={text => setNewPassword(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={handleResetPassword}>
        <Text style={styles.resetText}>RESET PASSWORD</Text>
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
    fontWeight: 'bold',
    fontSize: 28,
    color: '#333333',
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
    color: 'white',
  },
  resetBtn: {
    width: '80%',
    backgroundColor: '#63A024',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  resetText: {
    color: 'white',
  },
});

export default ResetPasswordScreen;
