import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function cycle() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/cycle.png')} 
        style={styles.gif} 
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 300,
    height: 100,
  },
});

export default cycle;