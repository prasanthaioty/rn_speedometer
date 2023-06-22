import { View, Text,StatusBar, Image, TouchableOpacity, KeyboardAvoidingView, } from 'react-native'
import React from 'react'
import TextInputs from '../components/TextInput'
const Profile = ({navigation}) => {
  return (
    <View className="bg-bg-primary flex-1 py-10 px-14">
    <StatusBar barStyle={'light-content'}/>
    <KeyboardAvoidingView>

    <View className=" items-center ">
      <Image source={require('../assets/profile.jpg')} style={{borderWidth:4,borderColor:'skyblue'}} className="w-40 h-40 rounded-full"/>
      <Text className="text-white text-lg">Change Profile</Text>         
    </View>

    <View className="">
    <TextInputs icon='user' placename='Mobile number '/>
    <TextInputs icon='mail' placename='Jhonewick@gmail.com '/>
    <TextInputs icon='phone-call' placename='#91 9864323456 '/>
    </View>
    <TouchableOpacity className="bg-sky-400 py-2 px-5 mt-20 mx-14 rounded-lg"
      onPress={()=>navigation.navigate("Tabs")}>
      <Text className="text-lg text-black font-bold text-center">Update</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  )
}

export default Profile