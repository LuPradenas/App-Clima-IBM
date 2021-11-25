import React from 'react';
import { View, ScrollView, StyleSheet, Image, Linking } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

//type CardsComponentsProps = {};

const Cards = (props) => {

  const {name, image, description, linkedin} = props;
  
  return (

        <View style={styles.container}>
          
          <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
 
              <Card.Image
                source={require(`../assets/img/${image}`)}
                style={{ height: 200 }}
                resizeMode="center"   // center o contain
              />

            <Text style={{ marginVertical: 10 }}>
              {description}
            </Text>

            <Button
              icon={
                <Icon
                  name="sc-linkedin"
                  type="evilicon"
                  color="#ffffff"
                  iconStyle={{ marginRight: 5 }}
                />
              }
              
              title="Contactar"
              onPress={() => Linking.openURL(linkedin)}
            />

          </Card>
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }

});

export default Cards;