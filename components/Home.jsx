import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Home = () => {
  const { deafaultweather } = useSelector((store) => store.weatherData);
  return (
    <>
      <View style={Styles.header}>
        <Text style={Styles.text}>Today's Weather</Text>
      </View>
      <View style={Styles.main}>
        <Text style={{ ...Styles.text, fontSize: 30 }}>
          {deafaultweather.location?.name}
        </Text>
        <Text style={{ ...Styles.text, fontSize: 48 }}>
          {deafaultweather.current?.feelslike_c}
        </Text>
      </View>
    </>
  );
};

export default Home;
const Styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#2c3e50aa",
    padding: 10,
    borderRadius: 10,
    paddingVertical: 15,
    textAlign: "center",
  },
  text: {
    color: "white",
  },
  main: {
    width: "100%",
    backgroundColor: "#2c3e50aa",
    padding: 10,
    borderRadius: 10,
    paddingVertical: 15,
    textAlign: "center",
  },
});
