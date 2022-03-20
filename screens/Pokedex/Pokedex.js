import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import BackButton from "../../components/sComponents/BackButton";
import { globalStyles } from "../../styles/global";
import axios from "axios";
import Pokecard from "./Pokecard";
//import Pokelist from "./Pokelist";
export default function Pokedex({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const getDataFromApi = async () => {
    let cancel;
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    });
    const data = await res.data.results.map((m) => m);

    setPokemon(data);

    return () => cancel();
  };

  useEffect(() => {
    getDataFromApi();
  }, [currentPageUrl]);
  return (
    <View
      style={[globalStyles.container, { backgroundColor: "rgb(43,41,44)" }]}
    >
      <BackButton navigation={navigation} />

      <ScrollView>
        <View style={styles.containerOfTiles}>
          {pokemon &&
            pokemon.map((item) => (
              <Pokecard style={styles.tileContainer}>{item}</Pokecard>
            ))}
          {/* <Pokelist pokemon={pokemon} /> */}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerOfTiles: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
