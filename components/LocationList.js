// LocationList.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/solid';
import tw from 'twrnc';

const LocationList = ({ locations, handleLocation }) => (
  <View style={tw`absolute w-full bg-gray-300 top-16 rounded-3xl mt-10`}>
    {locations.map((loc, index) => {
      const showBorder = index + 1 !== locations.length;
      return (
        <TouchableOpacity 
          key={index} 
          style={tw`flex-row items-center border-0 p-3 px-4 mb-1 ${showBorder ? 'border-b-2 border-b-gray-400' : ''}`} 
          onPress={() => handleLocation(loc)}>
          <MapPinIcon size="20" color="gray" />
          <Text style={tw`text-black text-lg ml-2`}>{loc?.name}, {loc?.country}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default LocationList;