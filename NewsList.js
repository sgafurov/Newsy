import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

export default function NewsList({ navigation }) {
  const Stack = createNativeStackNavigator();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=03df756f2234440cac2aa0b9688b3ca4"
      )
      .then((response) => {
        setData(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("NewsArticle", { item: item });
        console.log("View clicked!");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Published at {item.publishedAt}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          style={styles.image}
          source={
            item.urlToImage === null
              ? require("./no-image-found.jpg")
              : { uri: `${item.urlToImage}` }
          }
        />
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.title}>
          by {item.author === null ? "(Author Not Found)" : item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
    padding: 5,
    // flexDirection: "row",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontWeight: "normal",
  },
  image: {
    width: 100,
    height: 100,
  },
});
