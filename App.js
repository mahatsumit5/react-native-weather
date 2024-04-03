import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import Main from "./components/main";
import { Image } from "expo-image";
export default function App() {
  return (
    <Provider store={store}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(20, 16, 41, 1)", "rgba(84, 48, 157, 0.8)"]}
        style={styles.container}
        end={[3, 0.8]}
      >
        <StatusBar style="inverted" />
        <SafeAreaView style={styles.container}>
          <Main />
        </SafeAreaView>
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
