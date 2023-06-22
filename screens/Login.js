import { View, Text,TextInput,TouchableOpacity,StatusBar } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons,Feather,FontAwesome5,Ionicons} from '@expo/vector-icons'
import axios from '../axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState("")
  const [passError, setPassError] = useState("")
  const [status, setStatus] = useState()
  const handleEmail=async()=>{
    if(email==""){
      setEmailError("* Please enter Email") 
 
    }else{
      setEmailError("")
  }
}
const handlePassword=()=>{
  if(password==""){
    setPassError("* Please enter Password")
  }else{
    setPassError("")
  }
}
  const handleLogin=async()=>{
    if(!email==""&&!password==""){
      const result=await axios.post('user/login',{
        username:email,password
      })
      if(result.data.success==true){
        setStatus(result.data.message)
      storeData(result.data.user.username.split('@')[0]);
      navigation.navigate("Verification")
      }else{
        setStatus(result.data.message)
      }
    }else{
      handleEmail(),handlePassword()
    }

  }
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('user', value)
    } catch (e) {
      
    }
  }
  return (
    <View className="bg-bg-primary flex-1">
        <StatusBar barStyle={'light-content'}/>

      <View className="p-14 ">
        <Text className="text-white items-center text-center text-4xl pt-14 font-bold">RE Connect</Text>
        <View className="pt-28 flex-col justify-center">
            <View className=" flex-row space-x-3 text-center items-center border-b-2 border-cyan-50 pb-2">
            <MaterialCommunityIcons name="email-outline" size={24} color="white" />
                <TextInput placeholder='Email Id' placeholderTextColor='white' className="text-lg text-white" onChangeText={(text)=>setEmail(text)} onBlur={handleEmail}/>
            </View>
            <Text className="text-rose-600 text-lg pt-2 font-medium">{emailError}</Text>
           
            <View className=" flex-row space-x-3 mt-8 text-center items-center border-b-2 border-cyan-50 pb-2">
            <Feather name="phone-call" size={24} color="white" />
                <TextInput placeholder='Mobile number ' placeholderTextColor='white' className="text-lg text-white" onChangeText={(text)=>setPassword(text)} onBlur={handlePassword}/>
            </View>
            <Text className="text-rose-600 text-lg pt-2 font-medium">{passError}</Text>
            <Text className="text-sky-400 text-xl ml-16 pt-0 font-medium">{status}</Text>

            <TouchableOpacity className="bg-white mt-5 px-2 mx-0 py-2 rounded-md  items-center"
            onPress={handleLogin}
            >
                <Text className="text-bg-primary text-3xl font-bold">Login</Text>
            </TouchableOpacity>
            <View className="flex-col justify-center mt-20 items-center">
                <Text className="text-white text-xl font-bold">OR connect with</Text>
                <View className="mt-3 flex-row space-x-4 justify-center items-center">
                    <TouchableOpacity>
                <Ionicons name="md-logo-facebook" size={50} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome5 name="google-plus-square" size={50} color="white" />
                </TouchableOpacity>

                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Login