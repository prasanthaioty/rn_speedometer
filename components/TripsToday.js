import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {FontAwesome5,Ionicons,Feather}from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import axios from '../axios'
const TripsToday = ({accel,brake,disk,speed,trip}) => {
  const navigation=useNavigation()
 const [fromLoc, setFromLoc] = useState('no')
 const [toLoc, setToLoc] = useState('no')
 const [time, setTime] = useState('')
 const [durations, setDurations] = useState('')
 const [distances, setDistances] = useState('')
 const [speeds, setSpeeds] = useState('')

  const details=async()=>{
    var duration=0
    var distance=0
    var speed=0
    for(let i=0;i<trip.items.length;i++){
      duration+=Number(trip.items[i].duration)
      distance+=Number(trip.items[i].distance)
      speed+=Number(trip.items[i].speed)
 }
 setDurations(duration)
 setDistances(distance)
 setSpeeds(speed)
 speed=0
 distance=0
 duration=0

  }
  const getlocation=async()=>{
    // var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var flatitude=''
    var flongitude=''
    var llatitude=''
    var  llongitude=''
    var c_time=""
    for(let i=0;i<trip.items.length;i++){
      flatitude=Number(trip.items[0].latitude)
      flongitude=Number(trip.items[0].longitude)
      llatitude=Number(trip.items[trip.items.length-1].latitude)
      llongitude=Number(trip.items[trip.items.length-1].longitude)
      c_time=trip.items[trip.items.length-1].date
      let fd=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${flatitude},${flongitude}&key=AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4&sensor=true`)
      let flocation= fd.data.results[1].address_components[1].short_name
      let ffl=await add3Dots(flocation,7)
      setFromLoc(ffl);
      let ld=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${llatitude},${llongitude}&key=AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4&sensor=true`)
      let llocation= ld.data.results[1].address_components[1].short_name
    let lfl=await add3Dots(llocation,20)
    setToLoc(lfl);
    setTime(c_time);
         }
    }
    function add3Dots(string, limit)
    {
      var dots = "...";
      if(string.length > limit)
      {
        // you can also use substr instead of substring
        string = string.substring(0,limit) + dots;
      }
     
        return string;
    }
  
   useEffect(()=>{
    details()
    getlocation()
   })
  
 
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={()=>navigation.navigate('TripsDetails',{accel,brake,disk,speed,fromLoc,toLoc,trip,time})}>
    <View className="flex-row justify-between mx-2 py-1">
  <Text className="text-white">{`${fromLoc} to ${toLoc}`}</Text>
  <Text className="text-white">{`${time.slice(11,16)} Hours`} </Text>
  </View>
  <View className="bg-gray-300 py-0.5 my-1 px-2 rounded-md">
   <View className="flex-row justify-around items-center">
   <View className="flex-row items-center">
    <Text className="text-black text-lg font-medium">{`${distances} KM`}</Text>
    </View>
    <View className="flex-row items-center">
    <Text className="text-black text-lg font-medium">{`${speeds} Score`}</Text>
    </View>
    <View className="flex-row items-center">
    <Text className="text-black text-lg font-medium">{`${durations} Duration`}</Text>
    </View>
   </View>

   <View className="flex-row items-center pt-1">
    <View className="h-0.5 flex-1 bg-black"></View>
    <View className="h-0.5 flex-1 bg-black"></View>
    </View>
    <View className="flex-row justify-around items-center">
      <View className="flex-row items-center">
      <Text className="bg-black text-blue-400 p-0.5 px-3 rounded-md items-center text-center text-2xl" >{brake}</Text>
        <View className="flex-col items-center p-1">
        <Text className="text-black text-sm">Hard </Text>
        <Text className="text-black text-sm">Brakes </Text>
        </View>
      </View>
      <View className="flex-row items-center">
      <Text className="bg-black text-orange-400 p-0.5 px-3 rounded-md items-center text-center text-2xl">{speed}</Text>
        <View className="flex-col items-center p-1">
        <Text className="text-black text-sm">High </Text>
        <Text className="text-sm">Speed </Text>
        </View>
   
      </View><View className="flex-row items-center">
      <Text className="bg-black text-yellow-400 p-0.5 px-3 rounded-md items-center text-center text-2xl">{accel}</Text>
        <View className="flex-col items-center p-1">
        <Text className="text-black">Harsh </Text>
        <Text>Accel </Text>
        </View>
   
      </View>

    </View>
  </View>
  </TouchableOpacity>
  </ScrollView>
  )
}
const TripeDEtailsIcons= ({name,time,icon,icont,iconalert}) => {
  return (
    <View className="flex-row items-center">
      <Ionicons name={icon} size={34} color="red" />
      <Feather name={iconalert} size={34} color="orange" />
      <FontAwesome5 name={icont} size={34} color="red" />
       <View  className="ml-2 items-center">
       <Text className="text-white py-1">{name}</Text>
        <Text className="text-orange-500" >{time }</Text>
       </View>
        </View> 
  )
}
const Test=({icon,name})=>{
  return(
    <View className="flex-row items pt-0.5">
    <Ionicons name={icon} size={24} color="lightblue" />
         <Text className="text-white items-center"> {name} </Text>
    </View>
  )
}
const TripsDesc = ({km,disc,dis}) => {
  return (
    <View className="items-center mx-1 flex-col justify-center">
      <Text className="text-white text-lg">{km}</Text>
      <Text className="text-white text-base">{disc}</Text>
      <Text  className="text-white text-base">{dis}</Text>
    </View>
  )}
export {TripsToday,TripeDEtailsIcons,Test,TripsDesc}