import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomModal from "./Modal";
function Header() {
  const { deafaultweather } = useSelector((store) => store.weatherData);
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Pressable
        style={{ padding: 9, borderRadius: 11, backgroundColor: "#C9BBD405" }}
      >
        <FontAwesome size={18} name="align-center" color={"#C9BBD4"} />
      </Pressable>
      <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
        {deafaultweather.location?.name}, {deafaultweather.location?.country}
      </Text>

      <CustomModal />
    </View>
  );
}

export default Header;
