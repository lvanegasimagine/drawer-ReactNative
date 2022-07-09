import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Card from "../components/HotelCard";
import { sitios } from "../data/sitios";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sitios}
        renderItem={({ item }) => <Card info={item} navigation={navigation} />}
        keyExtractor={(hotel) => hotel.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
});

export default HomeScreen;
