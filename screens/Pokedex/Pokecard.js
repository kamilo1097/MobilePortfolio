import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const typeToColor = (pokemonType) => {
  return colorsTiles[pokemonType] ?? "white";
};
const colorsTiles = {
  rock: "rgb(148, 81, 81)",
  ghost: "#A292BC",
  electric: "rgb(255, 255, 161)",
  bug: "#F6D6A7",
  poison: "#e0a7f6",
  normal: "#F4F4F4",
  fairy: "rgba(255, 192, 203, 0.863)",
  fire: "#FBE3DF",
  grass: "#E2F9E1",
  water: "#E0F1FD",
  psychic: "#C183C1",
  fighting: "#D67873",
  ground: "#A292BC",
  dragon: "#A27DFA",
  steel: "#D1D1E0",
  ice: "#BCE6E6",
  dark: "#A29288",
};
export default function Pokecard({ pokemon, setModalOpenForPokemon }) {
  const url = pokemon.url;
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  //const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonIndex}.png`;
  const imageUrl = `https://github.com/HybridShivam/Pokemon/blob/master/assets/images/${pokemonIndex.padStart(
    3,
    "0"
  )}.png?raw=true`;
  const [pokemonData, setPokemonData] = useState(undefined);
  const [pokemonType, setPokemonType] = useState(undefined);

  const getPokemonData = async () => {
    try {
      const res = await axios.get(url);
      setPokemonData(res.data);
      setPokemonType(res.data.types[0]?.type?.name);
    } catch (err) {}
  };
  useEffect(() => {
    getPokemonData();
  }, [pokemon]);
  return (
    <TouchableOpacity
      key={pokemon.id}
      onPress={() => setModalOpenForPokemon(pokemon.name)}
      style={[
        styles.tileContainer,
        { backgroundColor: typeToColor(pokemonType) },
      ]}
    >
      {pokemonData && (
        <View>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <View style={styles.imageBG}>
            <Image
              style={styles.pokemonImage}
              source={{
                uri: imageUrl,
              }}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
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
    alignSelf: "center",
  },
  pokemonName: {
    color: "#fff",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    padding: 4,
  },
});
