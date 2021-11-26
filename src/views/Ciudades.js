import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";
import AddCityModal from "../components/AddCityModal";
import CardList from "../components/CardList";
//import * as Location from "expo-location";

import AsyncStorage from '@react-native-async-storage/async-storage'

const Ciudades = (props) => {
  const [citiesList, setCityList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  //const [location, setLocation] = useState(null);
  const { navigation } = props;

  
  useEffect(() => {
    const obtenerCitiesStorage = async () => {
      try {
          const citiesStorage = await AsyncStorage.getItem('cities');
          if(citiesStorage) {
            //setCityList([...citiesList, citiesStorage])
            setCityList(JSON.parse(citiesStorage))
          }
          else {
            setCityList([]) // si no hay nada guardado, dejo la lista vacia porque sino se llena de datos "basura"
          }
      } catch (error) {
          console.log("Error obteniendo datos");
          console.log(error)
      }
  }
    obtenerCitiesStorage();
  }, []);

  // Almacena las ciudades en el storage
  const guardarCitiesStorage = async (citiesJSON) => {
    try {
      // se tiene que guardar así: ["nombre1", "nombre2"] para que funcione bien
      await AsyncStorage.setItem('cities', [citiesJSON]);
      console.log("Guardando")
      //setCityList([...citiesList, citiesJSON]);
    } catch (error) {
        console.log(error);
    }
  }

  // Elimina las ciudades del state y vuelve a guardar en el storage para actualizarlo
  const eliminarCity = e => {
    try {
      const citiesFiltradas = citiesList.filter((city) => city !== e);
      setCityList( citiesFiltradas );
      //guardarCitiesStorage(citiesFiltradas);
      guardarCitiesStorage(JSON.stringify(citiesFiltradas));
      console.log("Eliminado")
    } catch (error) {
      console.log("error eliminando");
    }
  }
  
  const handleModalClose = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <AddCityModal
          //handleAddCity={handleAddCity}
          citiesList={citiesList}
          setCityList={setCityList}
          guardarCitiesStorage={guardarCitiesStorage}
          modalVisible={modalVisible}
          handleModalClose={handleModalClose}
        />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addCityContainer}
        >
          <Text style={styles.addCityText}>Agregar Ciudad</Text>
          <Ionicons name="add" size={20} color={COLORS.white}></Ionicons>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        {citiesList.length === 0 && (
          <Text
            style={{
              color: COLORS.onPrimaryHint,
              fontSize: 15,
              textTransform: "uppercase",
              marginTop: "15%",
            }}
          >
            AGREGUE CIUDADES PARA MOSTRAR EL CLIMA.
          </Text>
        )}
        <FlatList
          style={styles.cityList}
          data={citiesList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardList navigation={navigation} city={item} eliminarCity={eliminarCity} />}
          keyExtractor={({ item }) => item}
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
    color: COLORS.white,
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
