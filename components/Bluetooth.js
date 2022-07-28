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
  const arrow = require('../assets/backarrow.png')

  const [showRectangle, setShowRectangle] = useState(true)

  const [devices, setDevices] = useState([
    {
      Name: 'HerbIn Device',
    },
    {
      Name: 'HerbIn Device 2',
    },
  ])
  const changeShape = (shape) => {
    setShowRectangle(shape == 'Rectangle')
  }

  return (
    <View style={{ flexDirection: 'column' }}>
      {/* <View style={showRectangle ? styles.RectangleShapeView1: ''}>
        <TouchableHighlight>
          <Text
           
          >
            Done
          </Text>
        </TouchableHighlight>
      </View> */}
      <Text style={styles.text}>Plant App & Device</Text>
      <Text style={styles.text2}>
        Connect your device to the HerbIn app {'\n'}
        from the selection below:
      </Text>
      <View>
        <FlatList
          style={{ top: 90 }}
          data={devices}
          renderItem={({ item }) => (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderColor: 'black',
                  borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    left: 2,
                    fontSize: 22,
                    // marginTop:80,
                    color: '#767676',
                    textAlign: 'center',
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
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 8,
                      color: '#48A2E3',
                    }}
                  >
                    {' '}
                    Connect
                  </Text>
                </TouchableHighlight>
              </View>
            </>
          )}
        />
        <View style={showRectangle ? styles.RectangleShapeView1 : ''}>
          <TouchableHighlight>
            <Text style={styles.text3}>Done</Text>
          </TouchableHighlight>
        </View>
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
    bottom: -40,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 22,
  },
  text2: {
    bottom: -70,
    left: 40,
    fontSize: 18,
    fontWeight: '200',
  },
  text3:{
    textAlign:'center',
    color:'#fff',
    marginTop:'550',
  },
  RectangleShapeView1: {
    //To make Rectangle Shape
    marginBottom: 20,
    width: 232,
    height: 70,
    backgroundColor: '#000000',
    borderRadius:20,
    alignContent:'center',
    alignSelf: 'center',
    marginTop:250,
  },
})
