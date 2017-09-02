import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <StatusBar hidden={true} />
          <Text style={styles.logo}>
            Hemp Calculator
          </Text>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard} />
        </View>
      </NativeRouter>
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
