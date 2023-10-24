import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from '../theme/colors';
import * as Location from 'expo-location';

/**
 * Componente para mostrar detalles de un perro perdido y permitir compartir ubicación.
 * @param {Object} route - La ruta que contiene la información del perro perdido y navegación.
 * @returns {JSX.Element} - Elemento de React que representa la pantalla de detalles del perro.
 */
const DogDetail = ({ route }) => {
  
    const { navigation, card } = route.params;
    const [location, setLocation] = useState(null);

    /**
     * Función para obtener las coordenadas de la ubicación actual y navegar a la vista del mapa.
     */
    const getCoords = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert('Permiso no concedido');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      navigation.navigate("map", { location: location });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => {navigation.goBack()}}>
                <View style={styles.arrowBack}>
                    <FontAwesome name="arrow-circle-o-left" size={40} color={colors.AzulRey} />
                </View>
            </Pressable>
        <Card>
          <Card.Cover style={styles.img} source={{ uri: card.img }} />
          <Card.Content>
            <View style={styles.containerText}>
                <Text style={styles.title}>{card.name}</Text>
                <Text style={styles.date}>{card.date}</Text>
            </View>
            <Text style={styles.description}>{card.description_dog}</Text>
            <Text style={styles.textLastView}>Ultima vez vista: <Text style={styles.fontWeight}>{card.site}</Text></Text>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <Button icon="paw" mode="contained" style={styles.btn} onPress={() => getCoords()}>
              Compartir ubicación
            </Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      marginVertical: 8,
    },
    fontWeight: {
        fontWeight: 'bold'
    },
    textLastView:{
        fontSize: 14
    },
    actions: {
      justifyContent: 'flex-end',
    },
    img:{
        height: 400,
        resizeMode: 'cover',
    },
    date:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerText:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    arrowBack: {
        marginBottom: 20
    },
    btn:{
        backgroundColor: colors.rose
    }
});

export default DogDetail;
