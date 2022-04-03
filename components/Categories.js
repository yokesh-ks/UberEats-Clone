import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-Up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

function Categories() {
  return (
    <View style={styles.menu}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemText}>{item?.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,
  },
  item: {
    marginRight: 30,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 13,
    fontWeight: '900',
  },
});

export default Categories;
