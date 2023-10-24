import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../../theme/colors'

/**
 * Componente Spinner
 * 
 * Este componente muestra un indicador de carga (spinner) mientras se espera que se complete alguna operación.
 */
const Spinner = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={colors.rose}/>
    </View>
  )
}

export default Spinner

// Estilos del componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
})
