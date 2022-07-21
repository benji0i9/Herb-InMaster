import * as React from 'react'
import { Text, View, FlatList, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import { useState } from 'react'
// import { TouchableHighlight } from 'react-native-gesture-handler'

export default function InfoPage({ route, navigation }) {
  // const name = 'angel'
  // console.log(name)
  return (
    <View style={{ alignContent: 'center' }}>
      <Text> {route.params.name} </Text>

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

      {/* <Image
        style={{
          alignSelf: 'center',
          width: 160,
          height: 160,
          top: -10,
        }}
        source={route.params.img}
      /> */}
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
