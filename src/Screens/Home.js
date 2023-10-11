import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../components/Card/Card';
import HeaderComponente from '../components/HeaderComponent/HeaderComponente';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { useGetDogsQuery } from '../services/FindDogAPi';

const Home = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQueryLocal] = useState('');

  // Obtener datos de Firebase usando useGetDogsQuery
  const { data, isLoading, isError } = useGetDogsQuery();

  const onChangeSearch = (query) => {
    setSearchQueryLocal(query);
  };
  
  const filteredDogs = data ? data.filter((dog) =>
        dog.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) : [];

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
  },
});

export default Home;
