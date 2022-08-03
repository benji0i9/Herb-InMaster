import * as React from 'react'
import { useFonts } from 'expo-font'

import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { useState } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { CurrentRenderContext } from '@react-navigation/native'

export default function LightPage({ navigation }) {
  const letter = require('../assets/letter.png')
  const planta = require('../assets/planta.png')
  const musicIcon = require('../assets/Group.png')
  const yt = require('../assets/yt.png')
  const info = require('../assets/info.png')
  const circle = require ('../assets/circle.png')


  // fonts
  // const [loaded] = useFonts({
  //   what: require('../assets/fonts/Quicksand.ttf'),
  // })

  const [datalist, setPlantList] = useState([
    //1
    {
      name: 'Monthly ',
      img: require('../assets/planta.png'),
      price: '$3.99',
    },

    {
      name: '6 Months',
      img: require('../assets/planta.png'),
      price: '$19.99',
    },

    {
      name: 'Yearly',
      img: require('../assets/planta.png'),
      price: '$39.99',
    },
  ])
  return (
  
    <View style={{ flex: 1, backgroundColor: 'white',}}>
      <View style={{ backgroundColor: 'white',top:-60,}}>
            <TouchableOpacity onPress={() => navigation.navigate('My Garden')}>
              <Image style={styles.Img1} source={letter} />
              <Image style={styles.Img6} source={circle} />
            </TouchableOpacity>

            <View>
              <Image style={styles.Img2} source={planta} />
            </View>
            <Text style={styles.Up}> Upgrade to HerbIn Plus </Text>
          </View>
      <FlatList
        data={datalist}
        // style = {styles.greenRec}
        style={{ backgroundColor: '#9DC071', borderTopLeftRadius: 20, borderTopRightRadius: 20, }}
        // ListHeaderComponent={
          
        // }
        renderItem={({ item }) => (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'white',
              margin: 20,
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          >
            <Image style={styles.Image} source={item.img} />
            <Text style={styles.Names}>{item.name}</Text>
            <Text style={styles.Precio}>{item.price}</Text>
          </View>
        )}
        ListFooterComponent={
          <>
            <Text style={styles.lol}> HerbIn Plus Privileges </Text>
            <View style={styles.V}>
              <Image style={styles.Img3} source={musicIcon} />
              <Text style={styles.text2}>
                Be able to play music {'\n'}
                for your plants, to help them {'\n'}
                GROW!
              </Text>
            </View>
            <View style={styles.V}>
              <Image style={styles.Img4} source={info} />
              <Text style={styles.text5}>
                Get acces to our videos {'\n'}
                on how to prepare your fruits/{'\n'}
                vegetables/herbs to eat{'\n'}
              </Text>
            </View>
            <View style={styles.V}>
              <Image style={styles.Img3} source={yt} />
              <Text style={styles.text6}>
                Get info on how you can use {'\n'}
                your fruits/vegetables/herbs{'\n'}
                in your everyday life.{'\n'}
              </Text>
            </View>
          </>
        }
      />
    </View>
  
  )
}

const styles = StyleSheet.create({
  greenRec: {
    flex: 1,
  },
  Names: {
    fontWeight: '100',
    fontSize: 24,
    fontFamily: 'QuickSandLight',
  },
  Image: {
    width: 100,
    height: 100,
  },

  Precio: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'QuickSandLight',
  },
  Img1: {
    alignSelf: 'center',
    width: 11,
    height: 11,
    left: 160,
    marginTop: 30,
    top:85,
  },
  Img2: {
    alignSelf: 'center',
    width: 160,
    height: 160,
    left: 10,
    marginTop: 40,
  },
  Img3: {
    width: 50,
    height: 50,
    left: 25,
  },
  Img4: {
    width: 70,
    height: 70,
    left: 240,
  },
  Img6:{
    width:30,
    height:30,
    left:325,
    top:65,
  },
  Up: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'QuickSandBold',
    top:10,
  },
  lol: {
    textAlign: 'center',
    fontSize: 25,
    color: '#ffffff',
    fontFamily: 'QuickSandLight',
  },
  V: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    height: 80,
  },
  text2: {
    fontSize: 15,
    left: 44,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'QuickSandBold',
  },
  text6: {
    textAlign: 'center',
    fontWeight: '500',
    left: 50,
    fontFamily: 'QuickSandBold',
  },
  text5: {
    textAlign: 'center',
    right: 45,
    fontWeight: '500',
    fontFamily: 'QuickSandBold',
  },
})
