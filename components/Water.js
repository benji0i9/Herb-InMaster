import * as React from 'react'
import { useFonts } from 'expo-font'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native'
import { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SearchBar } from 'react-native-elements'

export default function WaterPlant({ navigation }) {
  const shovelPic = require('../assets/shovel1.png')
  const whitePlus = require('../assets/shovel.png')

  const [showRectangle, setShowRectangle] = useState(true)
  const [plantList, setPlantList] = useState([
    //1
    {
      name: 'Sunflower',
      img: require('../assets/sunflower.png'),
    },
    //2
    {
      name: 'Dandylion',
      img: require('../assets/dandylion.png'),
    },
    //3
    {
      name: 'Cactus',
      img: require('../assets/Cactus.png'),
    },
    //4
    {
      name: 'Daisy',
      img: require('../assets/daisy.png'),
    },
    //5
    {
      name: 'Rose',
      img: require('../assets/Rose.png'),
    },
    //6
    {
      name: 'cone flower',
      img: require('../assets/Coneflower.png'),
    },
    //7
    {
      name: 'Catmint',
      img: require('../assets/Catmint.png'),
    },
    //8
    {
      name: 'Agastache',
      img: require('../assets/Agastache1.png'),
    },
    //9
    {
      name: 'lantana',
      img: require('../assets/Lantana.png'),
    },
    //10
    {
      name: 'Aloe Vera',
      img: require('../assets/Aloevera.png'),
    },
  ])

  const changeShape = (shape) => {
    setShowRectangle(shape == 'Rectangle')
  }

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 30,
          width: '100%',
          // backgroundColor: '#000',
        }}
      />
    )
  }
  //  const goWaterLevel = () => {
  //    navigation.navigate('WaterLevel')
  //  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 22, top: 2 }}>
        <View style={styles.plusView}>
          <View
            style={{
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                fontSize: 45,
                fontWeight: '600',
                right: 40,
                top: -15,
                fontFamily: 'QuickSandBold',
              }}
            >
              My Garden
            </Text>

            <Text
              style={{
                top: -20,
                fontSize: 17,
                fontWeight: '400',
                right: 40,
                color: '#B5B5B5',
                fontFamily: 'QuicksandLight',
              }}
            >
              (you have # plants)
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: '#000000',
              alignSelf: 'center',
              width: 37,
              height: 37,
              top: 20,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              left: 25,
            }}
            onPress={() => navigation.navigate('Add')}
          >
            <FontAwesome5 name='plus' size={21} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: 'relative', top: -25 }}>
        <FlatList
          data={plantList}
          header
          contentContainerStyle={{ paddingTop: 20,}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item }) => (
            <>
              <View style={showRectangle ? styles.RectangleShapeView : ''}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 160,
                    height: 160,
                    top: -10,
                  }}
                  source={item.img}
                />

                <Text
                  style={{
                    fontFamily: 'QuickSandBold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                >
                  {item.name}
                </Text>

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate('Info', item)}
                >
                  <View style={showRectangle ? styles.RectangleShapeView1 : ''}>
                    <Image
                      style={{
                        alignSelf: 'center',
                        width: 30,
                        height: 30,
                        top: 14,
                      }}
                      source={shovelPic}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  RectangleShapeView: {
    //To make Rectangle Shape
    marginBottom: 20,
    width: 300,
    height: 220,
    backgroundColor: '#D3F1D5',
    borderRadius: 19,
  },
  plusView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  RectangleShapeView1: {
    backgroundColor: '#000000',
    width: 60,
    height: 60,
    left: 115,
    borderRadius: 15,
  },
})
