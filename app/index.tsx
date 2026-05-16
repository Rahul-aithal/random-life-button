import Modal from "@/components/modal";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Pressable, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  dark_humor_array,
  motivation_quotes,
  random_things_10,
  offensive,
  stop_using,
} from "../assets/data/data.js";

export default function Index() {
  function generateRandomStrings() {
    const firstRandomIndex = Math.floor(Math.random() * 5); // 0–4
    const secondRandomIndex = Math.floor(Math.random() * 25); // 0–24

    switch (firstRandomIndex) {
      case 0:
        return {
          title: "Twisted Chuckles",
          data: dark_humor_array[secondRandomIndex],
        };
      case 1:
        return {
          title: "Spark of Grit",
          data: motivation_quotes[secondRandomIndex],
        };
      case 2:
        return {
          title: "Oddball Whispers",
          data: random_things_10[secondRandomIndex],
        };
      case 3:
        return {
          title: "Savage Bites",
          data: offensive[secondRandomIndex],
        };
      default:
        return {
          title: "Exit Wounds",
          data: stop_using[secondRandomIndex],
        };
    }
  }

  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Hide status bar for full screen effect */}
      <StatusBar style="auto" hidden={true} />

      {show ? (
        <Modal setShow={setShow} randomValues={generateRandomStrings()} />
      ) : (
        <View style={styles.row}>
          <Text style={styles.buttonTextFirst}>{"Bang"}</Text>

          <Pressable
            android_ripple={{ color: "#ffcc66" }}
            onPress={() => setShow(true)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{"Me"}</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b1b1b",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  button: {
    backgroundColor: "#ffa31a",
    paddingHorizontal: 24,

    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#292929",
    fontWeight: "600",
    fontSize:100
  },
  buttonTextFirst: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 52,
  },
});
