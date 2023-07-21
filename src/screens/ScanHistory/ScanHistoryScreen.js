import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../../context/authContext';

const HistoryScreen = (props) => {
  const { navigation } = props;
  const { getToken } = useContext(AuthContext);
  const token = getToken();

  const [scanHistory, setScanHistory] = useState([]);
  const [fruitsData, setFruitsData] = useState([]);

  const appleIcon = require('./apple.png');
  const pineappleIcon = require('./pineapple.png');
  const pearIcon = require('./pear.png');
  const peachIcon = require('./peach.png');
  const coconutIcon = require('./coconut.png');
  const grapeIcon = require('./grape.png');
  const watermelonIcon = require('./watermelon.png');
  const bananaIcon = require('./banana.png');
  const strawberryIcon = require('./strawberry.png');
  const cherryIcon = require('./cherry.png');

  function getHistory() {
    // Replace 'YOUR_API_ENDPOINT' with the actual URL of your API server
    return fetch('http://cjoga.dyndns-server.com:5000/history', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Replace with your actual JWT token
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        console.log("data", data.history);
        setScanHistory(data.history); // Set the scanHistory state with the data from the API response
      })
      .catch((error) => {
        console.error('Error:', error.message);
        return null;
      });
  }

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
      return data; // You can return the data to further process it if needed
    } catch (error) {
      console.log(data);
      console.error('Error:', error.message);
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      getHistory();
      const fruitsData = await getAllFruits();
      setFruitsData(fruitsData);
    })();
  }, []);

  const handleHistoryItemPress = (item) => {
    // Logic for handling the interaction with the history item
    console.log('History Item Pressed:', item);
    
    // Navigate to the ScanDetailScreen and pass the scanData
    navigation.navigate("ScanDetail", { scanData: item});
  };

  const getIconFromAssets = (fruitNombre) => {
    switch (fruitNombre.toLowerCase()) {
      case "manzana":
        return appleIcon;
      case "piña":
        return pineappleIcon;
      case "pera":
        return pearIcon;
      case "melocotón":
        return peachIcon;
      case "coco":
        return coconutIcon;
      case "uva":
        return grapeIcon;
      case "sandía":
        return watermelonIcon;
      case "banana":
        return bananaIcon;
      case "fresa":
        return strawberryIcon;
      case "cereza":
        return cherryIcon;
      // Add more cases for other fruits if needed
      default:
        return require('./default.png'); // A default icon in case the fruit name is not recognized
    }
  };

const renderHistoryItem = ({ item }) => {
    const parts = item.fecha.split("T");
    const datePart = parts[0];

    // Find the fruit with the matching id in the fruitsData array
    const matchedFruit = fruitsData.find((fruit) => fruit.id === item.id_fruta);
    const fruitNombre = matchedFruit ? matchedFruit.nombre : "Unknown Fruit";

    console.log('Item:', item); // Log the item
    return (
      <TouchableOpacity
        style={[styles.historyItem, { backgroundColor: '#63A024' }]}
        onPress={() => handleHistoryItemPress(item)}
      >
        {/* Create 3 columns */}
        <View style={styles.columnContainer}>
          <Text style={styles.historyDate}>{datePart}</Text>
          <View style={styles.historyResultContainer}>
            <Text style={styles.historyResult}>{fruitNombre}</Text>
          </View>
          <Image source={getIconFromAssets(fruitNombre)} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan History</Text>

      {scanHistory.length > 0 ? (
        <FlatList
          data={scanHistory}
          renderItem={renderHistoryItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.emptyMessage}>No scans found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  historyItem: {
    backgroundColor: '#63A024',
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  columnContainer: {
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-between', // Add space between columns
    alignItems: 'center', // Center items vertically
  },
  historyDate: {
    fontSize: 16,
  },
  historyResult: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1, // Take the available space in the middle column
    marginHorizontal: 10, // Add some space between datePart and fruitNombre
  },
  icon: {
    width: 32, // Adjust the width and height to your icon size
    height: 32,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HistoryScreen;
