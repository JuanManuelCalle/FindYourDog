import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebase_auth } from '../firebase/firebaseAuth';
import { setIdToken, setUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Componente de inicio de sesión de la aplicación "FindDog".
 * @returns {JSX.Element} - Elemento de React que representa la pantalla de inicio de sesión.
 */
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  /**
   * Maneja el proceso de inicio de sesión del usuario.
   */
  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(firebase_auth, email, password);

      // Almacena el correo electrónico del usuario en el almacenamiento local.
      AsyncStorage.setItem('userEmail', response.user.email);

      // Actualiza el estado global con la información del usuario.
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
    } catch (error) {
      console.log('Error en el inicio de sesión: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://i.ibb.co/frdCWFC/FinDog.jpg',
          }}
        />
      </View>
      <Text style={styles.title}>Inicio de Sesión</Text>
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
      <View>
        <Text onPress={() => navigation.navigate('register')}>
          No tienes cuenta? <Text style={{ fontWeight: 'bold' }}>Registrarme</Text>
        </Text>
      </View>
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Iniciar Sesión
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
    backgroundColor: colors.white,
  },
  button: {
    marginTop: 8,
    backgroundColor: colors.rose,
  },
  img: {
    width: 90,
    height: 90,
  },
  containerImg: {
    alignItems: 'center',
  },
});

export default Login;
