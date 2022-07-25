import * as React from 'react'
import { Text, View,TouchableHighlight, StyleSheet,TouchableOpacity,Image} from 'react-native'
import { useState } from 'react'


export default function Bluetooth() {
  const arrow = require('../assets/backarrow.png')
  return (

    <View>
      <TouchableOpacity
            activeOpacity={1}
            style={{ top: 67, width:20, height: -10, marginTop:-40,}}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{
                alignSelf: 'center',
                width: 35,
                height: 35,
                borderRadius: 5,
              }}
              source={arrow}
            />
</TouchableOpacity>
      <>
        <Text> work in progress </Text>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  contained: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContents: 'Center',
  }
})
