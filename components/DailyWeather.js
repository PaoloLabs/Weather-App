// DailyWeather.js
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import tw from "twrnc";

const DailyWeather = ({ forecast }) => {
  if (!forecast || !forecast.forecastday) {
    return (
      <Text style={tw`text-center text-gray-500`}>
        No hay datos disponibles para el clima diario.
      </Text>
    );
  }

  return (
    <View style={tw`mt-5`}>
      <Text style={tw`text-xl font-bold text-white text-center mb-4`}>
        Pronóstico Diario
      </Text>
      <FlatList
        data={forecast.forecastday}
        keyExtractor={(item) => item.date}
        nestedScrollEnabled // Permitir scroll anidado
        renderItem={({ item }) => (
          <View
            style={tw`flex-row justify-between items-center mx-4 mb-4 bg-gray-800 p-4 rounded-lg`}
          >
            <Text style={tw`text-white`}>{item.date}</Text>
            <Image
              source={{ uri: `https:${item.day.condition.icon}` }}
              style={styles.icon}
            />
            <Text style={tw`w-20 text-white`}>{item.day.condition.text}</Text>
            <Text style={tw`text-white`}>{item.day.avgtemp_c}°C</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});

export default DailyWeather;
