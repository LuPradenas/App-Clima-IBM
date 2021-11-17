import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Tab, Text, TabView } from 'react-native-elements';
import Cards from '../components/Cards';


import { Linking } from 'react-native';

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
              description={`Edad: 25 años.Ciudad: Chajari, Entre Ríos.Analista en Informática Aplicada y Estudiante de Ingeniería en informática.`}
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
              description={`Edad: 36 años.Ciudad: Buenos Aires, CABA.Profesor de Educación Física y Programador FullStack.`}
              linkedin="https://www.linkedin.com/in/pablo-rivera-414833216/"
            />
          </ScrollView>
        </TabView.Item>

        <TabView.Item style={styles.solution}>
          <Text>Esta solución fue desarrollada, como proyecto grupal final, para ser presentada en "Curso de especialización en desarrollo mobile - Codo a Codo | IBM Skillsbuild".</Text>
        </TabView.Item>

        <TabView.Item style={styles.design}>
        
            <Text>El wireframe de cada pantalla  de esta solucíón fue desarrollada en Balsamiq y mockups en Figma  </Text>
            <Button
        title="Balsamiq"
        onPress={() =>  Linking.openURL('https://balsamiq.com/')}

        />
        

      
          <Button
        title="Figma"
        onPress={() => Linking.openURL('https://www.figma.com/')}
        
      
          />
          
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
