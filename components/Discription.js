import { View, Text } from 'react-native'
import React from 'react'

const Discription = ({minute,first ,second}) => {
  return (
    <View className="flex-col items-center justify-center">
    <Text className="text-2xl text-gray-500">{minute }</Text>
    <Text className="text-lg text-gray-500">{first }</Text>
    <Text className="text-lg text-gray-500">{second }</Text>
  </View>
  )
}

export default Discription