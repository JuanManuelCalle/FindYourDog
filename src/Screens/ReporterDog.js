import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import { colors } from '../theme/colors'
import HeaderComponente from '../components/HeaderComponent/HeaderComponente'
import { usePostDogMutation } from '../services/FindDogAPi'
import { app, databaseRef } from '../firebase/firebaseAuth'

const ReporterDog = () => {
    const [lostDog, setLostDog] = useState({
        nombreMascota: '',
        lugar: '',
        descripcion: '',
        fechaHoy: new Date().toLocaleDateString()
    })

    const [PostDog, result] = usePostDogMutation()

    const handleInputChange = (name, value) => {
        setLostDog({
            ...lostDog,
            [name]: value
        });
    };

    const handleSubmitForm = async () => {
        const resultado = await PostDog({
            ...lostDog
        });
        console.log(resultado);
    }
  return (
   <>
    <HeaderComponente title={"Mascota Perdida"} />
    <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Registrar mascota perdida</Text>
        </View>
            <TextInput
                label="Nombre de la mascota"
                style={styles.input}
                activeUnderlineColor={colors.rose}
                value={lostDog.nombreMascota}
                onChangeText={(text) => handleInputChange('nombreMascota', text)}
            />
            <TextInput
                label="Ulima vez vista"
                style={styles.input}
                activeUnderlineColor={colors.rose}
                value={lostDog.lugar}
                onChangeText={(text) => handleInputChange('lugar', text)}
            />
            <TextInput
                label="Descripcion de la mascota"
                style={styles.input}
                multiline
                numberOfLines={4}
                activeUnderlineColor={colors.rose}
                value={lostDog.descripcion}
                onChangeText={(text) => handleInputChange('descripcion', text)}
            />
            <Button mode="contained" style={styles.button} onPress={handleSubmitForm}>
                Enviar
            </Button>
    </SafeAreaView>
   </>
  )
}

export default ReporterDog

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
      input: {
        marginBottom: 16,
        backgroundColor: colors.white,
        
    },
      button: {
        marginTop: 16,
        backgroundColor: colors.AzulRey
    },
    textContainer:{
        alignItems: 'center'
    },
    text:{
        marginBottom: 15,
        fontSize: 20,
        fontWeight: '700'
    }
})