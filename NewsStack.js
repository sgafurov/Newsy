import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";

export default function NewsStack() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=03df756f2234440cac2aa0b9688b3ca4"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
        console.log(json.articles);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>by {item.author}</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: item.urlToImage }}>
      </Image>
    </View>
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
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 3,
  },
});
