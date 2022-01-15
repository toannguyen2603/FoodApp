import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home, OrderDelivery, Restaurant} from './src/screens';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'HomePage'}>
        <Stack.Screen name="HomePage" component={Tabs} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
