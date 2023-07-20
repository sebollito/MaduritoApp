import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ScanDetailScreen = ({ props }) => {
//   const { scanId } = props.params;
  const [scanData, setScanData] = useState(null);

//   useEffect(() => {
//     // Fetch scan data from the backend API
//     fetch(`http://YOUR_BACKEND_API_URL/api/scans/${scanId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setScanData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching scan data:', error);
//       });
//   }, [scanId]);

//   if (!scanData) {
//     return <Text>Loading...</Text>;
//   }

  return (
    <View style={styles.container}>
        <Image source={require('./fruit-test.jpg') } style={styles.image} />

        <Text style={styles.label}>Scan Date:</Text>
        <Text style={styles.value}>07/19/2023</Text>
        
        <Text style={styles.label}>Ripeness Estimation:</Text>
        <Text style={styles.value}>92%</Text>
        
        <Text style={styles.label}>Days to Consume Estimation:</Text>
        <Text style={styles.value}>The pineapple should be ready to eat in 1-2 days</Text>
      {/* <Image source={{ uri: scanData.imageUrl }} style={styles.image} />

      <Text style={styles.label}>Scan Date:</Text>
      <Text style={styles.value}>{scanData.scanDate}</Text>

      <Text style={styles.label}>Ripeness Estimation:</Text>
      <Text style={styles.value}>{scanData.ripenessEstimation}</Text>

      <Text style={styles.label}>Days to Consume Estimation:</Text>
      <Text style={styles.value}>{scanData.daysToConsumeEstimation}</Text> */}
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
