import React, { useState, useEffect } from "react";
import { View, StyleSheet,Text,TouchableOpacity, SafeAreaView, FlatList,Modal } from "react-native";
import {  Card} from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";
import AddCityModal from '../components/AddCityModal';
import * as Location from "expo-location";

 const Ciudades = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
       
      }
    })();
  }, []);
 
  const handleModalClose = () => {
    setModalVisible(!modalVisible);
  };
 
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        {/* Add City Modal */}
        <AddCityModal
          modalVisible={modalVisible}
          handleModalClose={handleModalClose}
        />
        {/* Add new City Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addCityContainer} >
          <Text style={styles.addCityText}>Agregar Ciudad</Text>
          <Ionicons name="add" size={20} color={COLORS.white}></Ionicons>
        </TouchableOpacity>
        {/* Separator */}
        <View style={styles.separator}></View>
        {/* Flatlist for cities weather */}
          <Text
            style={{
              color: COLORS.onPrimaryHint,
              fontSize: 15,
              textTransform: "uppercase",
              marginTop: "15%",
            }} >
            AGREGUE CIUDADES PARA MOSTRAR EL CLIMA.
          </Text>
    
        <FlatList
          style={styles.cityList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              cityDetails={item}
              onPress={() => navigation.navigate("CityWeather", item)}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryVariant,
    alignItems: "center",
  },
  safeContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  addCityText: {
    color: COLORS.onPrimary,
    fontSize: 20,
    marginRight: 10,
  },
  addCityContainer: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    backgroundColor: COLORS.secondaryVariant,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    width: "80%",
    height: 1,
    borderWidth: 1,
    borderColor: COLORS.separator,
    marginVertical: 20,
  },
  cityList: {
    width: "90%",
  },
});

export default Ciudades;