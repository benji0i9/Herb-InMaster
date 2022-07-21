import * as React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableHighlight } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Slider from '@react-native-community/slider'
// import { TouchableHighlight } from 'react-native-gesture-handler'
// import { NavigationContainer } from '@react-navigation/native'

export default function WaterPlant({ navigation }) {
  const shovelPic = require('../assets/shovel.png');
  
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
      <SafeAreaView>

      {/* <TouchableHighlight onPress={() => navigation.navigate('Plus', item)}>
                  <Image
                    style={{
                      backgroundColor: '#000000',
                      alignSelf: 'center',
                      width: 55,
                      height: 55,
                      borderRadius: 5,
                    }}
                    source={whiteplus.jpg}
                  />
  
                </TouchableHighlight> */}

        <FlatList
          data={plantList}
          ItemSeparatorComponent = {FlatListItemSeparator}
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
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  Name: {item.name}
                </Text>

                <TouchableHighlight onPress={() => navigation.navigate('Info', item)}>
                  <Image
                    style={{
                      backgroundColor: '#000000',
                      alignSelf: 'center',
                      width: 55,
                      height: 55,
                      borderRadius: 5,
                    }}
                    source={shovelPic}
                  />
               
                </TouchableHighlight>
              </View>
            </>
          )} 
        />
      </SafeAreaView>
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

  // textContainer: {
  //   backgroundColor: 'red',
  //   margin: 40,
  //   //  borderBottomWidth: 'medium'
  // },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  RectangleShapeView: {
    //To make Rectangle Shape
    marginTop: 20,
    width: 300,
    height: 220,
    backgroundColor: '#D3F1D5',
    borderRadius: 19,
  },
  
})
