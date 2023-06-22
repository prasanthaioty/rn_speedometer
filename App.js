import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Verification from './screens/Verification'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Vitals from './screens/Vitals'
import Trips from './screens/Trips'
import Profile from './screens/Profile'
import CrashDetect from './screens/CrashDetect'
import Offers from './screens/Offers'
import {Entypo,FontAwesome,Ionicons}from '@expo/vector-icons'
import TripDetails from './screens/TripDetails'
import Home from './screens/Home'
import Flash from './screens/Flash'
import Testing from './screens/Testing'
const Stack=createNativeStackNavigator()
const Tab=createMaterialTopTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
      <Stack.Screen name='Testing' component={Testing} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name='Login' component={Login} options={{
          headerShown:false,
          presentation:'containedTransparentModal',
        }}/>
        <Stack.Screen name='Verification' component={Verification} options={{
          headerShown:false,
          presentation:'modal',
        }}/>
        <Stack.Screen name='Vitals' component={Vitals} options={{
          headerShown:false,
          presentation:'modal',
        }}/>
        <Stack.Screen name='Trips' component={Trips} options={{
          headerShown:false,
          presentation:'modal',
        }}/>
          <Stack.Screen name='Offers' component={Offers} options={{
          headerShown:false,
          presentation:'modal',
        }}/>
        <Stack.Screen name='Crash' component={CrashDetect} options={{
          headerShown:false,
        }}/>
     
     <Stack.Screen name='Profile' component={Profile} options={{
         title: 'Profile', 
          headerStyle: {
           backgroundColor: 'rgba(35,47,58,255)',
          },  headerTintColor: '#fff',
          headerTitleAlign:'left',
          headerBackVisible:false,


        }}/>
         <Stack.Screen name='Home' component={Home} options={{
         title: 'RE Connect', 
         headerBackTitleVisible:false,
         headerBackVisible:false,
          headerStyle: {
           backgroundColor: 'rgba(16,24,33,255)',
          },  headerTintColor: '#fff',
          headerRight: () => (
            <View className="flex-row items-center">
            <TouchableOpacity  className="px-2">
            <Ionicons name="notifications-outline" size={30} color="lightgray" />
            </TouchableOpacity>
            <TouchableOpacity className="px-2">
            <Entypo name="info-with-circle" size={28} color="orange" className="font-bold"/>
            </TouchableOpacity>
            </View>
          ),
          headerLeft:   () => { 
            return (
            <TouchableOpacity className="pr-3">
              <FontAwesome name="navicon" size={24} color="white" />
            </TouchableOpacity>
        )}
        }}/>  
        <Stack.Screen name='TripsDetails' component={TripDetails} options={{
          headerStyle: {
            backgroundColor: 'rgba(16,24,33,255)',
           },  headerTintColor: '#fff',
        }}/>
         <Stack.Screen name='Tabs' component={TabNavigator} options={{
          title: 'RE Connect', 
          headerBackVisible:false,
            headerStyle: {
            backgroundColor: 'rgba(16,24,33,255)',
          },  headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   headerRight: () => (
            <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>
          ), 
            headerBackTitleVisible:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}
const TabNavigator = () => {
  return (

     <Tab.Navigator initialRouteName='Vitals'      screenOptions={{
      lazy: true,
      tabBarPressOpacity: 1,
      tabBarPressColor: '#0000',
      tabBarContentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      }
      
    }}>
      
    <Tab.Screen name='Trips' component={Trips} options={{
       tabBarStyle:{
        backgroundColor:'#fff',
        height:35,
        
      },
    }}/>
    <Tab.Screen name='Vitals' component={Vitals} options={{
       tabBarStyle:{
        backgroundColor:'#fff',
        height:30,
      },
    }}/>
    <Tab.Screen name='Offers' component={Offers} options={{
       tabBarStyle:{
        backgroundColor:'#fff',
        height:30,
        
      },
    }}/>
   </Tab.Navigator>

  
  )
}

const style = StyleSheet.create({
  tabBarStyle: {
    alignSelf: "center",
    flexDirection: "row",
  },
  tabBarItemStyle: {
    width: "auto",
  }
})
export default App


