// WeatherDisplay.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

function getTimeFromDate(dateString) {
  // Crear un objeto Date desde la cadena
  const date = new Date(dateString);

  // Extraer la hora y minutos
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Formatear la hora
  return ` ${hours}:${minutes.toString().padStart(2, '0')}`;
}

const WeatherDisplay = ({ location, current }) => (
  <View style={tw`pt-4 flex justify-around flex-1 mb-2`}>
    <Text style={tw`text-white text-center text-2xl font-bold`}>
      {location?.name}, 
      <Text style={tw`text-lg font-semibold text-gray-300`}>
        {" " + location?.country}
      </Text>
    </Text>
    <View style={tw`flex-row justify-center`}>
      <Image source={{ uri: 'https:' + current?.condition?.icon }} style={tw`w-52 h-52`} />
    </View>
    <View style={tw`pb-4 space-y-2`}> 
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
        <Text style={tw`text-white font-semibold text-base`}>{` ${current.wind_kph} Km/h`}</Text>
      </View>
      <View style={tw`flex-row space-x-2 items-center`}>
        <Image source={require("../assets/icons/drop.png")} style={tw`h-6 w-6`} />
        <Text style={tw`text-white font-semibold text-base`}>{` ${current.humidity}%`}</Text>
      </View>
      <View style={tw`flex-row space-x-2 items-center`}>
        <Image source={require("../assets/icons/timeicon.png")} style={tw`h-6 w-6`} />
        <Text style={tw`text-white font-semibold text-base`}>{ getTimeFromDate(location.localtime) }</Text>
      </View>
    </View>          
  </View>
);

export default WeatherDisplay;