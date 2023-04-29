// @ts-nocheck
import React from 'react';
import {Image, TouchableOpacity, View, Text} from "react-native";
import {AntDesign, EvilIcons, Feather} from "@expo/vector-icons";
import {Link, useRouter} from 'expo-router';


const Tweet = ({tweet}) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/feed/tweet/${tweet.id}`)} activeOpacity={0.9} className="flex flex-row my-3 mx-5">
      <View>
        <Image src={tweet.user.image} className="w-12 h-12 rounded-full" />
      </View>
      <View className="ml-3">
        <View className="flex flex-col">
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
        <View className="mt-1 w-[310px]">
          <Text className="text-[15px]">{tweet.content}</Text>
        </View>
        {tweet.image && (
          <View className="mt-3">
            <Image src={tweet.image} className="h-40 w-full rounded-2xl" />
          </View>
        )}
        <View className="mr-5 mt-3">
          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center space-x-1 text-[#a0a1a7]">
              <Feather name="message-circle" size={18} color="#a0a1a7" />
              <Text className="text-[#a0a1a7] text-[14px]">{tweet.numberOfComments || 0}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center space-x-1 text-[#a0a1a7]">
              <EvilIcons name="retweet" size={26} color="#a0a1a7" />
              <Text className="text-[#a0a1a7] text-[14px]">{tweet.numberOfRetweets || 0}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center space-x-1 text-[#a0a1a7]">
              <AntDesign name="hearto" size={16} color="#a0a1a7" />
              <Text className="text-[#a0a1a7] text-[14px]">{tweet.numberOfLikes || 0}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center space-x-1 text-[#a0a1a7]">
              <Feather name="bar-chart-2" size={19} color="#a0a1a7" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center space-x-1 text-[#a0a1a7]">
              <Feather name="share" size={16} color="#a0a1a7" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Tweet;
// by Rokas with ❤️
