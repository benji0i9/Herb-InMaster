import * as React from 'react'
import { Text, View, FlatList, StyleSheet, TextInput, ScrollView, Image,TouchableOpacity} from 'react-native'
import { useState } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function LightPage() {
  const letter = require("../assets/letter.png");
  const planta = require("../assets/planta.png");
  const [datalist, setPlantList] = useState ([
    
  ])
  return (
    <>
  <View>
    <ScrollView >
    <TouchableOpacity 
      // activeOpacity={1}
      // onPress={() => navigation.navigate("Add",)}
       >
        <Image
                style={{
                  alignSelf: "center",
                  width: 20,
                  height: 20,
                  left:160,
                  marginTop:30,
                }}
                source={letter}
              />
      </TouchableOpacity>
      <View>
          <Image
                style={{
                  alignSelf: "center",
                  width:160,
                  height:160,
                  left:10,
                  marginTop:40,
                }}
                source={planta}
                />
      </View>
      <View style={styles.greenRec}>

      </View>
      </ScrollView>     
   </View>
 </>
  );
}

const styles = StyleSheet.create({
  greenRec:{
    width: 360,
    height: 520,
    backgroundColor: "#D3F1D5",
    borderRadius: 20,
  }

})


