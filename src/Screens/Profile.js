import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from '../theme/colors';
import HeaderComponente from '../components/HeaderComponent/HeaderComponente';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useGetImageQuery, usePutImageMutation } from '../services/FindDogAPi';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Componente de perfil que permite a los usuarios ver su imagen de perfil, cambiarla, abrir la cámara, abrir la galería, ver su ubicación en el mapa y cerrar sesión.
 * @returns {JSX.Element} - Elemento de React que representa la pantalla de perfil.
 */
const Profile = () => {
  const navigation = useNavigation();
  const [putImage, result] = usePutImageMutation();
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();

  const name = "MAX"

  const {data, isLoading, error, refetch } = useGetImageQuery()

  // Abre la galería para seleccionar una imagen.
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,4],
      quality: 1,
      base64: true
    });

    if(!result.canceled){
      await  putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`
      });
      refetch()
    }
  }

  // Abre la cámara para tomar una foto.
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if(permission.granted === false){
      alert('No has concedido los permisos necesarios');
      return
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true
      })

      if(!result.canceled)
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
      refetch();
    }
  }

  // Obtiene la ubicación actual y la muestra en el mapa.
  const getCoords = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== "granted"){
      alert('Permiso no concedido');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    navigation.navigate("map", {location: location})
  }

  // Maneja el cierre de sesión.
  const handleLogout = async () => {
    try {
      dispatch(clearUser());
      await AsyncStorage.removeItem("userEmail");
      navigation.navigate("auth");
    } catch (error) {
      console.log(error);
    }
  }

  // Muestra un cuadro de diálogo de confirmación antes de cerrar la sesión.
  const onLogout = () => {
    Alert.alert('Cerrar sesión', '¿Realmente desea cerrar la sesión?',[
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Sí',
        onPress: () => handleLogout()
      }
    ])
  }

  const defaultImage = "https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"

  return (
    <>
      <HeaderComponente title={"Perfil"}/>
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image style={styles.image} source={{
          uri: data ? data.image : defaultImage
        }} />
        <View>
          <Text style={{fontSize: 30}}>{name}</Text>
        </View>
        <View>
          <Pressable style={styles.btn} onPress={() => openCamera()}>
            <Text style={styles.textoBTN}><Entypo name="camera" size={24} color="white" /> Abrir cámara</Text>
          </Pressable>
          <Pressable onPress={() => pickImage()} style={styles.btn}>
            <Text style={styles.textoBTN}><FontAwesome name="file-photo-o" size={24} color="white" /> Abrir Galería</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => getCoords()}>
            <Text style={styles.textoBTN}><FontAwesome name="map-marker" size={24} color="white" /> Abrir mapa</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => onLogout()}>
            <Text style={styles.textoBTN}><AntDesign name="logout" size={24} color="white" /> Cerrar sesión</Text>
          </Pressable>
      </View>
      </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10
  },
  btn: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: colors.rose,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: colors.rose,
    marginBottom: 20,
  },
  textoBTN:{
    fontSize: 20,
    color: colors.white
  }
})

export default Profile;
