import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import { colors } from '../theme/colors'
import HeaderComponente from '../components/HeaderComponent/HeaderComponente'

const ReporterDog = () => {
  return (
   <>
    <HeaderComponente title={"Mascota Perdida"} />
    <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Registrar mascota perdida</Text>
        </View>
            <TextInput
                label="Nombre"
                style={styles.input}
                activeUnderlineColor={colors.rose}
            />
            <TextInput
                label="Email"
                style={styles.input}
                activeUnderlineColor={colors.rose}
            />
            <TextInput
                label="Mensaje"
                style={styles.input}
                multiline
                numberOfLines={4}
                activeUnderlineColor={colors.rose}
            />
            <Button mode="contained" style={styles.button} onPress={() => {alert('Enviado')}}>
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