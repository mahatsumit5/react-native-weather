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
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/weather.slice";
const Search = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(cities);
  const { loading } = useSelector((store) => store.weatherData);
  function handleTextChange(e) {
    setCity(e);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      const filterData = cities.filter((item) =>
        item.name.toLowerCase().includes(city.toLowerCase())
      );
      setData(filterData);
    }, 100);

    return () => clearTimeout();
  }, [city]);

  function searchWeather() {
    dispatch(setLoading(true));
    dispatch(handleSearch(city));
  }

  const Cities = ({ item }) => {
    return (
      <View>
        <Pressable onPress={() => setCity(item.name)} style={Styles.Pressable}>
          <Text style={Styles.cities}>{item.name}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <View style={Styles.container}>
        <TextInput
          style={{
            backgroundColor: "#AEB6BF",
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
        />
        <Pressable
          style={Styles.button}
          onPress={searchWeather}
          disabled={!city || loading}
        >
          <Text style={Styles.text}>{loading ? "Loading..." : "Search"}</Text>
        </Pressable>
      </View>

      {data.length ? (
        <FlatList
          data={data}
          renderItem={Cities}
          keyExtractor={(item) => item.id}
          style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
        />
      ) : (
        <Text
          style={{
            color: "white",
            marginBottom: 20,
            marginTop: 30,
            fontSize: 20,
          }}
        >
          No Cities Found
        </Text>
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
    backgroundColor: "#54309D",
    borderRadius: 10,
  },
  cities: {
    color: "white",
    fontSize: 18,
  },
  Pressable: {
    backgroundColor: "#19263D",
    marginBottom: 15,
    borderRadius: 12,
    width: "100%",
    width: 360,
    padding: 12,
  },
});
