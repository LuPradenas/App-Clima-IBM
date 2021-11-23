import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Maps from './Maps';
import { FAB } from "react-native-paper";

const ModalMaps = ({weatherData}) => {
  if(Object.keys(weatherData).length === 0) return null;

  const {lat, lon} = weatherData.coord;
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Maps 
              lat = {lat}
              lon = {lon}
            />
            <FAB
              style={styles.fab}
              small
              icon="close-circle"
              onPress={() => setModalVisible(!modalVisible)}
              label='Cerrar Mapa'
            />
          </View>
        </View>
      </Modal>
      
      <FAB
        style={styles.fab}
        small
        icon="earth"
        onPress={() => setModalVisible(true)}
        label='Ver mapa'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  fab:{
    backgroundColor: '#0071d4',
    marginTop:5,
    marginBottom:10
  }
});

export default ModalMaps;