import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";
import { cities } from "../cities";
import { handleSearch } from "../axios";
const Search = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(cities);
  const [display, setDisplay] = useState(false);
  function handleTextChange(e) {
    setCity(e);
  }

  useEffect(() => {
    setTimeout(() => {
      const filterData = cities.filter((item) =>
        item.name.toLowerCase().includes(city.toLowerCase())
      );
      setData(filterData);
    }, 100);

    return () => clearTimeout();
  }, [city]);

  return (
    <>
      <View style={Styles.container}>
        <TextInput
          style={{
            backgroundColor: "white",
            width: 250,
            borderRadius: 10,
            height: 50,
            padding: 10,
            flex: 1,
          }}
          placeholder="Enter a city name"
          keyboardType="default"
          onChangeText={handleTextChange}
          value={city}
          onFocus={() => setDisplay(true)}
          onPointerLeave={() => setDisplay(false)}
        />
        <Pressable
          style={Styles.button}
          onPress={() => {
            handleSearch(city);
          }}
          disabled={!city}
        >
          <Text style={Styles.text}>Search</Text>
        </Pressable>
      </View>
      {display && (
        <ScrollView style={Styles.cities}>
          {data.length ? (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Pressable onPress={() => setCity(item.name)}>
                  <Text
                    style={{
                      marginBottom: 20,
                      padding: 10,
                      borderBottomColor: "black",
                      fontSize: 18,
                    }}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text>No Cities Found</Text>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Search;

const Styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  button: {
    height: 50,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    borderRadius: 10,
  },
  cities: {
    backgroundColor: "#fafafa",
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,

    overflow: "scroll",
    gap: 20,
  },
});
