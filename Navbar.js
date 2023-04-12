import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("./newsy-logo.png")}
      />
      <Text style={styles.title}>NEWSY</Text>
      <Text>{new Date().toLocaleString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "red",
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 1,
  },
});
