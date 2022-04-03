import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const localRestaurant = [
  {
    name: 'BeachSide Bar',
    image_url:
      'https://images.unsplash.com/photo-1521369384758-87ae95880252?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    categories: ['cafe', 'restaurant'],
    price: '$$',
    review: '2000',
    rating: '4.5',
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    categories: ['cafe', 'restaurant'],
    price: '$$',
    review: '2000',
    rating: '3.5',
  },
  {
    name: 'Indian Grill',
    image_url:
      'https://images.unsplash.com/photo-1474898856510-884a2c0be546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGluZGlhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    categories: ['cafe', 'restaurant'],
    price: '$$',
    review: '2000',
    rating: '3.5',
  },
];

const RestaurantItem = () => {
  return (
    <>
      {localRestaurant.map((item, index) => (
        <TouchableOpacity activeOpacity={1} key={index}>
          <View style={styles.mainCard}>
            <RestaurantImage imageData={item.image_url} />
            <RestaurantInfo title={item.name} rating={item.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = ({imageData}) => (
  <>
    <Image
      source={{
        uri: imageData,
      }}
      style={styles.cardImage}
    />
    <TouchableOpacity style={styles.heartPosition}>
      <HeartIcon />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({title, rating}) => (
  <View style={styles.cardInfo}>
    <View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>30-35 min</Text>
    </View>
    <View style={styles.rating}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const HeartIcon = () => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M17.2324 3.90625C14.0625 3.90625 12.5 7.03125 12.5 7.03125C12.5 7.03125 10.9375 3.90625 7.76759 3.90625C5.19142 3.90625 3.15138 6.06152 3.12501 8.6333C3.0713 13.9717 7.35987 17.7681 12.0606 20.9585C12.1902 21.0467 12.3433 21.0938 12.5 21.0938C12.6568 21.0938 12.8099 21.0467 12.9395 20.9585C17.6397 17.7681 21.9282 13.9717 21.875 8.6333C21.8486 6.06152 19.8086 3.90625 17.2324 3.90625Z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: 180,
  },
  heartPosition: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  cardInfo: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 13,
    color: 'gray',
  },
  rating: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RestaurantItem;
