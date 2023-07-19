import React, { useState,useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MenuImage from "../../components/MenuImage/MenuImage";

const ScanHistoryScreen = (props) => {
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

  const [scanHistory, setScanHistory] = useState([
    { id: '1', date: '2022-08-15', result: 'Success' },
    { id: '2', date: '2022-08-14', result: 'Failure' },
    { id: '3', date: '2022-08-13', result: 'Success' },
    { id: '4', date: '2022-08-12', result: 'Success' },
    { id: '5', date: '2022-08-11', result: 'Failure' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.scanItem}>
      <Text style={styles.scanDate}>{item.date}</Text>
      <Text style={styles.scanResult}>{item.result}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan History</Text>

      {scanHistory.length > 0 ? (
        <FlatList
          data={scanHistory}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
  scanItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  scanDate: {
    fontSize: 16,
  },
  scanResult: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ScanHistoryScreen;
