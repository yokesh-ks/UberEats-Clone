import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapperContainer}>
      <View style={styles.headerContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: '#eee',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 15,
  },
});

export default Home;
