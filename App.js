import React from 'react';
import Image from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HousesStack from 'cryptoTracker/src/components/houses/HousesStack';
import FavoritesStack from 'cryptoTracker/src/components/favorites/FavoritesStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from 'cryptoTracker/src/res/colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: Colors.blackPearl,
          },
        }}>
        <Tabs.Screen
          name="Houses"
          component={HousesStack}
          /*
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('cryptoTracker/src/assets/bank.png')}
              />
            ),
          }}
          */
        />
        <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          /*
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('cryptoTracker/src/assets/star.png')}
              />
            ),
          }}
          */
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
