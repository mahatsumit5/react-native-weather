import { View, Text } from "react-native";
import Search from "../../components/Search";
import { useEffect } from "react";
import { handleSearch } from "../../axios";
import { useDispatch } from "react-redux";
import Home from "../../components/Home";

export default function page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleSearch());
  }, []);
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        padding: 15,
        gap: 10,
      }}
    >
      <Home />
    </View>
  );
}
