import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const HistoryScreen = (props) => {
  const { navigation } = props;

  const [scanHistory, setScanHistory] = useState([
    { id: '1', date: '2022-08-15', result: 'Success' },
    { id: '2', date: '2022-08-14', result: 'Failure' },
    { id: '3', date: '2022-08-13', result: 'Success' },
    { id: '4', date: '2022-08-12', result: 'Success' },
    { id: '5', date: '2022-08-11', result: 'Failure' },
  ]);

  const handleHistoryItemPress = (id) => {
    // Logic for handling the interaction with the history item
    console.log('History Item Pressed:', id);
    navigation.navigate("ScanDetail");
  };

  const renderHistoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.historyItem, { backgroundColor: '#63A024' }]}
      onPress={() => handleHistoryItemPress(item.id)}
    >
      <Text style={styles.historyDate}>{item.date}</Text>
      <Text style={styles.historyResult}>{item.result}</Text>
    </TouchableOpacity>
  );

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#63A024',
    borderRadius: 10,
    marginVertical: 5,
  },
  historyDate: {
    fontSize: 16,
  },
  historyResult: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HistoryScreen;
