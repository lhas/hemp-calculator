import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.logo}>
          Hemp Calculator
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  }
});
