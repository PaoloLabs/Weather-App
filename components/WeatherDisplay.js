// WeatherDisplay.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const WeatherDisplay = ({ location, current }) => (
  <View style={tw`flex justify-around flex-1 mb-2`}>
    <Text style={tw`text-white text-center text-2xl font-bold`}>
      {location?.name}, 
      <Text style={tw`text-lg font-semibold text-gray-300`}>
        {" " + location?.country}
      </Text>
    </Text>
    <View style={tw`flex-row justify-center`}>
      <Image source={{ uri: 'https:' + current?.condition?.icon }} style={tw`w-52 h-52`} />
    </View>
    <View style={tw`space-y-2`}> 
      <Text style={tw`text-center text-6xl text-white ml-5`}>
        {current?.temp_c} &#176;
      </Text>
      <Text style={tw`text-center text-white ml-5 tracking-widest`}>
        {current?.condition?.text}
      </Text>
    </View>
    <View style={tw`flex-row justify-between mx-4`}>
      <View style={tw`flex-row space-x-2 items-center`}>
        <Image source={require("../assets/icons/wind.png")} style={tw`h-6 w-6`} />
        <Text style={tw`text-white font-semibold text-base`}>25Km</Text>
      </View>
      <View style={tw`flex-row space-x-2 items-center`}>
        <Image source={require("../assets/icons/drop.png")} style={tw`h-6 w-6`} />
        <Text style={tw`text-white font-semibold text-base`}>34%</Text>
      </View>
      <View style={tw`flex-row space-x-2 items-center`}>
        <Image source={require("../assets/icons/sun.png")} style={tw`h-6 w-6`} />
        <Text style={tw`text-white font-semibold text-base`}>5:30am</Text>
      </View>
    </View>          
  </View>
);

export default WeatherDisplay;