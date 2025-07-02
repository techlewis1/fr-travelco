import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function DetailsScreen({ route }) {
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <Image source={destination.image} style={styles.image} />
      <Text style={styles.name}>{destination.name}</Text>
      <Text style={styles.description}>This is a beautiful travel destination. More details here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 250, borderRadius: 10 },
  name: { fontSize: 30, fontWeight: 'bold', marginVertical: 10 },
  description: { fontSize: 16 },
});
