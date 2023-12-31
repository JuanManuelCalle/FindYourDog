import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { colors } from '../../theme/colors';

/* Componente CardComponent: muestra un "card" con información de una mascota perdida. */
const CardComponent = ({ card }) => {
  const navigation = useNavigation();

  /* La función onPress del Pressable navega a la vista "dogdetail" y pasa la información de la mascota. */
  return (
    <Pressable onPress={() => { navigation.navigate("dogdetail", { navigation: navigation, card: card }) }}>
      <Card key={card.id} style={styles.card}>
        <Card.Content>
          <Title>{card.name}</Title>
          <Paragraph>{card.description_dog}</Paragraph>
        </Card.Content>
      </Card>
    </Pressable>
  );
}

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: colors.white
  },
});
