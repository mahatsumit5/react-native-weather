import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setModalVisible } from "../redux/weather.slice";

const CustomModal = () => {
  const dispatch = useDispatch();
  const { modalVisible } = useSelector((store) => store.weatherData);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Search />
            <Pressable
              style={[styles.button]}
              onPress={() => dispatch(setModalVisible(false))}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={{ padding: 9, borderRadius: 11, backgroundColor: "#C9BBD405" }}
        onPress={() => dispatch(setModalVisible(true))}
      >
        <FontAwesome size={18} name="search" color={"#C9BBD4"} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  modalView: {
    marginTop: 30,
    backgroundColor: "#0F1E38",
    borderRadius: 20,
    padding: 20,
    height: 800,

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    backgroundColor: "#54309D",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CustomModal;
