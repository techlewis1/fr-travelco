import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const destinations = [
  { id: '1', name: 'Paris', image: require('../assets/paris.jpg') },
  { id: '2', name: 'New York', image: require('../assets/newyork.jpg') },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={destinations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { destination: item })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  text: { fontSize: 20, fontWeight: 'bold' },
});
