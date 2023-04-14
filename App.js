import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./Navbar";
import NewsList from "./NewsList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsArticle from "./NewsArticle";

export default function App() {
  const Stack = createNativeStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="NewsArticle" component={NewsArticle} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Navbar />
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
