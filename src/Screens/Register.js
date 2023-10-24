import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { colors } from '../theme/colors';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { firebase_auth } from '../firebase/firebaseAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

/**
 * Componente de registro que permite a los usuarios crear una cuenta proporcionando su correo electrónico y contraseña.
 * @returns {JSX.Element} - Elemento de React que representa la pantalla de registro.
 */
const Register = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // Función que maneja el registro de usuarios.
    const handleRegister = async () => {
      try {
        const response = await createUserWithEmailAndPassword(
          firebase_auth,
          email,
          password
        )
        navigation.navigate("login");
      }catch(error){
        console.log("Error en registro: ", error);
      }
    }

    return (
        <View style={styles.container}>
          <View style={styles.containerImg}>
            <Image
            style={styles.img}
              source={{uri: "https://i.ibb.co/frdCWFC/FinDog.jpg"}}
            />
          </View>          
          <Text style={styles.title}>Registrarme</Text>
          <TextInput
            label="Correo Electrónico"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            activeUnderlineColor={colors.AzulFuerte}
          />
          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
            activeUnderlineColor={colors.AzulFuerte}
          />
          <View><Text onPress={() => {navigation.navigate("login")}}>¿Tienes una cuenta? <Text style={{fontWeight: 'bold'}}>Iniciar Sesión</Text></Text></View>
          <Button mode="contained" onPress={handleRegister} style={styles.button}>
            Registrarme
          </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      marginBottom: 16,
      backgroundColor: colors.white
    },
    button: {
      marginTop: 8,
      backgroundColor: colors.rose,
    },
    img: {
      width: 90,
      height: 90
    },
    containerImg: {
      alignItems: 'center'
    }
  });

export default Register;
