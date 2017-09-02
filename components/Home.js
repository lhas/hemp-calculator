import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';
import { withRouter } from 'react-router';

const handleStartNow = (history) => {
  history.push('/dashboard');
};

const Home = ({ history }) => (
  <View>
    <Button onPress={() => handleStartNow(history)} title="Start Now" />
  </View>
);

export default withRouter(Home);
