import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

const typeToColor = (pokemonType) => {
  return colorsTiles[pokemonType] ?? "white";
};
const preDefinedStats = {
  maxHP: 300,
  maxAttack: 300,
  maxDefense: 300,
  maxSpeed: 300,
};
const colorsTiles = {
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
  psychic: "#C183C1",
  fighting: "#D67873",
  ground: "#A292BC",
};

export default function Pokemodal({
  setModalOpen,
  pokemonModalData,
  getPokemonImage,
}) {
  const pokemonStats = {
    hp: pokemonModalData.stats[0].base_stat,
    attack: pokemonModalData.stats[1].base_stat,
    defense: pokemonModalData.stats[2].base_stat,
    speed: pokemonModalData.stats[5].base_stat,
  };

  const pokemonType = pokemonModalData.types[0].type.name;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.modalContent}>
        <View>
          <View
            style={{
              backgroundColor: typeToColor(pokemonType),
              justifyContent: "center",
              alignItems: "center",
              borderBottomStartRadius: 50,
              borderBottomEndRadius: 50,
            }}
          >
            <MaterialIcons
              style={styles.modalClose}
              name="chevron-left"
              size={32}
              onPress={() => setModalOpen(false)}
            />
            <Image
              style={{
                height: 180,
                width: 180,
                marginVertical: 30,
              }}
              source={{
                uri: getPokemonImage(),
              }}
            />
          </View>
          <View>
            <Text style={styles.pokemonNameStyle}>
              {pokemonModalData && pokemonModalData.name}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.pokemonTypeBadge,
                { backgroundColor: typeToColor(pokemonType) },
              ]}
            >
              {pokemonType}
            </Text>
          </View>
          {/**Kontener ze statami głównymi */}
          <View style={styles.mainStatContainer}>
            <View style={styles.statContainer}>
              <Text style={styles.pokemonStatText}>
                {pokemonModalData.weight / 10} KG
              </Text>
              <Text style={styles.pokemonStatDescription}>Weight</Text>
            </View>
            <View style={styles.statContainer}>
              <Text style={styles.pokemonStatText}>
                {pokemonModalData.height / 10} M
              </Text>
              <Text style={styles.pokemonStatDescription}>Height</Text>
            </View>
          </View>
          {/** KONIEC Kontener ze statami głównymi */}
          {/* Kontener ze statami (progress bary) */}
          <View style={styles.progressBarStatsContainer}>
            <Text style={styles.headerTextOfStats}>Stats</Text>
            {/*Statsy */}
            <View style={styles.statsContainer}>
              <Text style={styles.statsHeaderText}>HP</Text>
              <Progress.Bar
                progress={pokemonStats.hp / preDefinedStats.maxHP}
                width={200}
                color={"#D53943"}
                height={15}
                borderRadius={20}
              >
                <Text style={styles.textInsideProgressBar}>
                  {pokemonStats.hp}
                </Text>
              </Progress.Bar>
            </View>
            {/* Koniec Statsy */}
            {/*Statsy */}
            <View style={styles.statsContainer}>
              <Text style={styles.statsHeaderText}>ATK</Text>
              <Progress.Bar
                progress={pokemonStats.attack / preDefinedStats.maxAttack}
                width={200}
                color={"#FCA826"}
                height={15}
                borderRadius={20}
              >
                <Text style={styles.textInsideProgressBar}>
                  {pokemonStats.attack}
                </Text>
              </Progress.Bar>
            </View>
            {/* Koniec Statsy */}
            {/*Statsy */}
            <View style={styles.statsContainer}>
              <Text style={styles.statsHeaderText}>DEF</Text>
              <Progress.Bar
                progress={pokemonStats.defense / preDefinedStats.maxDefense}
                width={200}
                color={"#0191F0"}
                height={15}
                borderRadius={20}
              >
                <Text style={styles.textInsideProgressBar}>
                  {pokemonStats.defense}
                </Text>
              </Progress.Bar>
            </View>
            {/* Koniec Statsy */}
            {/*Statsy */}
            <View style={styles.statsContainer}>
              <Text style={styles.statsHeaderText}>SPD</Text>
              <Progress.Bar
                progress={pokemonStats.speed / preDefinedStats.maxSpeed}
                width={200}
                color={"#8FAFC4"}
                height={15}
                borderRadius={20}
              >
                <Text style={styles.textInsideProgressBar}>
                  {pokemonStats.speed}
                </Text>
              </Progress.Bar>
            </View>
            {/* Koniec Statsy */}
          </View>
          {/* Kontener ze statami (progress bary) */}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    width: 100,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    color: "rgb(255, 250, 237)",
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 20,
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
  modalClose: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: -30,
    marginTop: 20,
  },
});
