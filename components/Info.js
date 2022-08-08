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

import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import useInterval from '../polling/useInterval'

// import { TouchableHighlight } from 'react-native-gesture-handler'

export default function InfoPage({ route, navigation }) {
  const arrow = require('../assets/arrow.png')
  const sun = require('../assets/sunicon.png')
  const waterDrop = require('../assets/waterdrop.png')
  const Lowwater = require('../assets/Lowwater.png')
  const Highwater = require('../assets/Highwater.png')
  const redlight = require('../assets/redlight.png')
  const bluelight = require ('../assets/bluelight.png')

  // const [showTracker] = useState(true)
  // const [WaterSliderValue, setWaterSliderValue] = useState(0)
  // const [SunSliderValue, setSunSliderValue] = useState(0)

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

  // Setting up polling for the background of the app

  // variables to keep track of whether light is on or off
  const [redLight, setRedLight] = useState(true)
  const [blueLight, setBlueLight] = useState(true)

  // var to keep track of water level
  const [waterLevel, setWaterLevel] = useState(null)

  const waterPlant = () => {
    console.log('Pump on')
    axios
      .get('http://172.20.10.10/pumpOn')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        if (err) throw err
      })
  }

  const turnOnRed = () => {
    console.log('Red Light')
    if (redLight) {
      axios
        .get('http://172.20.10.10/red')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          if (err) throw err
        })
    } else {
      axios
        .get('http://172.20.10.10/off')
        .then((res) => {
          setBlueLight(true)
          console.log(res)
        })
        .catch((err) => {
          if (err) throw err
        })
    }
  }
  const turnOnBlue = () => {
    console.log('Blue Light')
    if (blueLight) {
      axios
        .get('http://172.20.10.10/blue')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          if (err) throw err
        })
    } else {
      axios
        .get('http://172.20.10.10/off')
        .then((res) => {
          setRedLight(true)
          console.log(res)
        })
        .catch((err) => {
          if (err) throw err
        })
    }
  }

  const checkWaterlevel = () => {
    axios
      .get('http://172.20.10.10/checkMoisture')
      .then((res) => {
        let newRes = res.request._response.split('\n')[0]
        console.log(parseInt(newRes))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Calling the use interval for polling
  useInterval(() => {
    console.log('checking water level')
    axios
      .get('http://172.20.10.10/checkMoisture')
      .then((res) => {
        let newRes = res.request._response.split('\n')[0]
        setWaterLevel(parseInt(newRes))
        console.log(parseInt(waterLevel))

        if (waterLevel < 500) {
          console.log('plant is being watered')
          waterPlant()
        } else {
          console.log('Plant water level is fine')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, 5000)

  return (
    <View style={{ alignContent: 'center', top: -70 }}>
      {/* Plant Name Display + Back Button*/}
      <View style={{ flexDirection: 'row', padding: 22, top: 55 }}>
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
            left: 10,
            top: 5,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'QuickSand',
              textAlign: 'center',
            }}
          >
            {' '}
            Edit{' '}
          </Text>
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
            left: -50,
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
          top: -30,
          fontFamily: 'QuickSand',
        }}
      >
        Water Control
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
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
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={checkWaterlevel}
            style={{
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              borderRadius: 50,
            }}
          >
            <Image
              style={{
                marginLeft: 10,
                width: 55,
                height: 55,
              }}
              source={Lowwater}
            />
            <Text
              style={{
                textAlign: 'left',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'QuickSandBold',
              }}
            >
              {' '}
              Low water{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={checkWaterlevel}
            style={{
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              borderRadius: 50,
              marginLeft: 50,
            }}
          >
            <Image
              style={{
                width: 55,
                height: 55,
                marginLeft: 10,
              }}
              source={Highwater}
            />
            <Text
              style={{
                textAlign: 'left',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'QuickSandBold',
              }}
            >
              {' '}
              High water{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Light Control Code */}
      <View style={{ marginTop: 35, left: -10 }}>
        <Text
          style={{
            left: 30,
            fontSize: 22,
            fontFamily: 'QuickSand',
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
              marginLeft: 10,
              width: 55,
              height: 55,
              marginTop: 20,
            }}
            source={sun}
          />

          <TouchableOpacity
            onPress={() => {
              setRedLight(!redLight)
              turnOnRed()
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: 50,
              marginLeft: 50,
            }}
          >
            <Image
              style={{
                marginTop: 20,
                marginLeft: 10,
                width: 55,
                height: 55,
              }}
              source={redlight}
            />
            {/* <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'QuickSandBold',
              }}
            >
              {' '}
              Red Light{' '}
            </Text> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setBlueLight(!blueLight)
              turnOnBlue()
            }}
            style={{
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              borderRadius: 50,
              marginLeft: 50,
            }}
          >
            <Image
              style={{
                marginTop: 20,
                marginLeft: 35,
                width: 55,
                height: 55,
              }}
              source={bluelight}
            />
            {/* <Text
              style={{
                marginLeft: 1,
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'QuickSandBold',
              }}
            >
              {' '}
              Blue Light{' '}
            </Text> */}
          </TouchableOpacity>
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
