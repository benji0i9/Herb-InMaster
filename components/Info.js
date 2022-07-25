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
} from 'react-native'
import { useState } from 'react'
// import { TouchableHighlight } from 'react-native-gesture-handler'

export default function InfoPage({ route, navigation }) {
  const arrow = require('../assets/backarrow.png')
  const [showRectangle, setShowRectangle] = useState(true)
  return (
    <View style={showRectangle ? styles.RectangleShapeView : ''}>
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

        {/* Param Plant Image */}
        <Image
          style={{
            alignSelf: 'center',
            width: 300,
            height: 300,
            top: 100,
            left: 100,
          }}
          source={route.params.img}
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
    width: 300,
    height: 220,
    backgroundColor: '#D3F1D5',
    borderRadius: 19,
    
  },
})
