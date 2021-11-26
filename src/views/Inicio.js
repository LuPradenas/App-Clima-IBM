import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';

const Inicio = () => {
    return (
        <Animatable.View animation="fadeIn" style={styles.container}>
            <Image 
                style={styles.img_home}
                source={require('../assets/img/img_home.png')}
            />

            <Text style={styles.titulo}>Descripcion</Text>
            <Text style={styles.descripcion}>Podrías utilizar esta app para guardar un listado de ciudades
                                            que te interesen y observar tanto su ubicación en el mapa como 
                                            el clima al momento de realizar la consulta.</Text>

            <Text style={styles.titulo}>Uso</Text>
            <Text style={styles.descripcion}>Debajo encontrarás una barra de navegación con las distintas pantallas 
                                            en las cuales podrás navegar dentro de la app, ya sea para conocer
                                            información sobre nosotros y la app, para registrar tu listado de 
                                            ciudades o para consultar el mapa y estado del clima en la ciudad 
                                            que desees. Al cargar tus ciudades, podrás presionar sobre ellas para
                                            consultar el clima actualizado al momento y con más detalles.</Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },

    img_home: {
        width: 128,
        height: 128,
        marginBottom: 15
    },

    titulo: {
        fontSize: 18,
        marginBottom: 5
    },

    descripcion: {
        fontSize: 15,
        marginBottom: 25,
        marginHorizontal: 20,
        textAlign: 'center'
    }

});

export default Inicio
