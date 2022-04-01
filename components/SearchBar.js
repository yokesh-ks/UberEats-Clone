import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Svg, {Path, Circle, Rect} from 'react-native-svg';

const SearchBar = () => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
            paddingHorizontal: 10,
          },
        }}
        renderLeftButton={() => {
          return <LocationIcon />;
        }}
        t
        renderRightButton={() => {
          return (
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                borderRadius: 30,
                alignItems: 'center',
                padding: 8,
              }}>
              <ClockIcon />
              <Text style={{marginLeft: 6}}>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const LocationIcon = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.148 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z"
      fill="black"
    />
  </Svg>
);

const ClockIcon = () => (
  <Svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="5.5" cy="5.5" r="5" fill="#4A4A4A" />
    <Rect x="5" y="2" width="0.75" height="4" rx="0.375" fill="white" />
    <Rect x="5" y="5.25" width="3.5" height="0.75" rx="0.375" fill="white" />
  </Svg>
);

export default SearchBar;
