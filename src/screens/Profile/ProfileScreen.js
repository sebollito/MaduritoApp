import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Image source={require('./profile-picture-test.png')} style={styles.profilePicture} />

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Age:</Text>
          <Text style={styles.infoValue}>30</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>New York</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoValue}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  infoContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 3,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoValue: {
    flex: 1,
  },
});

export default ProfileScreen;
