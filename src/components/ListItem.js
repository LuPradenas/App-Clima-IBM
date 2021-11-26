import React, { setState } from "react";
import { Text, StyleSheet, TouchableOpacity} from "react-native";
import { COLORS } from "../utils/colors";
import { EvilIcons } from "@expo/vector-icons";

const ListItem = ({ citiesList, setCityList, item, handleModalClose, guardarCitiesStorage}) => {
  const handleSelectCity = () => {
    
    if(!citiesList.includes(item)){   // verifico si la ciudad (item) ya fue agregada antes
      setCityList(newCity)
      guardarCitiesStorage(JSON.stringify(newCity))
    }
    handleModalClose();
  };

  const newCity = [...citiesList, item]

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleSelectCity(item)}>
      <EvilIcons name="location" size={24} color={COLORS.onPrimaryHint} />
      <Text style={{ color: COLORS.onPrimaryHint, fontSize: 17 }}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.onPrimaryHint,
    marginTop: 3,
    borderRadius: 4,
  },
});

export default ListItem;
