import * as React from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { useState } from 'react'

export default function Bluetooth() {
  const backarrow = require('../assets/arrow.png')
  const [showRectangle, setShowRectangle] = useState(true)
  const [devices, setDevices] = useState([
    {
      Name: 'HerbIn Device',
      index: 0,
    },
    {
      Name: 'HerbIn Device 2',
      index: 1,
    },
  ])

  const checkIndexEven = (index) => {
    return index % 2 === 0
  }

  const changeShape = (shape) => {
    setShowRectangle(shape === 'Rectangle')
  }

  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text}>Plant App & Device</Text>
      <Text style={styles.text2}>
        Connect your device to the HerbIn app {'\n'}
        from the selection below
      </Text>
      <View>
        <FlatList
          style={{ marginTop: 40 }}
          data={devices}
          renderItem={({ item }) => (
            <>
              <View
                style={[
                  styles.textBorder,
                  { borderBottomWidth: checkIndexEven(item.index) ? 0 : 1 },
                ]}
              >
                <Text
                  style={{
                    fontSize: 22,
                    color: '#767676',
                    alignSelf: 'center',
                    fontFamily: 'QuickSandMedium',
                  }}
                >
                  {item.Name}
                </Text>
                <TouchableHighlight
                  onPress={() => navigation.navigate('Info', item)}
                  style={{
                    width: 60,
                    height: 30,
                    marginRight: 30,
                    alignSelf: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#48A2E3',
                      fontFamily: 'QuickSandBold',
                    }}
                  >
                    Connect
                  </Text>
                </TouchableHighlight>
              </View>
            </>
          )}
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
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'QuickSandBold',
  },
  text2: {
    marginTop: 64,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'QuickSandLight',
  },

  RectangleShapeView1: {
    //To make Rectangle Shape
    marginBottom: 20,
    width: 232,
    height: 70,
    backgroundColor: '#000000',
    borderRadius: 20,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 250,
  },
  textBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderTopWidth: 1,
    height: 65,
  },
})
