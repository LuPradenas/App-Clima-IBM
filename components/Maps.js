import React, { useState } from 'react';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Maps(props) {
  
  const {lat, lon} = props;
  const {width, height} = Dimensions.get('window');

  
  const aspect_ratio = width / height;
  const LATITUDE = lat;
  const LONGITUDE = lon;
  const LATITUDE_DELTA = 0.1;    // 30 para mostrar todo el país.
  // cuando muestro un lugar de cerca tiene que ser 0.0922 aproximadamente
  const LONGITUDE_DELTA = LATITUDE_DELTA * aspect_ratio;
  
  const region = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        zoomEnabled = {true}
        initialRegion = {region}
        scrollEnabled = {true}
        pitchEnabled = {true}
        rotateEnabled = {true}
        showsUserLocation = {true}
        followsUserLocation = {true}
        >
      
      </MapView>
      
    </View>
  );
}

Maps.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 500,  //Dimensions.get('window').height,
  },
});