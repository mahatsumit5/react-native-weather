import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { handleSearch } from "../axios";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Temperature from "./Temperature";
import Details from "./Detaails";
import ForeCast from "./ForeCast";
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleSearch());
  }, []);
  const { deafaultweather } = useSelector((store) => store.weatherData);
  console.log(deafaultweather);
  return (
    <View style={{ gap: 10 }}>
      <Header />
      <Temperature data={deafaultweather} />
      <Details data={deafaultweather} />
      <ForeCast />
    </View>
  );
};

export default Main;

const Styles = StyleSheet.create({});
