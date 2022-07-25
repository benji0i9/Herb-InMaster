import * as React from 'react'
import {StyleSheet,Text, View,FlatList,Image,Button,TouchableOpacity, TouchableHighlight,} from 'react-native'
import { useState } from 'react'
import { SearchBar } from 'react-native-elements'

export default function Plus({ route, navigation }) {
  const arrow = require("../assets/backarrow.png");
  const blackoverlap = require("../assets/Rectangle.png");
  
  //search bar
  state = {
    search: '',
  }

  updateSearch = (search) => {
    this.setState({ search })
  }

  // const languages = [
  //   { name: 'Cabbage' , key: '1' },
  //   { name: 'Cilantro' , key: '2' },
  //   { name: 'Cucumber' , key: '3' },
  //   { name: 'Carrots' , key: '4' },
  //  ]
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

  return (
    <View style={{ alignContent: 'center' }}>
      {/* <Text> {route.params.name} </Text> */}

      <View style={{ flexDirection: 'row', padding: 22 }}>
        <View>
          <TouchableOpacity
            activeOpacity={1}
            style={{ top: 67, width:20, height: -10, marginTop:-40,}}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{
                alignSelf: 'center',
                width: 35,
                height: 35,
                borderRadius: 5,
              }}
              source={arrow}
            />
            {/* <Text
            style={{
              alignSelf: 'center',
              width: 160,
              height: 160,
              left: 30
            }}
        > Go back button </Text> */}
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, top: 50 }}>
          <SearchBar
            lightTheme
            round
            inputStyle={{ backgroundColor: 'white' }}
            inputContainerStyle={{ backgroundColor: 'white' }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent',
              borderRadius: 0,
              marginTop:-40,
            }}
            placeholder='Type Here...'
          />
        </View>
      </View>
      <FlatList
      
        contentContainerStyle={{ paddingBottom: 300 }}
        style={{ top: 60 }}
        data={plantList}
        header
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => (
          <>
            <Image
                  style={{
                    position: 'absolute',
                    top: 11,
                    alignSelf: "center",
                    width: 130,
                    height: 130,
                    borderRadius: 5,
                  }}
                  source={item.img}
                />
                

            <TouchableOpacity 
              activeOpacity={1}
              onPress={() => navigation.goBack()}
              >
                
                
              <Image
                style={{
                  alignSelf: "center",
                  width: 300,
                  height: 150,
                  borderRadius: 5,
                }}
                source={blackoverlap}
              />
              </TouchableOpacity>


              <Text
                onPress={() => navigation.goBack()}
                style={{
                  position: 'absolute',
                  top: 60,
                  fontSize: 30,
                  alignSelf: "center",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: 'white'
                }}
              >
                {" "}
                {item.name}
              </Text>
          </>
        )}
      />

      {/* <FlatList
        data={languages}
        renderItem={({ item }) => (
        <Text style={styles.todo}>{item.name}</Text>
        )}
        />
  */}
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
  RectangleShapeView: {
    //To make Rectangle Shape
    marginBottom: 20,
    width: 300,
    height: 220,
    borderRadius: 19,
    alignSelf: 'center',
  },
  todo: {
    margin: 10,
    color: 'white',
    fontSize: 35,
    padding: 10,
    alignSelf: 'center',
  },
})
