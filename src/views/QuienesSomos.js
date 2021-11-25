import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import { Tab, Text, TabView, Button, Icon } from 'react-native-elements';
import Cards from '../components/Cards';

const QuienesSomos = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Nosotros"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: '', type: 'ionicon', color: 'white' }} 
        />
        <Tab.Item
          title="Solución"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: '', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Diseño"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: '', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%' }}>
          <ScrollView>
            <Cards
              name="IARA BAYA VARGAS"
              image='foto-iara.webp'
              description={`Edad: 24 años.\nCiudad: Capital Federal, Buenos Aires.\nOcupación: Programadora Web Fullstack.`}
              linkedin="https://www.linkedin.com/in/iarabayavargas/"
            />

            <Cards
              name="ALEJANDRO CALGARO"
              image='foto-ale.webp'
              description={`Edad: 25 años.\nCiudad: Chajari, Entre Ríos.\nOcupación: Analista en Informática Aplicada y \nEstudiante de Ingeniería en informática.`}
              linkedin="https://www.linkedin.com/in/alejandrocalgaro/"
            />

            <Cards
              name="LUCIANA PRADENAS"
              image='foto-luciana.webp'
              description={`Edad: 23.\nCiudad: Capital Federal, Buenos Aires.\nOcupación: Estudiante de Analista en Sistemas.`}
              linkedin="https://www.linkedin.com/in/luciana-pradenas/"
            />

            <Cards
              name="PABLO RIVERA"
              image='foto-pablo.webp'
              description={`Edad: 36 años.\nCiudad: Buenos Aires, CABA.\nOcupación: Profesor de Educación Física y \nProgramador FullStack.`}
              linkedin="https://www.linkedin.com/in/pablo-rivera-414833216/"
            />
          </ScrollView>
        </TabView.Item>

        <TabView.Item style={styles.solution}>
        <Text style={styles.solution_text}>
          Para desarrollar la aplicación hemos comenzado analizando los requisitos solicitados, luego se realizaron 
          los wireframes y mockups para las distintas pantallas y, una vez finalizado eso, nos hemos dividido las tareas entre los integrantes del grupo para desarrollar la aplicación por partes, en distintas ramas dentro del repositorio.
          {'\n'}{'\n'}Cada una semana aproximadamente nos hemos reunido para ver los avances, unir código y resolver problemas. Y una vez terminada cada una de las ramas, se realizó la unión entre ellas y la corrección de conflictos para finalizar la aplicación.</Text>
        </TabView.Item>

        <TabView.Item style={styles.design}>
          <>
            <Text style={styles.desing_text}>
              Se realizó el wireframe de cada pantalla en Balsamiq y luego los mockups en Figma.
              Todo esto se puede ver en el Readme del repositorio de GitHub.
            </Text>
            
            <View style={styles.desing_figma}>
              <Button 
                icon={
                  <Icon
                    name="figma"
                    type="feather"
                    color="#ffffff"
                    iconStyle={{ marginRight: 5 }}
                  />
                }
                title="Figma"
                onPress={() => Linking.openURL('https://www.figma.com/file/PS6r0dRUXhkTrHi43OYEG5/App-Clima-IBM')}
              />
            </View>

            <Button
              icon={
                <Icon
                  name="logo-github"
                  type="ionicon"
                  color="#ffffff"
                  iconStyle={{ marginRight: 5 }}
                />
              }
              title="Github"
              onPress={() => Linking.openURL('https://github.com/LuPradenas/App-Clima-IBM/tree/developer')}
            />
          </>
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  solution: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  solution_text: {
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20
  },

  design: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  desing_text: {
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20
  },

  desing_figma: {
    marginBottom: 20
  }
});

export default QuienesSomos;