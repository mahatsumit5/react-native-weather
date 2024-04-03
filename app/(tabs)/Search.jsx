import { View, Text } from "react-native";
import Search from "../../components/Search";

export default function page() {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        padding: 10,
      }}
    >
      <Search />
    </View>
  );
}
