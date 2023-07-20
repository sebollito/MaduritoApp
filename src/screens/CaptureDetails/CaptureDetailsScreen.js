import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const CaptureDetailsScreen = (props) => {
  const { navigation } = props;

  const handleNotRipe = () => {
    // Logic for handling "Not Ripe Enough" button press
    console.log('Not Ripe Enough');
    navigation.navigate("Scanner");
  };

  const handleJustRight = () => {
    // Logic for handling "Just Right" button press
    console.log('Just Right');
    navigation.navigate("Scanner");
  };

  const handleTooRipe = () => {
    // Logic for handling "Too Ripe for my liking" button press
    console.log('Too Ripe for my liking');
    navigation.navigate("Scanner");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capture Details</Text>

      <Text style={styles.label}>Capture Date:</Text>
      <Text style={styles.details}>2023-07-18</Text>

      <Text style={styles.label}>Ripeness Estimation:</Text>
      <Text style={styles.details}>Medium</Text>

      <Text style={styles.label}>Days to Consume Estimation:</Text>
      <Text style={styles.details}>2 days</Text>

      <Text style={styles.label}>What did you think of this estimation?</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonNotRipe} onPress={handleNotRipe}>
          <Text style={styles.buttonText}>Not Ripe Enough</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRipe} onPress={handleJustRight}>
          <Text style={styles.buttonText}>Just Right</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonTooRipe} onPress={handleTooRipe}>
          <Text style={styles.buttonText}>Too Ripe for my liking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    marginBottom:10
  },
  details: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  buttonNotRipe: {
    backgroundColor: '#63A024',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  buttonRipe: {
    backgroundColor: '#89C43C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  buttonTooRipe: {
    backgroundColor: '#B2DB5A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CaptureDetailsScreen;
