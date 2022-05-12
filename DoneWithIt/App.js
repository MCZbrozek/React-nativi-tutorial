import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View } from 'react-native';


export default function App() {
 

  return (
    <View 
    style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row", // horizontal axis because direction is set to row
      justifyContent: "center", 
      alignItems: "center", // align items along the secodary axis (vertical)
      alignContent: "center", // determines align of align content when wrapping is enabled
      // flexWrap: "wrap",
    }} >
      <View style={{
        backgroundColor: "dodgerblue",
        flexBasis: 100, // width or height property
        // width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      }} />
      {/* <View style={{
        backgroundColor: "grey",
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "greenyellow",
        width: 100,
        height: 100,
      }} /> */}
    </View>


   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },
// });
