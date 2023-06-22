import { View, Text,SafeAreaView, TouchableOpacity,StatusBar, Button, TouchableHighlight} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import {Entypo,FontAwesome} from '@expo/vector-icons'
import Discription from '../components/Discription';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircularProgress from 'react-native-circular-progress-indicator'
import axios from '../axios'
import { Image } from 'react-native';
const Vitals = ({navigation}) => {
  const [progressVal, setProgressVal] = useState(75)
const [username, setUsername] = useState('username')
const [speed, setSpeed] = useState('')
const [disc, setDisc] = useState('chennai')
const [lastActivity, setLastActivity] = useState('')
const [time, setTime] = useState('')
const [pickupCords, setPickupCords] = useState({
    latitude:12.9249,
    longitude:80.1000,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
})
const [hardbrake, setHardbrake] = useState(0)
const [highspeed, setHighspeed] = useState(0)
const [harshaccel, setHarshaccel] = useState(0)
const [distraction, setDistraction] = useState(0)

useEffect(()=>{
 const live=async()=>{
  const result=await axios.get('/device/live')
  setSpeed(result.data.data[0].speed)
  setLastActivity(result.data.data[0].createdAt.slice(0,10));
  setTime(result.data.data[0].createdAt.slice(11,16));
  setPickupCords({
      latitude:result.data.data[0].latitude,
      longitude:result.data.data[0].longitude,
      latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
    
  })
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pickupCords.latitude},${pickupCords.longitude}&key=AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4`).then(async(d)=>{
    var location=await d.data.results[1].address_components[1].short_name   
    setDisc(location)
  })

  // ----------------------------alerts data---------------------
  const {data}=await axios.get('/device/alert')
  let disk=0
  var speed=0
  var accel=0
  var brake=0
  for(let i=0;i<data.data.length;i++){
     if(result.data.data[0].trip==data.data[i].trip.trip){
        switch (data.data[i].alert) {
          case '1':
            disk+=1
            break;
            case '2':
            speed+=1
            break;
           case '3':
            accel+=1
            break; 
            case '4':
            brake+=1
            break;
        
          default:
            break;
        
       
    }
     }
    
  }
  setDistraction(disk)
  setHardbrake(brake)
  setHarshaccel(accel)
  setHighspeed(speed)
 
   
 }
 live()
},[])


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('user')
    if(value !== null) {
      // value previously stored
      setUsername(value)

    }
  } catch(e) {
    // error reading value
  }
}
getData()
  return (
    <SafeAreaView className="bg-white flex-1">
        <StatusBar barStyle={'light-content'}/>
      <View className=" max-h-[60%]">
     <Image source={require('../assets/map.png')} className="w-full h-full" />
        {/* <MapView className="w-full h-full"
           key="AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4"
     initialRegion={pickupCords}
      >
        <Marker
           key="AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4"
          coordinate={pickupCords}
          title={` Speed : ${speed}`}
          // description={disc}
          identifier="origin"
          pinColor="#E33342"
        />
        </MapView> */}
      </View>
      <View className="mt-7 m-3 flex-row">
        <View className="flex-1 justify-center">
        <Text className="text-2xl py-1">Hi.. {username}</Text>
        <Text className="font-bold py-1">{`${disc} TN - ${time}`}</Text>
        <Text className="py-1 text-gray-500">{`Last activity  ${lastActivity}`}</Text>
        </View>
        <View className="flex-col justify-center items-center" >
        
          <TouchableOpacity onPress={()=>navigation.navigate('Crash')}>
            
          <CircularProgress
          radius={50}
          value={progressVal}
          textColor="#222"
          fontSize={10}
          valueSuffix="%"
          maxValue={100}
          inActiveStrokeColor='#00FF00'
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={5}
          activeStrokeWidth={5}
          duration={5000}
          onAnimationComplete={()=>setProgressVal(75)}
          />
          </TouchableOpacity>
          <Text className="pt-2 font-bold text-lg">RE Score</Text>
        </View>
      </View>
      <View className="flex-row items-center">
  <View className="flex-1 bg-black h-0.5" />
<TouchableOpacity onPress={()=>navigation.navigate('Tabs', { screen: 'Trips' })}>
<FontAwesome name="exclamation-circle" size={24} color="black" />
</TouchableOpacity> 
  <View className="flex-1 bg-black h-0.5" />
</View>
<View className="px-7 py-5 flex-row justify-between">
<Discription minute={distraction} first='Phone ' second='Distraction '/>
<Discription minute={hardbrake} first='Hard ' second='Brakes '/>
<Discription minute={highspeed} first='High ' second='Speed '/>
<Discription minute={harshaccel} first='Harsh ' second='Accel '/>


</View>
    </SafeAreaView>
  )
}

export default Vitals
