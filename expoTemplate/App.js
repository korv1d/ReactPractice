import { StatusBar } from "expo-status-bar";
import React from "react";
//view acts as 'div' from web-world
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App executed");

  return (
    <View style={styles.container}>
      <Text>I-Immediate refresh? Impossible!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// View is platform-independent
// View -> UIView (iOS)
// View -> AndroidView (Android, no points for guessing that one)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
