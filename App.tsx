import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokemonListScreen from "./src/screen/pokemon-list-screen"
import MainScreen from "./src/screen/main-screen";
import AddOrEditScreen from "./src/screen/add-edit-screen";

export default function App() {
  return (
    <View >
      <Text>Open up App.tsx to start working on your app! Benny</Text>
      <AddOrEditScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
