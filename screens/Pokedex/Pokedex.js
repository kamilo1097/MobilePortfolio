import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import BackButton from "../../components/sComponents/BackButton";
import { globalStyles } from "../../styles/global";
import axios from "axios";
import Pokecard from "./Pokecard";
import Pokemodal from "./Pokemodal";
import { MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
//import Pokelist from "./Pokelist";
export default function Pokedex({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const [pokemonModalData, setPokemonModalData] = useState();
  const getDataFromApi = async () => {
    let cancel;
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon", {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      });
      const data = await res.data.results;

      setPokemon(data);
    } catch (err) {}

    return () => cancel();
  };
  const setModalOpenForPokemon = (pokemonData) => {
    console.log(pokemonData);
    getPokemonDetailData(pokemonData);
    setModalOpen(true);
  };
  const getPokemonImage = () => {
    let pokemonString = "";
    if (pokemonModalData != undefined) {
      const pokemonIndex = pokemonModalData.id.toString();

      pokemonString = `https://github.com/HybridShivam/Pokemon/blob/master/assets/images/${pokemonIndex.padStart(
        3,
        "0"
      )}.png?raw=true`;
    }

    return pokemonString;
  };
  const getPokemonDetailData = async (pokemonName) => {
    try {
      const data = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      setPokemonModalData(data.data);

      getPokemonImage();
    } catch (err) {}
  };

  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <View
      style={[globalStyles.container, { backgroundColor: "rgb(43,41,44)" }]}
    >
      <BackButton navigation={navigation} />

      <Modal visible={modalOpen} animationType="slide">
        {pokemonModalData && (
          <Pokemodal
            setModalOpen={setModalOpen}
            pokemonModalData={pokemonModalData}
            getPokemonImage={getPokemonImage}
          />
        )}
      </Modal>
      <ScrollView>
        <View style={styles.containerOfTiles}>
          {pokemon.map((item) => (
            <Pokecard
              pokemon={item}
              setModalOpenForPokemon={setModalOpenForPokemon}
            />
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
  pokemonNameStyle: {
    fontSize: 36,
    color: "#fff",
    textAlign: "center",
    marginVertical: 30,
  },
  pokemonTypeBadge: {
    backgroundColor: "#FBE3DF",
    width: 100,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  modalContent: {
    backgroundColor: "rgb(43,41,44)",
    flex: 1,
  },
  mainStatContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
  },
  pokemonStatText: {
    color: "white",
    fontSize: 24,
  },
  pokemonStatDescription: {
    color: "rgb(124, 119, 128)",
  },
  statContainer: {
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarStatsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextOfStats: {
    fontSize: 26,
    color: "#fff",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  statsHeaderText: {
    fontSize: 12,
    marginHorizontal: 6,
    color: "#fff",
    fontWeight: "bold",
  },
  textInsideProgressBar: {
    position: "absolute",
    flex: 0,
    alignSelf: "center",
    color: "#fff",
    fontSize: 11,
    textTransform: "uppercase",
  },
});
