import * as React from 'react'
import { Text, View,  StyleSheet, TouchableHighlight } from 'react-native'
import { useState } from 'react'

export default function Plus({ route, navigation }) {
 
  return (
    <View style={{ alignContent: 'center' }}>
      {/* <Text> {route.params.name} </Text> */}

      <TouchableHighlight
        style={{ top: 50 }}
        onPress={() => navigation.goBack()}
      >
        <Text
            style={{
              alignSelf: 'center',
              width: 160,
              height: 160,
              top: -10,
            }}
        > GO back! </Text>
      </TouchableHighlight>


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
})

