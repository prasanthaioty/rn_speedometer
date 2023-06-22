import { View, Text,SafeAreaView,TextInput,TouchableOpacity,StatusBar} from 'react-native'
import React, { useState } from 'react'

const Verification = ({navigation}) => {
const [n1, setN1] = useState(0)
const [n2, setN2] = useState(0)
const [n3, setN3] = useState(0)
const [n4, setN4] = useState(0)
const [validError, setValidError] = useState("")
  const handleSubmite=()=>{
if(n1==0,n2==0,n3==0,n4==0){
  navigation.navigate("Tabs")
}else{
setValidError(" * Enter The Valid OTP")
}
  } 

  return (
    <SafeAreaView className="pt-5 flex-1 bg-bg-primary">
        <StatusBar barStyle={'light-content'}/>

      <View className="mt-24 flex-col justify-center items-center">
        <View className="flex-col justify-center items-center">
        <Text className="text-white text-3xl ml-14">Verification Code</Text>
        <Text className="text-white mt-4 text-lg">We have send OTP on you number</Text>
        <Text className="text-white mt-1 text-lg">+919876432690</Text>
        </View>
        <View className="flex-row mt-16">
          <TextInput placeholder='0'  onChangeText={(t)=>{setN1(t)}}  placeholderTextColor='white' className="text-3xl mx-3 border-b-4 text-white border-white px-2 py-1" />
          <TextInput placeholder='0' onChangeText={(t)=>{setN2(t)}}  placeholderTextColor='white' className="text-3xl mx-3 border-b-4 text-white border-white px-2 py-1"/>
          <TextInput placeholder='0' onChangeText={(t)=>{setN3(t)}}  placeholderTextColor='white' className="text-3xl mx-3 border-b-4 text-white border-white px-2 py-1"/>
          <TextInput placeholder='0' onChangeText={(t)=>{setN4(t)}}  placeholderTextColor='white' className="text-3xl mx-3 border-b-4 text-white border-white px-2 py-1"/>
        </View>
        <View className="items-center">
        <Text className="text-rose-600 text-lg pt-3 font-medium">{validError}</Text>
        <Text className="text-white mt-3 text-lg">Resend_OTP</Text>
        <TouchableOpacity className="bg-white mt-8 px-2 mx-0 py-2 rounded-md  items-center"
            onPress={handleSubmite}
            >
                <Text className="text-bg-primary text-2xl font-bold">Submite</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    
    </SafeAreaView>
  )
}

export default Verification