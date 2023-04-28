// @ts-nocheck
import React from 'react';
import {Text, View} from "./Themed";
import {Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";

const Tweet = ({tweet}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} className="flex flex-row p-5">
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
              <Feather name="more-horizontal" size={20} color="#a0a1a7" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="pr-5 mt-1">
          <Text className="text-[15px]">{tweet.content}</Text>
        </View>
        {tweet.image && (
        <View className="pr-5 mt-3">
          <Image src={tweet.image} className="h-40 rounded-2xl w-full pr-5" />
        </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Tweet;
// by Rokas with ❤️
