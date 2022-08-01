import * as React from 'react'
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
    <View style={{ flex: 1 }}>
      <FlatList
        data={datalist}
        // style = {styles.greenRec}
        style={{ flex: 1, backgroundColor: '#9DC071' }}
        ListHeaderComponent={
          <View style={{ backgroundColor: 'white', marginBottom: 40 }}>
            <TouchableOpacity onPress={() => navigation.navigate('My Garden')}>
              <Image style={styles.Img1} source={letter} />
            </TouchableOpacity>

            <View>
              <Image style={styles.Img2} source={planta} />
            </View>
            <Text style={styles.Up}> Upgrade to HerbIn Plus </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'white',
              margin: 20,
              borderRadius: 15,
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
              <Image style={styles.Img3} source={musicIcon} />
              <Text style={styles.text4}>
                Get Access to our videos{'\n'}
                on how to prepare your fruits/ vegetables/herbs in your everyday
                life
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
  },
  Image: {
    width: 100,
    height: 100,
  },

  Precio: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    fontSize: 25,
  },
  Img1: {
    alignSelf: 'center',
    width: 20,
    height: 20,
    left: 160,
    marginTop: 30,
  },
  Img2: {
    alignSelf: 'center',
    width: 160,
    height: 160,
    left: 10,
    marginTop: 40,
  },
  Img3: {
    width: 60,
    height: 60,
    left:25,
  },
  Up: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300',
  },
  lol: {
    textAlign: 'center',
    fontSize: 22,
    color: '#ffffff',
  },
  V: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    height:80,
  },
  text2: {
    fontSize: 15,
    left: 44,
    textAlign:'center'
  },
  text4:{
    textAlign:'center',
  }
})
