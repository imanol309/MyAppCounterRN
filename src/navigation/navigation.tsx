import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CounterScreen from '../screen/CounterScreen';
import BlogScreen from '../screen/BlogScreen';

const Stack = createStackNavigator();

function NavigatorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="Blog" component={BlogScreen} />
    </Stack.Navigator>
  );
}

export default NavigatorStack;
