import { View, Text,SafeAreaView,TouchableOpacity,StatusBar, Button,Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker,Polygon,Polyline,Heatmap} from "react-native-maps";
import {SimpleLineIcons,AntDesign}from '@expo/vector-icons'
import { Test, TripeDEtailsIcons,TripsDesc} from '../components/TripsToday';
import MapViewDirections from 'react-native-maps-directions';
import {locations} from '../Data'
const TripDetails = ({navigation,route}) => {
  const {accel,brake,disk,speed,fromLoc,toLoc,trip,time}=route.params
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
      longitudeDelta: 0.0421,
    }
  
  }  )
  const {pickupCords,droblocationCors}=state
  useEffect(()=>{
    let flatitude=''
   let  flongitude=''
   let llatitude=''
   let  llongitude=''
  for(let i=0;i<trip.items.length;i++){
// console.log(trip.items[0].latitude);
// console.log(trip.items[0].longitude);
flatitude=Number(trip.items[0].latitude)
flongitude=Number(trip.items[0].longitude)
llatitude=Number(trip.items[trip.items.length-1].latitude)
llongitude=Number(trip.items[trip.items.length-1].longitude)

  }
    setState({
      pickupCords:{
      latitude:flatitude,
      longitude:flongitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
        } ,droblocationCors:{
          latitude:llatitude,
      longitude:llongitude, 
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
        }
    })
  },[])
  return (
    <SafeAreaView className="bg-bg-primary flex-1">
        <StatusBar barStyle={'light-content'}/>
    <View className=" max-h-[60%]">
     <Image source={require('../assets/map.png')} className="w-full h-full" />
      {/* <MapView className="w-full h-full "
     provider="AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4"
     key="AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4"
     initialRegion={droblocationCors}
      >
      <Marker coordinate={pickupCords}
         key="AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4"
      />
      <Marker coordinate={droblocationCors}
         key="AIzaSyBbYy-NXqUjrk0_ZXFK7hwYVvH-vTe29M4"
      />
      {
            <Polyline coordinates={trip.items}  strokeWidth={6} strokeColor='#FF0000' />
         
      }

      </MapView> */}

    </View>
    <View className="m-3">
        <Text className="text-white text-base">{`${time.slice(0,10)} , ${time.slice(11,16)}`}</Text>
        <View className="bg-slate-600 py-3 px-1 rounded-md mt-3">
            <Test name={fromLoc} icon='md-location-sharp'/>
            <Test name={toLoc} icon='location-outline'/>
        </View>
        {/*  */}
        <View className="bg-slate-600 py-1 px-1 rounded-md mt-3 ">

  <View className="flex-row justify-around">
       <TripeDEtailsIcons name='Avg speed ' time={speed } icon='speedometer-outline'/>
        <Text className="h-full bg-slate-300 w-0.5"/>
        <TripeDEtailsIcons name='Duration ' time="00:30" icon='timer'/>
        <Text className="h-full bg-slate-300 w-0.5"/>
        <TripeDEtailsIcons name="Distance " time='43km' time43km icon='ios-location'/>
  </View>
  <Text className="h-0.5 w-full  bg-slate-300 mt-3"/>
  <View className="flex-row justify-around my-1">
  <TripsDesc dis='Hard' disc='Brakes' km={brake}/>
  <Text className="h-full bg-slate-300 w-0.5"/>

  <View className="items-center flex-row justify-center">
  <AntDesign name="exclamationcircleo" size={34} color="red" />
     <View className="items-center pl-2">
     <Text  className="text-white text-base"> Dangerous Min. </Text>
      <Text className="text-white text-lg">3</Text>
     </View>
    </View>
  <Text className="h-full bg-slate-300 w-0.5"/>
  <TripsDesc dis='Harsh' disc='Accel.' km={accel}/>
  </View>


      </View>
   
    </View>

    </SafeAreaView>
  )
}

export default TripDetails