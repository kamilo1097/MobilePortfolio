import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

export default function Pokemodal({ modalOpen }) {
  const [tempModalOpen, setTempModalOpen] = useState([]);
  useEffect(() => {}, []);
  return (
    <Modal visible={tempModalOpen} animationType="slide">
      <TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <MaterialIcons
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            name="close"
            size={24}
            onPress={() => setTempModalOpen(false)}
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
            {/**Kontener ze statami głównymi */}
            <View style={styles.mainStatContainer}>
              <View style={styles.statContainer}>
                <Text style={styles.pokemonStatText}>90.5 KG</Text>
                <Text style={styles.pokemonStatDescription}>Weight</Text>
              </View>
              <View style={styles.statContainer}>
                <Text style={styles.pokemonStatText}>1.0 M</Text>
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
                  progress={0.3}
                  width={200}
                  color={"#D53943"}
                  height={20}
                  borderRadius={20}
                  animated={true}
                >
                  <Text style={styles.textInsideProgressBar}>Test</Text>
                </Progress.Bar>
              </View>
              {/* Koniec Statsy */}
              {/*Statsy */}
              <View style={styles.statsContainer}>
                <Text style={styles.statsHeaderText}>ATK</Text>
                <Progress.Bar
                  progress={0.3}
                  width={200}
                  color={"#FCA826"}
                  height={20}
                >
                  <Text style={styles.textInsideProgressBar}>Test</Text>
                </Progress.Bar>
              </View>
              {/* Koniec Statsy */}
              {/*Statsy */}
              <View style={styles.statsContainer}>
                <Text style={styles.statsHeaderText}>DEF</Text>
                <Progress.Bar
                  progress={0.3}
                  width={200}
                  color={"#0191F0"}
                  height={20}
                >
                  <Text style={styles.textInsideProgressBar}>Test</Text>
                </Progress.Bar>
              </View>
              {/* Koniec Statsy */}
              {/*Statsy */}
              <View style={styles.statsContainer}>
                <Text style={styles.statsHeaderText}>SPD</Text>
                <Progress.Bar
                  progress={0.3}
                  width={200}
                  color={"#8FAFC4"}
                  height={20}
                >
                  <Text style={styles.textInsideProgressBar}>Test</Text>
                </Progress.Bar>
              </View>
              {/* Koniec Statsy */}
            </View>
            {/* Kontener ze statami (progress bary) */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
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
    marginVertical: 10,
  },
  statsHeaderText: {
    fontSize: 15,
    marginHorizontal: 6,
    color: "#fff",
    fontWeight: "bold",
  },
  textInsideProgressBar: {
    position: "absolute",
    flex: 0,
    alignSelf: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
});
