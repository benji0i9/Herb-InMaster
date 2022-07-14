import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Water from './components/Water.js';
import  Light from './components/Light.js'
import { createStackNavigator } from '@react-navigation/stack';
import InfoPage from './components/Info.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Garden" component={ Water } />
      <Tab.Screen name="Lamp" component={ Light } />
    </Tab.Navigator>
  );
}

// function InfoPage() {
//   return(
//     <>
//       <Text> More information on the plants </Text>
//     </>
//   )
// }
function MyStack() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name = "Home" component = { MyTabs } />
      <Stack.Screen name = "Info" component = { InfoPage } />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      {/* <MyTabs/> */}
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
contained: {
 flex: 1,
 backgroundColor: "#fff",
 alignItems: "center",
 justifyContents:'Center',
}

});
