import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../components/Card/Card';
import { selectFilteredDogs, setSearchQuery  } from '../redux/homeSlice';
import HeaderComponente from '../components/HeaderComponent/HeaderComponente';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';

const Home = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQueryLocal] = useState('');

  const filteredDogs = useSelector(selectFilteredDogs);
  
  const dispatch = useDispatch();

  const dogs  = useSelector((state) => state.homeSlice.allDogs);

  const onChangeSearch = (query) => {
    setSearchQueryLocal(query);
    dispatch(setSearchQuery(query));
  };

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
        {(searchQuery === '' ? dogs : filteredDogs).map((card, index) => (
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
    backgroundColor: colors.white
  },
});

export default Home;
