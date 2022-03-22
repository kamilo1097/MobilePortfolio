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
import { MaterialIcons } from "@expo/vector-icons";
//import Pokelist from "./Pokelist";
export default function Pokedex({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [modalOpen, setModalOpen] = useState(false);
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
    setModalOpen(true);
  };

  useEffect(() => {
    getDataFromApi();
  }, [currentPageUrl]);
  return (
    <View
      style={[globalStyles.container, { backgroundColor: "rgb(43,41,44)" }]}
    >
      <BackButton navigation={navigation} />

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <View>
              <View
                style={{
                  backgroundColor: "#FBE3DF",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomStartRadius: 50,
                  borderBottomEndRadius: 50,
                }}
              >
                <Image
                  style={{
                    height: 180,
                    width: 180,
                    marginVertical: 30,
                  }}
                  source={{
                    uri: "https://github.com/HybridShivam/Pokemon/blob/master/assets/images/006.png?raw=true",
                  }}
                />
              </View>
              <View>
                <Text style={styles.pokemonNameStyle}>charizard</Text>
              </View>
              <View>
                <Text style={styles.pokemonTypeBadge}>fire</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text>90.5KG</Text>
                  <Text>Weight</Text>
                </View>
                <View>
                  <Text>1.0M</Text>
                  <Text>Height</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
});
