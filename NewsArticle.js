import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function NewsArticle({ route, navigation }) {
  const { item } = route.params;
  const [data, setData] = useState({});

  useEffect(() => {
    setData(item);
    console.log("hi");
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Published at {data.publishedAt}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Image
          style={styles.image}
          source={
            data.urlToImage === null
              ? require("./no-image-found.jpg")
              : { uri: `${data.urlToImage}` }
          }
        />
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.title}>
          by {data.author === null ? "(Author Not Found)" : data.author}
        </Text>
        <Text>Add full content here</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
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
