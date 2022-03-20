import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";

export default function Pokelist({ pokemon }) {
  return (
    <View>
      <FlatList
        keyExtractor={(pokemon) => pokemon.name}
        data={pokemon}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      {/* {pokemon.map((item) => (
        <Text>{item}</Text>
      ))} */}
    </View>
  );
}
