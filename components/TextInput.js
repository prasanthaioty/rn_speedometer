import { View, Text,TextInput } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,Feather,FontAwesome5,Ionicons} from '@expo/vector-icons'

const TextInputs = ({icon,placename}) => {
  return (
    <View className=" flex-row space-x-3 mt-10 border-b-2 border-gray-400 pb-2">
            <Feather name={icon} size={24} color='lightgray' />
                <TextInput placeholder={placename} placeholderTextColor='lightgray' className="text-lg text-white pl-2"/>
            </View>
  )
}

export default TextInputs