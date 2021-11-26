import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";
import ListItem from "./ListItem";
import localidades from "../data/localidades.json";

const AddCityModal = ({ citiesList, setCityList, modalVisible, guardarCitiesStorage, handleModalClose }) => {
  const cityIdByName = new Map();
  const cityNames = localidades.localidades.map((city) => {
    cityIdByName.set(city.nombre.toLocaleLowerCase(), city.id)
    return city.nombre.toLocaleLowerCase();
  });
  const [citySearch, setCitySearch] = useState("");
  const [cityListJson, setcityListJson] = useState(cityNames);

  useEffect(() => {
    setcityListJson(
      cityNames
        .filter((stateName) =>
          citySearch !== ""
            ? stateName.includes(citySearch.toLowerCase())
            : true
        )
        .slice(0, 10)
    );
  }, [citySearch]);

  const handleCitySearchChange = (e) => {
    const input = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setCitySearch(input);
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={styles.modalContainer}
        onRequestClose={() => handleModalClose()}
      >
        <SafeAreaView style={styles.modalView}>
          <View style={styles.modalHeading}>
            <Text style={styles.modalTitle}>Agregar Ciudad </Text>
            <Pressable onPress={() => handleModalClose()}>
              <AntDesign
                name="close"
                size={24}
                color={COLORS.secondaryVariant}
              />
            </Pressable>
          </View>
          <View style={styles.modalBody}>
            <TextInput
              placeholder="Buscar ciudad.."
              style={styles.text}
              placeholderTextColor={COLORS.onPrimaryHint}
              value={citySearch}
              onChangeText={handleCitySearchChange}
            />
            <FlatList
              data={cityListJson}
              renderItem={({ item }) => (
                <ListItem
                  item={item}
                  setCityList={setCityList}
                  citiesList={citiesList}
                  guardarCitiesStorage={guardarCitiesStorage}
                  handleModalClose={() => handleModalClose()}
                />
              )}
              keyExtractor={(item) => {
                return cityIdByName.get(item)
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primaryVariant,
  },
  modalHeading: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.separator,
  },
  modalTitle: {
    fontSize: 24,
    textTransform: "uppercase",
    color: COLORS.onPrimaryHint,
  },
  modalBody: {
    flex: 1,
    marginTop: 30,
    width: "90%",
    paddingHorizontal: 10,
  },
  modalSearch: {
    height: 45,
    width: "100%",
    borderColor: COLORS.onPrimary,
    borderWidth: 1,
    color: COLORS.onPrimary,
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 5,
    borderRadius: 7,
    marginBottom: 10,
  },
  text: {
    color: COLORS.onPrimaryHint,
    height: 45,
    fontSize: 24,
  },
});

export default AddCityModal;
