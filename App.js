import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import Main from "./components/main";
export default function App() {
  return (
    <Provider store={store}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0, 5, 6, 1)", "rgba(59, 13, 150, 0.8)"]}
        style={styles.container}
        end={[3, 0.8]}
      >
        <StatusBar style="dark" />
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
    padding: 20,
  },
});
