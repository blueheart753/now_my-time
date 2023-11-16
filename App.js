import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './View/homeLayout';
import Second_page from './View/Second_page';

export default function App() {
  return <Home />;
}

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Second_page">
        <Stack.Screen name="Second_page" component={Second_page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigator };
