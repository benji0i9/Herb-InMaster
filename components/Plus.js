import * as React from 'react'
import {StyleSheet, Text, View, FlatList, Image, Button, TouchableHighlight,  TouchableOpacity} from "react-native";import { useState } from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
// import { SearchBar } from 'react-native-elements';


export default function Plus({ route, navigation }) {
  

  // const languages = [
  //   { name: 'Cabbage' , key: '1' },
  //   { name: 'Cilantro' , key: '2' },
  //   { name: 'Cucumber' , key: '3' },
  //   { name: 'Carrots' , key: '4' },
  //  ]
  const [showRectangle, setShowRectangle] = useState(true);
  const shovelPic = require("../assets/shovel.png");
  const [plantList, setPlantList] = useState([
    //1
    {
      name: "Sunflower",
      img: require("../assets/sunflower.png"),
    },
    //2
    {
      name: "Dandylion",
      img: require("../assets/dandylion.png"),
    },
    //3
    {
      name: "Cactus",
      img: require("../assets/Cactus.png"),
    },
    //4
    {
      name: "Daisy",
      img: require("../assets/daisy.png"),
    },
    //5
    {
      name: "Rose",
      img: require("../assets/Rose.png"),
    },
    //6
    {
      name: "cone flower",
      img: require("../assets/Coneflower.png"),
    },
    //7
    {
      name: "Catmint",
      img: require("../assets/Catmint.png"),
    },
    //8
    {
      name: "Agastache",
      img: require("../assets/Agastache1.png"),
    },
    //9
    {
      name: "lantana",
      img: require("../assets/Lantana.png"),
    },
    //10
    {
      name: "Aloe Vera",
      img: require("../assets/Aloevera.png"),
    },
  ]);

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 30,
          width: "100%",
          // backgroundColor: '#000',
        }}
      />
    );
  };
 
  return (
    <View style={{ alignContent: 'center' }}>
      {/* <Text> {route.params.name} </Text> */}

      <TouchableOpacity activeOpacity={1}
        style={{ top: 50, width:170, height:46, }}
        onPress={() => navigation.goBack()}
      >
        <Text
            style={{          
              alignSelf: 'center',
              width: 150,
              height: 150,
              top: -10,
            }}
        > GO Testback! </Text>
      </TouchableOpacity>


      <FlatList
        style={{top:30}}
        data={plantList}
        header
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={FlatListItemSeparator}
       
        renderItem={({ item }) => (
          <>
            <View style={showRectangle ? styles.RectangleShapeView : ""}>

              <Text
                style={
                  styles.todo
                }
              >
                {item.name}
              </Text>
            </View>
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
    backgroundColor: "#D3F1D5",
    borderRadius: 19,
    alignSelf: 'center'
  },
  todo: {
    margin: 10,
    color: 'white',
    fontSize: 35,
    padding: 10,
    alignSelf: 'center'
    }
})

