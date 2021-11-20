import React, { useState }  from 'react'
import { Text, TextInput, View, StyleSheet,Modal,SafeAreaView,  Pressable,FlatList,} from 'react-native';
  import { AntDesign } from "@expo/vector-icons";
import { COLORS } from '../utils/colors';

const Search = ({ modalVisible, handleModalClose }) => {
    const [city,setCity] = useState('')
    const [cities,setCities] = useState([])
    const fetchCities = (text)=>{
        setCity(text)
        fetch("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=durg&locationType=city&format=json")
        .then(item=>item.json())
        .then(cityData=>{
            setCities(cityData.RESULTS.slice(0,9))
            console.log(cityData.location.address)
        })
    
    }

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
            <AntDesign name="close" size={24} color={COLORS.secondaryVariant} />
          </Pressable>
        </View>
        <View style={styles.modalBody}>
          <TextInput
            placeholder="Buscar ciudad.."
            style={styles.text}
            placeholderTextColor={COLORS.onPrimaryHint}
            value={city}
            onChangeText={(text)=>fetchCities(text)}
          />

        <FlatList
        data={cities}
        renderItem={({item})=>{
            return(
                <Card 
                 style={{margin:2,padding:12}}
                 onPress={()=>listClick(item.name)}
                 handleModalClose={() => handleModalClose()}
                >
                <Text>{item.name}</Text>
                </Card>
            )
        }}
        keyExtractor={item=>item.name}
        />
        </View>
      </SafeAreaView>
    </Modal>
        </>

     );
}

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
    text:{
      color:COLORS.onPrimaryHint,
      height: 45,
      fontSize: 24,
    }

});


export default Search;







