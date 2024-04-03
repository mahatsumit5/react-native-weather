import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Image } from "expo-image";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

function Temperature({ data }) {
  return (
    <View
      style={{
        marginTop: 10,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "200" }}>
        {data.current?.condition?.text}
      </Text>
      <Text style={{ color: "white", fontSize: 130, fontWeight: "200" }}>
        {data.current?.feelslike_c}
      </Text>

      <Text style={{ color: "white", fontSize: 20, fontWeight: "200" }}>
        {new Date(data.location?.localtime)?.toLocaleTimeString()}
      </Text>
    </View>
  );
}

export default Temperature;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    width: "auto",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
