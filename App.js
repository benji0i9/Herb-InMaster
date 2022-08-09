import * as React from 'react'

import { Text, View, StyleSheet, Image, useState } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Water from './components/Water.js'
import Light from './components/Light.js'
import Plus from './components/Plus.js'
import { createStackNavigator } from '@react-navigation/stack'
import InfoPage from './components/Info.js'
import Bluetooth from './components/Bluetooth.js'
import { Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    QuickSand: require('./assets/fonts/Quicksand.ttf'),
    QuickSandLight: require('./assets/fonts/QuicksandLight.ttf'),
    QuickSandBold: require('./assets/fonts/QuicksandBold.ttf'),
    QuickSandMedium: require('./assets/fonts/QuicksandMedium.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const PlantIcon = require('./assets/planta2.png')

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='My Garden'
      screenOptions={{ tabBarActiveTintColor: '#D3F1D5' }}
    >
      <Tab.Screen
        name='Bluetooth'
        component={Bluetooth}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='bluetooth' size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='My Garden'
        component={Water}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name='Mic'
        component={Light}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={PlantIcon} style={{ width: 50, height: 50 }} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Home'
    >
      <Stack.Screen name='Add' component={Plus} />
      <Stack.Screen name='Home' component={MyTabs} />
      <Stack.Screen name='Info' component={InfoPage} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  contained: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContents: 'Center',
  },
})
