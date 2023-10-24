import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import { colors } from '../theme/colors'
import HeaderComponente from '../components/HeaderComponent/HeaderComponente'
import { getDatabase, ref, get, orderByKey, limitToLast, query, set  } from "firebase/database";
import { FontAwesome } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'

/**
 * Componente que permite a los usuarios reportar una mascota perdida, proporcionando información sobre la mascota.
 * @returns {JSX.Element} - Elemento de React que representa la pantalla de reportar mascota perdida.
 */
const ReporterDog = () => {
    //Definir navigation para mover al usuario entre vistas
    const navigation = useNavigation();
    //Obtener base de datos de firebase
    const database = getDatabase();
    //Crear un estado inicial con null para guardar la imagen en base 64
    const [image, putImage] = useState(null)
    //crear una referencia para guardar el ultimo id que se obtiene en la funcion
    const lastIdRef = useRef(0);
    //Crear un objeto inicial para reemplazar por los datos ingresado por el usuario
    const [lostDog, setLostDog] = useState({
        id: '',
        name: '',
        site: '',
        descripcion_dog: '',
        img: '',
        date: new Date().toLocaleDateString()
    })

    /* Funcion que obtiene el ultimo id de firebase para gestionar y mantener una secuencia de 1 en 1 (ID) en la base de datos */
    useEffect(() => {
        const getLastId = async () => {
            try {
                const dataRef = ref(database, 'dogs');
                const querySnap = await get(query(dataRef, orderByKey(), limitToLast(1)));
        
                if (querySnap.exists()) {
                    const lastKey = Object.keys(querySnap.val())[0];
                    lastIdRef.current = parseInt(lastKey, 10);
                } else {
                    console.log("No se encontraron elementos en la base de datos.");
                    lastIdRef.current = 0;
                }
            } catch (error) {
                console.log(error);
                lastIdRef.current = 0;
            }
        };
        getLastId();
    }, []);

    // Crear un nuevo objeto con la información de la mascota perdida.
    const newLostDog = { ...lostDog, id: lastIdRef.current + 1 }

    // Manejar cambios en los campos de entrada.
    const handleInputChange = (name, value) => {
        setLostDog({
            ...newLostDog,
            [name]: value
        });
    };

    // Seleccionar una imagen de la galería y agregarla al objeto para guardar
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
          base64: true
        });
    
        if (!result.canceled) {
          await putImage({
            image: `data:image/jpeg;base64,${result.assets[0].base64}`
          });
        }
      }

    // Navegar de regreso a la pantalla principal. y limpiar el formulario de reporte
    const navigateUser = () => {
        setLostDog({
            id: '',
            name: '',
            site: '',
            descripcion_dog: '',
            img: '',
            date: new Date().toLocaleDateString()
        })
        navigation.navigate("Home")
    }

    // Enviar el formulario con la información de la mascota perdida.
    const handleSubmitForm = async () => {
        try {
            set(ref(database, 'dogs/' + (lastIdRef.current + 1)), {
                id: (lastIdRef.current + 1),
                name: lostDog.name,
                site: lostDog.site,
                description_dog: lostDog.descripcion_dog,
                img: image.image,
                date: lostDog.date,
            })

            Alert.alert('Registro exitoso', 'Haremos lo posible por encontrarlo', [
                { text: 'OK', onPress: () => navigateUser() }
            ]);
        } catch (error) {
            console.error("Error al guardar los datos de la mascota perdida:", error);
        }
    };

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
                    value={lostDog.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
                <TextInput
                    label="Última vez vista"
                    style={styles.input}
                    activeUnderlineColor={colors.rose}
                    value={lostDog.site}
                    onChangeText={(text) => handleInputChange('site', text)}
                />
                <TextInput
                    label="Descripción de la mascota"
                    style={styles.input}
                    multiline
                    numberOfLines={4}
                    activeUnderlineColor={colors.rose}
                    value={lostDog.descripcion_dog}
                    onChangeText={(text) => handleInputChange('descripcion_dog', text)}
                />
                <Pressable onPress={() => pickImage()} style={styles.btn}>
                    <Text style={styles.textoBTN}><FontAwesome name="file-photo-o" size={22} color="white" /> Abrir Galería</Text>
                </Pressable>
                <Button mode="contained" style={styles.button} onPress={handleSubmitForm}>
                    Enviar
                </Button>
            </SafeAreaView>
        </>
    )
}

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
    textContainer: {
        alignItems: 'center'
    },
    text: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: '700'
    },
    btn: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.AzulFuerte,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: colors.AzulFuerte,
        marginBottom: 20,
    },
    textoBTN: {
        fontSize: 17,
        color: colors.white
    }
})

export default ReporterDog;
