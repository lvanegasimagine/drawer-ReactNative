import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Card from '../components/HotelCard';
import { sitios } from '../data/sitios';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sitios}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(hotel) => hotel.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10
  },
});

export default HomeScreen;
