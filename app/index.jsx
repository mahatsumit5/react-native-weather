import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";

export default function Page() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#000", "rgba(59, 13, 150, 0.8)", "#000"]}
      style={styles.container}
      end={[2, 1]}
    >
      <StatusBar style="inverted" />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
