import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../theme/colors'
import { FontAwesome } from '@expo/vector-icons'; 

/**
 * Componente HeaderComponente
 * 
 * Este componente representa el encabezado de la aplicación. Muestra un título personalizado por vista y un ícono.
 */
const HeaderComponente = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title} <FontAwesome name="paw" size={24} color="white" /> </Text>
    </View>
  )
}

export default HeaderComponente

// Estilos del componente
const styles = StyleSheet.create({
    container: {
        height: 85,
        width: "100%",
        alignItems: "center", //Centra en vertical
        justifyContent: "center",
        backgroundColor: colors.rose
    },
    headerText: {
        fontSize: 25,
        fontWeight: "600",
        color: colors.white,
        marginTop: 30
    }
})
