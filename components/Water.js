import * as React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slider from '@react-native-community/slider'
import InfoPage from './Info'

export default function WaterPlant({ navigation }) {
  const [showRectangle, setShowRectangle] = useState(true)
  const [plantList, setPlantList] = useState([
    //1
    {
      name: 'Plant1',
      type: 'Sunflower',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //2
    {
      name: 'Plant2',
      type: 'dandylion',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //3
    {
      name: 'Plant3',
      type: 'cactus',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //4
    {
      name: 'Plant4',
      type: 'daisy',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //5
    {
      name: 'Plant5',
      type: 'rose',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //6
    {
      name: 'Plant6',
      type: 'cone flower',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //7
    {
      name: 'Plant7',
      type: 'Catmint',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //8
    {
      name: 'Plant8',
      type: 'Agastache',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //9
    {
      name: 'Plant9',
      type: 'Lantana',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
    //10
    {
      name: 'Plant10',
      type: 'Aloe vera',
      img: require('../assets/Chicken-Sandwich.webp'),
    },
  ])

  const changeShape = (shape) => {
    setShowRectangle(shape == 'Rectangle')
  }
  //  const goWaterLevel = () => {
  //    navigation.navigate('WaterLevel')
  //  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={plantList}
          renderItem={({ item }) => (
            <>
              <View style={showRectangle ? styles.RectangleShapeView : ''} />
              <Image
                style={{
                  width: 150,
                  height: 150,
                }}
                source={item.img}
              />
              <Text> Name: {item.name} </Text>
              <Text> Type: {item.type} </Text>

              <Button
                title='More information'
                onPress={() => navigation.navigate('Info')}
              />

              {/* <Slider
               style={{ width: 200, height: 40 }}
               minimumValue={0}
               maximumValue={1}
               minimumTrackTintColor='#FFFFFF'
               maximumTrackTintColor='#000000'
              /> */}
              {/* <Text style={styles.textContainer}> This stays the same </Text> */}
            </>
          )}
        />
        {/* <Pressable onPress={goWaterLevel}>
         {' '}
         <Text style={styles.optionsButton}>Explore Options</Text>{' '}
       </Pressable> */}
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

  textContainer: {
    backgroundColor: 'red',
    margin: 40,
    //  borderBottomWidth: 'medium'
  },
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
