import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import HeaderComponente from '../components/HeaderComponent/HeaderComponente';
import { useGetImageQuery } from '../services/FindDogAPi';

/**
 * Componente que muestra un mapa con una ubicación marcada y una imagen de la ubicación.
 * @param {Object} route - Objeto de ruta que contiene la ubicación.
 * @returns {JSX.Element} - Elemento de React que representa la pantalla del mapa.
 */
const MapaLoc = ({ route }) => {

  const { location } = route.params;

  const { data, isLoading, error, refetch } = useGetImageQuery();

  // Imagen predeterminada en caso de que no se pueda cargar una imagen específica.
  const defaultImage = "https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"

  return (
    <>
      <HeaderComponente title={"Mapa"} />
      <View style={styles.container}>
        <MapView
          pointerEvents={true}
          showsUserLocation={true}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            <View style={styles.markerContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: data ? data.image : defaultImage
                }}
              />
            </View>
          </Marker>
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    padding: 10,
    borderRadius: 50, // Cambiado a 50 para hacerlo más pequeño
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default MapaLoc;
