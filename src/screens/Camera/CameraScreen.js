import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, CameraRoll } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = (props) => {
  const { navigation } = props;

  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      setPhotoUri(data.uri);

      // Save the photo to the device's camera roll
      CameraRoll.save(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={styles.previewContainer}>
          <Text style={styles.previewText}>Photo Preview:</Text>
          <Image source={{ uri: photoUri }} style={styles.previewImage} />
        </View>
      ) : (
        <RNCamera ref={cameraRef} style={styles.camera} type={RNCamera.Constants.Type.back} captureAudio={false} />
      )}

      {!photoUri && (
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Text style={styles.captureText}>CAPTURE PHOTO</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  captureButton: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  captureText: {
    color: 'white',
    fontSize: 16,
  },
  previewContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  previewText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default CameraScreen;
