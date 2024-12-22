// DailyWeather.js
import React from 'react';
import { View, Text } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/outline';
import tw from 'twrnc';

const DailyWeather = () => (
  <View style={tw`mb-2 spaye-y-3`}>
    <View style={tw`flex-row items-center mx-5 space-x-2`}>
      <CalendarDaysIcon size="22" color="white" />
      <Text style={tw`text-white text-base`}>Tiempo diario</Text>
    </View>
  </View>
);

export default DailyWeather;