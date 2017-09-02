import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Link } from 'react-router-native';

const Dashboard = () => (
  <View>
    <Text>Dashboard</Text>
    <Link
      to="/"
      underlayColor='#f0f4f7'>
        <Text>Back to Home</Text>
    </Link>
  </View>
);

export default Dashboard;
