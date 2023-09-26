import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../theme/colors'
import { FontAwesome } from '@expo/vector-icons'; 

const HeaderComponente = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title} <FontAwesome name="paw" size={24} color="white" /> </Text>
    </View>
  )
}

export default HeaderComponente

const styles = StyleSheet.create({
    container: {
        height: 85,
        width: "100%",
        alignItems: "center", //Vertical
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