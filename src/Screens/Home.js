import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { useGetDogsQuery } from '../services/FindDogAPi';
import { useEffect } from 'react';
import Spinner from '../components/Spinner/Spinner';
import CardComponent from '../components/Card/Card';
import HeaderComponente from '../components/HeaderComponent/HeaderComponente';

/**
 * Componente de la pantalla principal de la aplicación "FindDog".
 * @returns {JSX.Element} - Elemento de React que representa la pantalla de inicio.
 */
const Home = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQueryLocal] = useState('');

  // Obtiene datos de perros perdidos desde la API.
  const { data, isLoading, isError, refetch } = useGetDogsQuery();

  const onChangeSearch = (query) => {
    setSearchQueryLocal(query);
  };

  // Recarga los datos al activarse.
  useEffect(() => {
    refetch();
  })

  let filteredDogs;

  if (isLoading) {
    return <Spinner />;
  } else {
    // Filtra los perros por nombre.
    filteredDogs = data ? data.filter((dog) =>
      dog.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
  }

  return (
    <>
      <HeaderComponente title={"Home"} />
      <SafeAreaView style={styles.container}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
        />
        <ScrollView>
          {filteredDogs.map((card, index) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    marginBottom: 16,
    backgroundColor: colors.white,
  }
});

export default Home;
