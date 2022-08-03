import * as React from 'react'
import { useFonts } from 'expo-font'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Slider } from '@miblanchard/react-native-slider'
// import {Slider} from '@mui/material/Slider';

import { useState } from 'react'

// import { TouchableHighlight } from 'react-native-gesture-handler'

export default function InfoPage({ route, navigation }) {
  const arrow = require('../assets/arrow.png')
  const sun = require('../assets/sunicon.png')
  const waterDrop = require('../assets/waterdrop.png')

  const [showTracker] = useState(true)
  const [WaterSliderValue, setWaterSliderValue] = useState(0)
  const [SunSliderValue, setSunSliderValue] = useState(0)

  const [MonButtonClicked, setMonButtonClicked] = useState(false)
  const [TueButtonClicked, setTueButtonClicked] = useState(false)
  const [WedButtonClicked, setWedButtonClicked] = useState(false)
  const [ThuButtonClicked, setThuButtonClicked] = useState(false)
  const [FriButtonClicked, setFriButtonClicked] = useState(false)
  const [SatButtonClicked, setSatButtonClicked] = useState(false)
  const [SunButtonClicked, setSunButtonClicked] = useState(false)

  const toggleButtonMon = () =>
    MonButtonClicked ? setMonButtonClicked(false) : setMonButtonClicked(true)
  const toggleButtonTue = () =>
    TueButtonClicked ? setTueButtonClicked(false) : setTueButtonClicked(true)
  const toggleButtonWed = () =>
    WedButtonClicked ? setWedButtonClicked(false) : setWedButtonClicked(true)
  const toggleButtonThu = () =>
    ThuButtonClicked ? setThuButtonClicked(false) : setThuButtonClicked(true)
  const toggleButtonFri = () =>
    FriButtonClicked ? setFriButtonClicked(false) : setFriButtonClicked(true)
  const toggleButtonSat = () =>
    SatButtonClicked ? setSatButtonClicked(false) : setSatButtonClicked(true)
  const toggleButtonSun = () =>
    SunButtonClicked ? setSunButtonClicked(false) : setSunButtonClicked(true)

  const CustomSunTracker = () => (
    <View style={styles.SunTrackerShapeView}></View>
  )
  const CustomWaterTracker = () => (
    <View style={styles.WaterTrackerShapeView}></View>
  )

  return (
    <View style={{ alignContent: 'center', top: -70 }}>
      {/* Plant Name Display + Back Button*/}
      <View style={{ flexDirection: 'row', padding: 22, top: 55, }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{ top: 67, width: 20, height: -10, marginTop: -40 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              alignSelf: 'center',
              width: 35,
              height: 35,
              borderRadius: 5,
              top: 10,
            }}
            source={arrow}
          />
        </TouchableOpacity>
        <Text style={styles.Names}> {route.params.name} </Text>

        <TouchableOpacity
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 35,
            marginLeft: 'auto',
            backgroundColor: 'black',
            height: 34,
            width: 66,
            borderRadius: 10,
            left:10,
            top:5,
          }}
        >
          <Text style={{ color: 'white', fontSize: 20,fontFamily:'QuickSand',textAlign:'center',}}> Delete </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          top: 50,
          left: 25,
          fontFamily: 'QuickSandBold',
        }}
      >
        {' '}
        Watering Periods
      </Text>

      {/* Day of the Week Buttons +  ParamPlant + Backdrop */}
      <View style={{ flexDirection: 'row-reverse', left: 50 }}>
        {/* Param Plant Image */}
        <View style={{ position: 'relative', right: 49, top: 22 }}>
          <View style={styles.CircleShapeView}>
            <Image
              style={{
                alignSelf: 'center',
                width: 290,
                height: 290,
                top: 50,
                left: -85,
              }}
              source={route.params.img}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 127,
            top: 70,
            left: -40,
          }}
        >
          {/* Mon Button */}
          <TouchableOpacity
            onPress={toggleButtonMon}
            style={{ width: 50, height: 64 }}
          >
            <View
              style={
                MonButtonClicked ? styles.pressed : styles.DayButtonShapeView
              }
            >
              <Text style={styles.DayButtonText}> Mon</Text>
            </View>
          </TouchableOpacity>
          {/* Tue Button */}
          <TouchableOpacity
            onPress={toggleButtonTue}
            style={{ width: 50, height: 64 }}
          >
            <View
              style={
                TueButtonClicked ? styles.pressed : styles.DayButtonShapeView
              }
            >
              <Text style={styles.DayButtonText}> Tue</Text>
            </View>
          </TouchableOpacity>
          {/* Wed Button */}
          <TouchableOpacity
            onPress={toggleButtonWed}
            style={{ width: 50, height: 64 }}
          >
            <View
              style={
                WedButtonClicked ? styles.pressed : styles.DayButtonShapeView
              }
            >
              <Text style={styles.DayButtonText}> Wed</Text>
            </View>
          </TouchableOpacity>
          {/* Thu Button */}
          <TouchableOpacity
            onPress={toggleButtonThu}
            style={{ width: 50, height: 64 }}
          >
            <View
              style={
                ThuButtonClicked ? styles.pressed : styles.DayButtonShapeView
              }
            >
              <Text style={styles.DayButtonText}> Thu</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 204,
            top: 100,
            left: -160,
          }}
        >
          {/* Fri Button */}
          <TouchableOpacity
            onPress={toggleButtonFri}
            style={{ width: 50, height: 64 }}
          >
            <View
              style={
                FriButtonClicked ? styles.pressed : styles.DayButtonShapeView
              }
            >
              <Text style={styles.DayButtonText2}> Fri</Text>
            </View>
          </TouchableOpacity>
          {/* Sat Button */}
          <TouchableOpacity
            onPress={toggleButtonSat}
            style={{ width: 50, height: 64 }}
          >
            <View
              style={
                SatButtonClicked ? styles.pressed : styles.DayButtonShapeView
              }
            >
              <Text style={styles.DayButtonText2}> Sat</Text>
            </View>
          </TouchableOpacity>
          {/* Sunday Button */}
          <TouchableOpacity
            onPress={toggleButtonSun}
            style={{ width: 50, height: 64 }}
          >
            <View
              style={
                SunButtonClicked ? styles.pressed : styles.DayButtonShapeView
              }
            >
              <Text style={styles.DayButtonText2}> Sun</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Water Control Code */}
      <Text
        style={{
          left: 20,
          fontSize: 22,
          top: -10,
          fontFamily: 'QuickSandMedium',
        }}
      >
        Water Control
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            top: 10,
            left: 20,
            width: 35,
            height: 50,
          }}
          source={waterDrop}
        />
        <View
          style={{
            flex: 1,
            left: 10,
            top: 10,
            marginLeft: 80,
            marginRight: 80,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              bottom: 41,
              fontSize: 16,
              left: -2,
              fontWeight: '600',
              fontFamily: 'QuickSandMedium',
            }}
          >
            0
          </Text>

          <Text
            style={{
              position: 'absolute',
              bottom: 39,
              fontSize: 16,
              left: 186,
              fontWeight: '600',
              fontFamily: 'QuickSandMedium',
            }}
          >
            2
          </Text>
          <Slider
            value={WaterSliderValue}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            onValueChange={(WaterSliderValue) =>
              setWaterSliderValue(WaterSliderValue)
            }
            maximumTrackTintColor='#D9D9D9'
            minimumTrackTintColor='#75C6E9'
            thumbTintColor='#48A2E3'
            renderTrackMarkComponent={CustomWaterTracker}
            trackMarks={[0.8, 0.5]}
          />
          <View style={{ top: -40, left: -10 }}>
            <Text
              style={{
                position: 'absolute',
                top: 40,
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'QuickSandMedium',
              }}
            >
              Recommended amount:
            </Text>

            <Text
              style={{
                position: 'absolute',
                top: 54,
                fontSize: 13,
                color: '#6A6A6A',
                fontWeight: '300',
                fontFamily: 'QuickSandBold',
              }}
            >
              0.5 gallons per day
            </Text>
          </View>
        </View>
      </View>
      {/* Light Control Code */}
      <View style={{ marginTop: 30, left: -10 }}>
        <Text
          style={{
            left: 30,
            fontSize: 22,
            fontFamily: 'QuickSandMedium',
          }}
        >
          Light Control
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Image
            style={{
              top: -10,
              width: 55,
              height: 55,
            }}
            source={sun}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 60,
              marginRight: 80,
              flexDirection: 'column',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  // fontSize: 16,
                  // fontWeight: '600'
                  fontFamily: 'QuickSandBold',
                }}
              >
                Reg
              </Text>
              <Text
                style={{
                  // fontSize: 1,
                  // fontWeight: '600',
                  fontFamily: 'QuickSandBold',
                }}
              >
                90°
              </Text>
            </View>

            <View>
              <View style={{width:165,}}>
              <Slider
                value={SunSliderValue}
                minimumValue={0}
                maximumValue={2}
                step={0.1}
                onValueChange={(SunSliderValue) =>
                  setSunSliderValue(SunSliderValue)
                }
                maximumTrackTintColor='#D9D9D9'
                minimumTrackTintColor='#FFDF6F'
                thumbTintColor='#F1BC6C'
                renderTrackMarkComponent={CustomSunTracker}
                trackMarks={[0.8]}
              />
            </View>

              <Text
                style={{
                  top: -10,
                  position: 'relative',
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: 'QuickSandMedium',
                  flexDirection: 'row',
                  width: 200,
                  height: 20,
                  left: -10,
                }}
              >
                Recommended amount:{'\n'}
              </Text>

              <Text
                style={{
                  left: -10,
                  top: -10,
                  height: 20,
                  fontSize: 13,
                  fontWeight: '300',
                  fontFamily: 'QuickSandBold',
                  color: '#6A6A6A',
                }}
              >
                50-85 F°
              </Text>
            </View>
          </View>
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
  Names: {
    top: 23,
    left: 10,
    fontSize: 37,
    textAlign: 'center',
    fontFamily: 'QuickSandBold',
  },
  DayButtonText: {
    fontSize: 16,
    fontWeight: '600',
    top: 22,
    left: 8,
    fontFamily: 'QuickSandBold',
  },
  DayButtonText2: {
    fontSize: 16,
    fontWeight: '600',
    top: 22,
    left: 11,
    fontFamily: 'QuickSandBold',
  },
  pressed: {
    width: 50,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
  DayButtonShapeView: {
    width: 50,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#D3F1D5',
    fontFamily: 'QuickSandBold',
  },
  track: {
    borderColor: 'red',
    borderWidth: 10,
    height: 20,
  },
  SunTrackerShapeView: {
    width: 6,
    height: 30,
    backgroundColor: '#FFDF6F',
  },
  WaterTrackerShapeView: {
    width: 6,
    height: 30,
    left: 7,
    backgroundColor: '#48A2E3',
  },
  CircleShapeView: {
    //To make Rectangle Shape
    marginBottom: 20,
    width: 400,
    height: 400,
    backgroundColor: '#D3F1D5',
    borderRadius: 200,
    top: 10,
    left: 110,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 1,
      },
      android: {
        elevation: 10,
      },
    }),
  },
})
