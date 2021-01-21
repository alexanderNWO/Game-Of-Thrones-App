import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HousesScreen from './HousesScreen';
import HousesDetailScreen from '../houseDetail/HousesDetailScreen';
import Colors from '../../res/colors';

const Stack = createStackNavigator();

const HousesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowOpacity: 0,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="Houses" component={HousesScreen} />
      <Stack.Screen name="HouseDetail" component={HousesDetailScreen} />
    </Stack.Navigator>
  );
};

export default HousesStack;
