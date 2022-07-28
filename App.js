import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Water from './components/Water.js'
import Light from './components/Light.js'
import Plus from './components/Plus.js'
import { createStackNavigator } from '@react-navigation/stack'
import InfoPage from './components/Info.js'
import Bluetooth from './components/Bluetooth'
import { Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName='My Garden'
    tabBarOptions={{ 
      showLabel: false, 
      activeTintColor: "#B0E0B3"
      }}>
      <Tab.Screen
        name='Bluetooth'
        component={Bluetooth}
        options={{
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='bluetooth'
              color={color}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name='My Garden'
        component={Water}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name='Mic'
        component={Light}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='microphone'
              color={color}
              size={35}
            />
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
      initialRouteName = 'Home'
>
      <Stack.Screen name= 'Add' component={Plus}/>
      <Stack.Screen name='Home' component={MyTabs} />
      <Stack.Screen name='Info' component={InfoPage} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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
