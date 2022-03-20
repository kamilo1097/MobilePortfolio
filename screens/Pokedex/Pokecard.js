import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pokecard(props) {
  const url = props.children.url;
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonIndex}.png`;

  {
    /*Dowiedzieć się dlaczego działa tak a nie inaczej bo podczas pierwszego ładowania jest to troche irytujące */
  }
  const colorsTiles = [
    {
      rock: "rgb(148, 81, 81)",
      ghost: "rgb(247, 247, 247)",
      electric: "rgb(255, 255, 161)",
      bug: "#F6D6A7",
      poison: "#e0a7f6",
      normal: "#F4F4F4",
      fairy: "rgba(255, 192, 203, 0.863)",
      fire: "#FBE3DF",
      grass: "#E2F9E1",
      water: "#E0F1FD",
    },
  ];
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemonData = async () => {
    const res = await axios.get(url);

    const pokemonObject = await res.data;
    console.log(pokemonObject.types[0].type.name);
    console.log(colorsTiles[0][pokemonObject.types[0].type.name]);
    setPokemonData(pokemonObject);
  };
  useEffect(() => {
    getPokemonData();
  }, []);
  return (
    <View
      key={props.children.name}
      style={[styles.tileContainer, { backgroundColor: "white" }]}
    >
      <Text style={styles.pokemonName}>{props.children.name}</Text>
      <View style={styles.imageBG}>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tileContainer: {
    width: "48%",
    height: 120,
    padding: 5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  pokemonImage: {
    height: 60,
    width: 60,
  },
  pokemonName: {
    color: "#fff",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    paddingHorizontal: 4,
  },
});
