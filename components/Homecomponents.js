import { View, Text } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,FontAwesome5,Ionicons,Feather}from '@expo/vector-icons'
const HomeEngDetai= ({name,time,icon,icont,iconalert}) => {
    return (
      <View className="flex-row items-center justify-center">
        <MaterialCommunityIcons name={icon} size={34} color="white" />
        <Feather name={iconalert} size={34} color="orange" />
        <FontAwesome5 name={icont} size={34} color="red" />
         <View  className="ml-1 items-center  flex-col justify-center">
         <Text className="text-white text-center">{name} </Text>
          <Text className="text-orange-500 text-center" >{time}</Text>
         </View>
          </View> 
    )
  }
const HomeEng = ({name,pers,icon,dot}) => {
  return (
    <View className="flex-row items-center">
        <View className="flex-col items-center pr-5">
        <Text className="text-gray-300 text-base">{name}</Text>
        <Text className="text-green-400 text-sm">{pers}</Text>
        </View>
        <MaterialCommunityIcons name={icon} size={54} color="lightgray" />
        <FontAwesome5 name={dot} size={54} color="darkorange" />
        </View>
  )
}
const EngineDetsub=({name,desc,icon,batteri})=>{   
   return(
    <View className="flex-row items-center justify-center py-2">
        <MaterialCommunityIcons name={icon} size={34} color="lightgreen" />
        <MaterialCommunityIcons name={batteri} size={30} color="darkorange" />
    <View className="flex-col items-center">
    <Text className="text-gray-300 text-xs">{name}</Text>
    <Text className="text-green-400 text-sm">{desc}</Text>
    </View>
    </View>
   )
}
const FuelEff=({name,desc})=>{
    return(
        <View className="flex-row items-center justify-center py-1">
    <View className="flex-col items-center justify-center">
    <Text className="text-gray-300 text-base font-bold">{name}</Text>
    <Text className="text-orange-500 text-lg font-bold">{desc}</Text>
    </View>
    </View>
    )
}
const FuelEff2=({name,desc,icon})=>{
    return(
        <View className="flex-row items-center justify-center py-1">
    <View className="flex-col items-center justify-center">
    <Text className="text-gray-300 text-base font-bold">{name}</Text>
    <View className="flex-row items-center">
    <Text className="text-sky-500 text-lg font-bold">{desc}</Text>
    <MaterialCommunityIcons name={icon} size={30} color="orange" style={{paddingLeft:15}}/>
    </View>
    </View>
    </View>
    )
}
export {HomeEng,EngineDetsub,FuelEff,FuelEff2,HomeEngDetai}