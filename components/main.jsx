import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
  return (
    <ScrollView style={{ gap: 10, width: "100%" }}>
      <Header />
      <Temperature data={deafaultweather} />
      <Details data={deafaultweather} />
      <ForeCast data={deafaultweather?.forecast?.forecastday[0]} />
      <ForeCast data={deafaultweather?.forecast?.forecastday[1]} />
      <ForeCast data={deafaultweather?.forecast?.forecastday[2]} />
    </ScrollView>
  );
};

export default Main;

const Styles = StyleSheet.create({});
