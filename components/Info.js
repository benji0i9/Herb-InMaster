import * as React from 'react'
import { Text, View, FlatList, StyleSheet, TextInput, TouchableHighlight, } from 'react-native'
import { useState } from 'react'
// import { TouchableHighlight } from 'react-native-gesture-handler'

export default function InfoPage({ route, navigation }) {
  // const name = 'angel'
  // console.log(name)
  return (
    <View style={{ alignContent: 'center' }}>
      <Text style={styles.Names}> {route.params.name} </Text>

      <TouchableHighlight
        style={{ top: 50 }}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.Go}> GO back! </Text>
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
  Names: {
    top:16,
    fontSize:30,
    textAlign: 'center',
    fontWeight: '900',
  },
  Go:{
  top:-56,
  }

})
