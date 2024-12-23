// App.js
import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';
import LocationList from './components/LocationList';
import WeatherDisplay from './components/WeatherDisplay';
import DailyWeather from './components/DailyWeather';
import * as Location from 'expo-location';
import { fetchLocations, fetchWeatherForecast } from './api/weather';

export default function App() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // Solicitar permisos
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permiso denegado', 'Se necesita acceso a la ubicación para obtener el clima.');
          setLoading(false);
          return;
        }

        // Obtener ubicación actual
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        // Llamar a la API de clima
        const weatherData = await fetchWeatherForecast({
          cityName: `${latitude},${longitude}`,
          days: '7',
        });

        setWeather(weatherData);
      } catch (error) {
        console.error('Error al obtener la ubicación o el clima:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleLocation = (loc) => {
    toggleSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7',
    }).then((data) => setWeather(data));
  };

  const handleSearch = (search) => {
    if (search && search.length > 2)
      fetchLocations({ cityName: search }).then((data) => setLocations(data));
  };

  const { current, location } = weather || {};

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-gray-200`}>
        <Text style={tw`text-lg font-bold`}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 relative`}>
      <Image source={require('./assets/images/bg.png')} style={tw`absolute h-full w-full`} blurRadius={70} />
      <SafeAreaView style={tw`flex flex-1`}>
        <View style={tw`mx-4 relative z-50`}>
        <Header showSearch={showSearch} toggleSearch={toggleSearch} handleSearch={handleSearch} />
        {locations.length > 0 && showSearch && <LocationList locations={locations} handleLocation={handleLocation} />}
        </View>
        {weather ? (
          <WeatherDisplay location={location} current={current} />
        ) : (
          <Text style={tw`text-center text-lg text-gray-500 mt-10`}>
            No se encontraron datos del clima.
          </Text>
        )}
        {/* <DailyWeather /> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
});