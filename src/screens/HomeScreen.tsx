import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 