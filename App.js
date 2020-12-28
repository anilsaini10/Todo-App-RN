import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Components/main';

export default function App() {
  return (

    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <h1 justifyContent="center">Todo App</h1>
      <Main />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    // fontSize: 200
  },

});
