// Updated App.js
import React, { useState } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';
import LocationList from './components/LocationList';
import WeatherDisplay from './components/WeatherDisplay';
import DailyWeather from './components/DailyWeather';
import { fetchLocations, fetchWeatherForecast } from './api/weather';

export default function App() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

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

  const { current, location } = weather;

  return (
    <View style={tw`flex-1 relative`}>
      <Image source={require('./assets/images/bg.png')} style={tw`absolute h-full w-full`} blurRadius={70} />
      <SafeAreaView style={tw`flex flex-1`}>
        <Header showSearch={showSearch} toggleSearch={toggleSearch} handleSearch={handleSearch} />
        {locations.length > 0 && showSearch && <LocationList locations={locations} handleLocation={handleLocation} />}
        <WeatherDisplay location={location} current={current} />
        <DailyWeather />
      </SafeAreaView>
    </View>
  );
}