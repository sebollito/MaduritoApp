import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import MenuImage from "../../components/MenuImage/MenuImage";

const ScannerScreen = (props) => {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const handleScan = () => {
    // Logic for scanning
    console.log('Scan');
    navigation.navigate("ExpoCamera");

  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./fruits-background-test.jpg')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
          <Text style={styles.scanButtonText}>SCAN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScannerScreen;
