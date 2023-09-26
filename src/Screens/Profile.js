import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from '../theme/colors';
import HeaderComponente from '../components/HeaderComponent/HeaderComponente';

const Profile = () => {
  const name = "MAX"
  return (
    <>
      <HeaderComponente title={"Perfil"}/>
    <SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image style={styles.image} source={{
          uri: "https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
        }} />
        <View>
          <Text style={{fontSize: 30}}>{name}</Text>
        </View>
        <View>
          <Pressable style={styles.btn} onPress={() => alert('Abrir camera')}>
            <Text style={styles.textoBTN}><Entypo name="camera" size={24} color="white" /> Abrir camara</Text>
          </Pressable>
          <Pressable onPress={() => alert('Abrir Galeria')} style={styles.btn}>
            <Text style={styles.textoBTN}><FontAwesome name="file-photo-o" size={24} color="white" /> Abrir camara</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => alert('Abrir Mapa')}>
            <Text style={styles.textoBTN}><FontAwesome name="map-marker" size={24} color="white" /> Abrir mapa</Text>
          </Pressable>
      </View>
      </View>
    </SafeAreaView>
    </>
  )
}

export default Profile

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
    alignContent: 'center',
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