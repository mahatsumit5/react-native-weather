import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
function ForeCast({ data }) {
  if (data?.date) {
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "white",
              marginTop: 20,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            {new Date(data.date).toDateString()}
          </Text>
          <Text
            style={{
              color: "grey",
              marginTop: 20,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            {data.day.condition.text}
          </Text>
        </View>
        <FlatList
          data={data.hour || []}
          keyExtractor={(item) => item.time}
          renderItem={Item}
          style={{ marginTop: 15 }}
          horizontal
          initialNumToRender={3}
        />
      </View>
    );
  } else {
    <Text>Loading....</Text>;
  }
}

export default ForeCast;
const Item = ({ item }) => {
  return (
    <View style={Style.content}>
      <Text style={Style.title}>
        {new Date(item.time).toLocaleTimeString("en-AU")}
      </Text>
      <View style={{ width: "100%", height: 80 }}>
        <Image
          style={Style.image}
          source={`https:${item?.condition.icon}`}
          contentFit="contain"
          //   transition={1000}
        />
      </View>
      <Text style={Style.title}>{item.feelslike_c}</Text>
      <Text style={Style.subtitle}>{item?.condition.text}</Text>
    </View>
  );
};
const Style = StyleSheet.create({
  container: { gap: 10, marginTop: 20 },
  content: {
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    backgroundColor: "#1c022c",
    gap: 10,
    alignItems: "center",
    width: 170,

    elevation: 4,
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
  image: {
    flex: 1,
    width: "100%",
  },
});
