// Header.js
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import tw from 'twrnc';

const Header = ({ showSearch, toggleSearch, handleSearch }) => (
  <View style={tw`mx-4 relative z-50`}>
    <View style={tw`flex-row items-center h-12 bg-neutral-300 rounded-full mt-11 flex justify-between items-center`}>
      {showSearch && (
        <TextInput 
          onChangeText={handleSearch}
          placeholder="Buscar ciudad" 
          placeholderTextColor="gray"
          style={tw`text-black pl-6 h-10 flex-1 text-base`}
        />
      )}
      <TouchableOpacity 
        style={tw`rounded-full p-1 m-1 bg-white flex justify-center items-center`} 
        onPress={() => toggleSearch(!showSearch)}>
        <MagnifyingGlassIcon size="25" color="black" />
      </TouchableOpacity>
    </View>
  </View>
);

export default Header;