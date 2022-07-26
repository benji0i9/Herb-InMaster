import * as React from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  AppRegistry,
} from 'react-native'
import { useState } from 'react';
// import Slider from '@react-native-community/slider'
import Slider from '@react-native-community/slider'


export default function InfoPage({ route, navigation }) {
  const arrow = require('../assets/backarrow.png')
  const Vector= require('../assets/Vector.png')
  const [sliderValue, setSliderValue] = useState(0)
  const [showRectangle, setShowRectangle] = useState(true)
  return (
    <View style={{ alignContent: 'center' }}>
      {/* Plant Name Display */}

      {/* Back Arrow */}
      <View style={{ flexDirection: 'row', padding: 22 }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{ top: 67, width: 20, height: -10, marginTop: -40 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              alignSelf: 'center',
              width: 35,
              height: 35,
              borderRadius: 5,
              top: -1,
            }}
            source={arrow}
          />
        </TouchableOpacity>
        <Text style={styles.Names}> {route.params.name} </Text>
      </View>
      <View style={showRectangle ? styles.RectangleShapeView : ''}>
        {/* Param Plant Image */}
        <Image
          style={{
            alignSelf: 'center',
            width: 300,
            height: 300,
            top: 40,
            left: -70,
          }}
          source={route.params.img}
        />
      </View>
      <View>
        <Text>Water Control</Text>
        <Image
          style={{
            // left:10,
            width: 50,
            height: 70,
            right: -30,
          }}
          source={Vector}
        />
  
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  contained: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContents: 'Center',
  },
  Names: {
    top: 16,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900',
  },
  RectangleShapeView: {
    //To make Rectangle Shape
    marginBottom: 20,
    width: 400,
    height: 400,
    backgroundColor: '#D3F1D5',
    borderRadius: 200,
    top:10,
    left:110,
    ...Platform.select({
      ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 1,    
      },
      android: {
          elevation: 10,
      },
      }),
   },
})
