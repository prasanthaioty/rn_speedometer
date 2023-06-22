import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,AntDesign}from '@expo/vector-icons'

import { EngineDetsub, FuelEff, FuelEff2, HomeEng, HomeEngDetai } from '../components/Homecomponents'
import Testing from './Testing'
import Minspeedometer from "../components/Minspeedometer";
import Maxspeedometer from "../components/Maxspeedometer";

const Home = () => {
  return (
    <ScrollView className="bg-bg-primary flex-1 "  showsVerticalScrollIndicator={false}>
     <View className="m-3 mx-2">
        <View className="flex-row items-center">
        <MaterialCommunityIcons name="motorbike-electric" size={40} color="white" />
            <Text className="text-gray-300 text-lg font-bold pl-3">Hunder 350</Text>
        </View>
        <View className="flex-row justify-around py-1 mx-8">
       <HomeEngDetai name='Avg speed' time='0km/h' icon='fuel' className="pl-5"/>
       <Image source={require('../assets/bike-1.png')} className="h-56 w-60 mx-2 mt-2" style={{   resizeMode: 'contain',}}/>
        <View className="flex-col justify-around items-center my-7  pl-5">
        <HomeEngDetai name='Engine Temp.' time='Not Avaliable' icont='temperature-low'/>
        <HomeEngDetai name='Errors' time='3 issues' iconalert="alert-triangle"/>
        </View>
        </View>
        <Text className="text-orange-500 text-center pt-5 font-medium text-base">-- Your bike is in good shape --</Text>
    {/* SPeed meters */}
    <View className="flex-row justify-between items-center py-10 mt-1 mx-2">
       {/* <Image source={require('../assets/meter3.png')} className="object-fit h-44 w-44"/> */}
     <View>
     <Image
          source={{
            uri:
              "https://www.pngall.com/wp-content/uploads/13/Speedometer-Car-PNG-Pic.png"
          }}
          style={{ width: 200, height: 200 }}
        />
        <View style={{ position: "absolute", top: 80, left: -5}}>
          <Maxspeedometer  
             size={200}
             value={120} 
             easeDuration={500}

              />
        </View>
     </View>
     <View>
     <Image
          source={{
            uri:
              "https://www.pngall.com/wp-content/uploads/13/Speedometer-Car-PNG-Pic.png"
          }}
          style={{ width: 170, height: 170 }}
        />
        <View style={{ position: "absolute", top: 65, left: -5}}>
          <Minspeedometer  
             size={170}
             value={200} 
             easeDuration={500}
              />
        </View>
     </View>
       {/* <Image source={require('../assets/meter3.png')} className="object-fit h-36 w-36"/> */}
    </View>
    <View className="mt-5 bg-gray-600 py-3 px-2">
        <Text className="text-white font-bold text-base">Engine Details</Text>
  <Text className="h-0.5 w-full  bg-slate-900 mt-3"/>
<View className="flex-row justify-between mx-1">
<HomeEng name="Status" pers="NA" icon="engine"/>
<Text className="h-14 w-0.5  bg-slate-900 mt-3"/>
<HomeEng name="Load" pers="0 %" dot='dot-circle'/>
</View> 
       {/*  */}
     
        <View className="flex-row justify-between items-center">
            <EngineDetsub icon='water' name='Coolant Temp .' desc='0 C'/>
            <EngineDetsub batteri='car-battery' name='Coolant Temp .' desc='0 C'/>
            <EngineDetsub batteri='oil' name='Oil Condition .' desc='Optimal'/>
        </View>
    </View>
    {/* <BOx 2 details > */}
 
    <View className="mt-5 bg-gray-600 py-3 px-2">
        <View className="flex-row justify-between items-center">
        <Text className="text-white font-bold text-base flex-1">Duel Efficiency</Text>
        <Text className="text-orange-400 font-bold text-base pr-3">Last 7 days</Text>
        <AntDesign name="down" size={24} color="white" />
        </View>
  <Text className="h-0.5 w-full  bg-slate-900 mt-3"/>
<View className="flex-row justify-between mx-1">
<FuelEff  name='Fuel Present .' desc='0 Ltr.'/>
<FuelEff  name='Last Trip .' desc='0 Km/L'/>
<FuelEff  name='All time avg. .' desc='0 Km/L'/>


</View> 
       {/*  */}
     
        <View className="flex-row justify-between items-center mx-10">
            <FuelEff2 name='Fuel Refueled' desc="0 Ltr."icon="lead-pencil"/>
            <FuelEff2 name='Fuel Consumed' desc="0 Ltr."/>

        </View>
    </View>
    </View>
    
    </ScrollView>
  )
}

export default Home