import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  async function getWeather() {
    const url = "https://open-weather13.p.rapidapi.com/city/landon";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "248de94f44mshef0e6efb0ba66fbp1abdafjsn2422e43de92f",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="grey" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
