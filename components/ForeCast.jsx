import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
function ForeCast() {
  return (
    <View>
      <Text
        style={{
          color: "white",
          marginTop: 20,
          textAlign: "center",
          fontSize: 18,
        }}
      >
        ForeCast
      </Text>
      <View style={Style.container}>
        <View style={Style.content}>
          <FontAwesome5 name="umbrella" size={44} color="#6D74CB" />
          <Text style={Style.title}>Details</Text>
          <Text style={Style.subtitle}>Precipitation</Text>
        </View>
        <View style={Style.content}>
          <Ionicons name="water" size={44} color="#559CD1" />
          <Text style={Style.title}>Details</Text>
          <Text style={Style.subtitle}>Humidity</Text>
        </View>
        <View style={Style.content}>
          <FontAwesome6 name="wind" size={44} color="#C1C3D4" />
          <Text style={Style.title}>Details</Text>
          <Text style={Style.subtitle}>Wind Speed</Text>
        </View>
      </View>
    </View>
  );
}

export default ForeCast;

const Style = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,

    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    padding: 15,
    borderRadius: 15,

    backgroundColor: "#1c022c",
    gap: 10,
    alignItems: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "200",
  },
  title: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 14,
  },
});
