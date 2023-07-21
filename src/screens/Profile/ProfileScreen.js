import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/authContext';

const ProfileScreen = (props) => {
  const { navigation } = props;
  const { getToken } = useContext(AuthContext);
  const token = getToken();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://cjoga.dyndns-server.com:5000/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // data contains the response from the API
        setUserData(data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);
  
  const handleDeleteHistory = () => {
    // Logic for deleting history
    console.log('Delete History');
  };

  const handleUpdatePassword = () => {
    // Logic for updating password
    console.log('Update Password');
    navigation.navigate("ResetPassword");

  };

  const handleLogout = () => {
    // Logic for logging out
    console.log('Logout');
    navigation.navigate("Login");

  };

  return (
    <View style={styles.container}>
      <Image source={require('./profile-picture-test.png')} style={styles.profilePicture} />

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
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#63A024',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;
