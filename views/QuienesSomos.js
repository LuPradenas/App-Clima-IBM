import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Tab, Text, TabView } from 'react-native-elements';
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
              name="IARA BAYA"
              image='foto-iara.webp'
              description="Esta es la descripción"
              linkedin="https://www.linkedin.com/in/"
            />

            <Cards
              name="ALEJANDRO CALGARO"
              image='foto-ale.webp'
              description={`Edad: 25 años.
Ciudad: Chajari, Entre Ríos.
Analista en Informática Aplicada y Estudiante de Ingeniería en informática.`}
              linkedin="https://www.linkedin.com/in/alejandrocalgaro/"
            />

            <Cards
              name="LUCIANA PRADENAS"
              image='foto-luciana.webp'
              description="Esta es la descripción"
              linkedin="https://www.linkedin.com/in/"
            />

            <Cards
              name="PABLO RIVERA"
              image='foto-pablo.webp'
              description="Esta es la descripción"
              linkedin="https://www.linkedin.com/in/"
            />
          </ScrollView>
        </TabView.Item>

        <TabView.Item style={styles.solution}>
          <Text>Acá iría la explicación de la solución</Text>
        </TabView.Item>

        <TabView.Item style={styles.design}>
          <>
            <Text>Se realizó el wireframe de cada pantalla en Balsamiq y luego los mockups en Figma.</Text>
            <Text>Acá iría un botón que nos lleve al link a Balsamiq y otro al link de Figma</Text>
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

  design: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default QuienesSomos;