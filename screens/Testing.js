import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import axios from '../axios'
const Testing = () => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
useEffect(()=>{
const live=async()=>{
  const result=await axios.get('/device/live')
  setLat(result.data.data[0].latitude);
  setLon(result.data.data[0].longitude);                    
}             
live()
},[])
console.log(lat,lon);
    return (
     <View>
      
     </View>
    )
    }
  

export default Testing