import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../views/Home';
import QuienesSomos from '../views/QuienesSomos';
import Clima from '../views/Clima';
import Ciudades from '../views/Ciudades'

const HomeScreen = () => {
  return (
    <Home />
  );
}

const QuienesSomosScreen = () => {
  return (
    <QuienesSomos />
  );
}

const ClimaScreen = () => {
  return (
    <Clima />
  );
}

const CiudadesScreen = () => {
  return (
    <Ciudades />
  );
}

const Tab = createMaterialBottomTabNavigator();

const BarraNavegacion = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ciudades"
      activeColor="#fff"
      labelStyle={{ fontSize: 12 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Clima"
        component={ClimaScreen}
        options={{
          tabBarLabel: 'Clima',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="white-balance-sunny" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ciudades"
        component={CiudadesScreen}
        options={{
          tabBarLabel: 'Buscador',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="city" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Quienes somos"
        component={QuienesSomosScreen}
        options={{
          tabBarLabel: 'Quienes somos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BarraNavegacion;