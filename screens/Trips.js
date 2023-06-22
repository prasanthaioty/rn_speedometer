import { View, Text,SafeAreaView,TouchableOpacity,StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Entypo,Ionicons} from '@expo/vector-icons'
import {TripsToday,TripsDesc} from '../components/TripsToday'
import axios from '../axios'
import { useNavigation } from '@react-navigation/native'
import CircularProgress from "react-native-circular-progress-indicator";

const Trips = ({navigation}) => {
  const [livedata, setLivedata] = useState('')
  const [alertdata, setAlertdata] = useState('')
  const [tripdata, setTripdata] = useState('')
  const [state, setState] = useState({
    pickupCords:{
      latitude:12.9249,
      longitude:80.1000,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },droblocationCors:{
      latitude:12.9516,
      longitude:80.1462, 
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,} })
  const {pickupCords,droblocationCors}=state
  const dds=[]
  var disk=0
  var speed=0
  var accel=0
  var brake=0
useEffect(() => {
  const callme=async()=>{
    const trips= await axios.get('device/live/trips')
    setTripdata(trips.data.data);
    const result= await axios.get('device/lives')
    const {data}=await axios.get('device/alert')
    setLivedata(result.data.data)
    setAlertdata(data.data)
  }
  callme()
}, [])  
for(let k=0;k<tripdata.length;k++){
  curr=[]
      for(let j=0;j<alertdata.length;j++){
        if(tripdata[k]==alertdata[j].trip.trip){
          switch(alertdata[j].alert) {
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
              console.log('is empty');
              break; }
          }else{
          }} 
        var curr=[]
        for(let i=0;i<livedata.length;i++){
          if(tripdata[k]==livedata[i].trip){
            curr.push({
              distance: livedata[i].distance,
              duration: livedata[i].duration,
              speed: livedata[i].speed,
              date:livedata[i].createdAt,
              trip:tripdata[k],
              latitude:Number(livedata[i].latitude),
              longitude:Number(livedata[i].longitude)

            })
          }
        }

        dds.push({trip:tripdata[k],disk,speed,accel,brake,items:curr});
        disk=0,speed=0,accel=0,brake=0
      }

  return (
  <SafeAreaView className="bg-bg-primary flex-1">
        <StatusBar barStyle={'light-content'}/>
    <View className="flex-row justify-between items-center m-5">
    <View className="flex-col justify-center items-center">
    <TripsDesc km='3.15' disc='KM_DRIVEN'/>
    <TripsDesc km='15' disc='DISTRACTION ' dis='MINU.'/>
      </View>
      <TouchableOpacity>
      <CircularProgress
          radius={65}
          value={80}
          textColor="#FFA500"
          fontSize={10}
          valueSuffix="%"
          maxValue={100}
          title='Score'
          titleFontSize={22}
          titleColor='#fff'
          inActiveStrokeColor="#fff"
          subtitleColor='#fff'
          activeStrokeColor="#00BFFF"
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={7}
          activeStrokeWidth={7}
          duration={5000}
        
        />
          </TouchableOpacity>
     
      <View className="flex-col justify-between items-center">
    <TripsDesc km='4.30' disc='HOURS'/>
    <TripsDesc km='3' disc='DANGEROUS' dis='MINU.'/>
      </View>
      </View>
    {/* NEXT PREV TAP */}
    <View className=" flex-row m-3 justify-between">
      <View className="flex-row items-center">
      <Ionicons name="chevron-back" size={24} color="white" />
        <Text className="text-white">PREV </Text>
      </View>
      <TouchableOpacity  onPress={()=>navigation.navigate('Home')}>
      <Text className="text-white text-lg">Today</Text>
      </TouchableOpacity>
      <View className="flex-row items-center">
      <Ionicons name="chevron-forward" size={24} color="white" />
        <Text className="text-white">NEXT </Text>
      </View>
    </View>
    <View className="flex-row items-center">
    <View className="h-0.5 flex-1 bg-white"></View>
    <View className="h-0.5 flex-1 bg-white"></View>
    </View>

{/* wiew details */}
<ScrollView className="m-5 " showsVerticalScrollIndicator={false}>
 
 {

dds.map((items,index)=>{
  return(
 <TripsToday key={index} trip={items}  accel={items.accel} brake={items.brake} disk={items.disk} speed={items.speed}/>
  )
 
 })



}
  
</ScrollView>

  </SafeAreaView>
  )
}

export default Trips