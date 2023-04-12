import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEWSY</Text>
      <Text>Insert Time and Date Here</Text>
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
    borderWidth: 3,
  },
});
