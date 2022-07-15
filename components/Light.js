import * as React from 'react'
import { Text, View, FlatList, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

export default function Light() {
  const [lightList, setLightList] = useState([
    //1
    { name: 'Lamp1', type: '1' },
    //2
    { name: 'Lamp2', type: '2' },
    //3
    { name: 'Lamp3', type: '3' },
    //4
    { name: 'Lamp4', type: '4' },
    //5
    { name: 'Lamp5', type: '5' },
    //6
    { name: 'Lamp6', type: '6' },
    //7
    { name: 'Lamp7', type: '7' },
    //8
    { name: 'Lamp8', type: '8' },
    //9
    { name: 'Lamp9', type: '9' },
    //10
    { name: 'Lamp10', type: '10' },
  ])

  const [storage, setStorage] = useState({
    name: '',
    type: '',
  })

  const updateInfo = (newInfo) => {
    return setStorage

    //   const [counter, setCounter] = useState (0);
    //  setCounter(counter + 1)
    //  setCounter(500)
  }

  return (
    <View>
      <FlatList
        data={lightList}
        renderItem={({ item }) => (
          <>
            <Text> Name: {item.name} </Text>
            <Text> Type: {item.type} </Text>
            <Text style={styles.textContainer}> This stays the same </Text>
          </>
        )}
      />
      <TextInput placeholder='enter new lamp name here' />
      <TextInput placeholder='enter a new lamp type here' />
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
  textContainer: {
    backgroundColor: 'red',
    margin: 40,
  },
})
