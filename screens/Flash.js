import { View,Image, Text,SafeAreaView} from 'react-native'
import React from 'react'

const Flash = () => {
  return (
    <SafeAreaView className=" flex-1 bg-bg-primary text-white">
   <View className="flex-col justify-center text-center items-center h-screen">
      <Image source={require('../assets/logo.png')} className="h-56 w-56 " style={{   resizeMode: 'stretch'}}/>
      <View style={{marginBottom:-10}}>
      <Image source={require('../assets/logotext.png')} className="h-64 w-64" style={{   resizeMode: 'contain',}}/>

      </View>
   </View>
    </SafeAreaView>
  )
}


export default Flash