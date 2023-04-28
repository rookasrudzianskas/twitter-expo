// @ts-nocheck
import { Text, View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';
import {Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";

export default function TabOneScreen() {
  const tweet = tweets[0];
  return (
    <View className="h-full">
      <View className="flex flex-row p-5">
        <View>
          <Image src={tweet.user.image} className="w-12 h-12 rounded-full" />
        </View>
        <View className="ml-3 pr-5">
          <View className="flex flex-col pr-5">
            <View className="flex flex-row w-full">
              <View className="flex flex-row items-center flex-1">
                <Text className="font-bold text-[16px]">{tweet.user.name}</Text>
                <Text className="mx-1 text-[#a0a1a7]">•</Text>
                <Text className="text-[16px] text-[#a0a1a7]">2h</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Feather name="more-horizontal" size={24} color="#a0a1a7" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="pr-5">
            <Text className="text-[15px]">{tweet.content}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
