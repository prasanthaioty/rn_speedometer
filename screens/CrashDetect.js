import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
const CrashDetect = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-bg-primary flex-1">
      <StatusBar barStyle={"light-content"} />

      <View className=" max-h-[50%]">
      <Image source={require('../assets/map.png')} className="w-full h-full" />
        {/* <MapView
          className="w-full h-full "
          initialRegion={{
            latitude: 13.085776704024342,
            longitude: 80.27553104071309,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: 13.085776704024342,
              longitude: 80.27553104071309,
            }}
            title="Chennai"
            description="Tamilnadu Capital is Chennai"
            identifier="origin"
            pinColor="#E33342"
          />
        </MapView> */}
      </View>
      <View className="flex-col justify-center items-center py-3">
        
        <FontAwesome name="warning" size={90} color="gray" />
        <Text className="pt-1 text-gray-400 text-2xl font-bold">
          Crash detected !
        </Text>
        <Text className=" text-gray-400 text-lg ">
          it looks like you were in a collision
        </Text>
        <TouchableOpacity className="pt-3">
        <CircularProgress
          radius={70}
          value={49}
          textColor="#FFA500"
          fontSize={10}
          valueSuffix="%"
          maxValue={100}
          inActiveStrokeColor="#fff"
          activeStrokeColor="#CC5500"
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={7}
          activeStrokeWidth={7}
  
          duration={5000}
        
        />
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-3 px-5 py-1 items-center text-center rounded-lg bg-orange-600"
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text className="text-white text-xl">Dismisss</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CrashDetect;
