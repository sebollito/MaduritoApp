import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/authContext';
// import FastImage from 'react-native-fast-image';
// import * as FileSystem from 'expo-file-system';
// import RNFS from 'react-native-fs';

const ScanDetailScreen = ({ route }) => {
  const { scanData } = route.params;
  let { fecha, id, id_fruta, id_usuario, imagen } = scanData;
  const { getToken } = useContext(AuthContext);
  const token = getToken();

  const [fruitsData, setFruitsData] = useState([]);
  const [descripcionFruta, setDescripcionFruta] = useState('');
  const [datosNutricionales, setDatosNutricionales] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const getAllFruits = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual URL of your API server
      const response = await fetch('http://cjoga.dyndns-server.com:5000/frutas', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("getAllFruits data", data);

      // Set the fetched data in the state
      setFruitsData(data);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // http://cjoga.dyndns-server.com:5000/escaneos/get_image/3
  const getFruitImage = async () => {
    try {
      const response = await fetch(`http://cjoga.dyndns-server.com:5000/escaneos/get_image/${id}`, {
        method: 'GET',
      });
      
      console.log("response",response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("getFruitImage data", data);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // useEffect(() => {
  //   const url = `http://cjoga.dyndns-server.com:5000/escaneos/get_image/${id}`;
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.blob();
  //       } else {
  //         console.log('Error fetching image');
  //         throw new Error('Error fetching image');
  //       }
  //     })
  //     .then(async (blob) => {
  //       if (blob) {
  //         const imagePath = `${RNFS.DocumentDirectoryPath}/your_image_name.jpg`;
  //         await RNFS.writeFile(imagePath, blob, 'base64');
  //         setImageUrl(imagePath);
  //         console.log('Image saved locally:', imagePath);
  //       }
  //     })
  //     .catch(error => {
  //       console.log('Error:', error);
  //     });
  // }, [id, token]);
  
  
  

  useEffect(() => {
    // Fetch the fruits data when the component mounts
    getAllFruits();
    // getFruitImage();
  }, []);

  const parts = scanData.fecha.split("T");
  const datePart = parts[0];

  useEffect(() => {
    // Find the fruit with the matching id in the fruitsData array
    const matchedFruit = fruitsData.find((fruit) => fruit.id === id_fruta);
    if (matchedFruit) {
      setDescripcionFruta(matchedFruit.descripcion);
      setDatosNutricionales(matchedFruit.datos_nutricionales);
    }
  }, [fruitsData, id_fruta]);

  // Find the fruit with the matching id in the fruitsData array
  const matchedFruit = fruitsData.find((fruit) => fruit.id === id_fruta);
  const fruitNombre = matchedFruit ? matchedFruit.nombre : "Unknown Fruit";
  console.log("fruitsData", fruitsData);

  return (
    <View style={styles.container}>
      {/* <Image source={{uri: 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg'}} style={styles.image} /> */}
      {/* <Image source={{uri: 'http://cjoga.dyndns-server.com:5000/escaneos/get_image/3'}} style={styles.image} /> */}
      <Image source={{ uri: 'file://' + imageUrl }} style={styles.image} />
      {/* <Image source={require('./fruit-test.jpg')} style={styles.image} /> */}
      {/* <FastImage
        source={require('./fruit-test.jpg')}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      /> */}
      <Text style={styles.label}>Nombre Fruta:</Text>
      <Text style={styles.value}>{fruitNombre}</Text>

      <Text style={styles.label}>Fecha Escaneo:</Text>
      <Text style={styles.value}>{datePart}</Text>

      <Text style={styles.label}>Ripeness Estimation:</Text>
      <Text style={styles.value}>TBD</Text>

      <Text style={styles.label}>Days to Consume Estimation:</Text>
      <Text style={styles.value}>TBD</Text>

      <Text style={styles.label}>Datos Nutricionales:</Text>
      <Text style={styles.value}>{datosNutricionales}</Text>

      <Text style={styles.label}>Descripción Fruta:</Text>
      <Text style={styles.value}>{descripcionFruta}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
});

export default ScanDetailScreen;
