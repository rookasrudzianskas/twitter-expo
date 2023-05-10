// @ts-nocheck
import { Text, View } from '../../../../components/Themed';
import {Image, TouchableOpacity, FlatList, Alert, ActivityIndicator} from "react-native";
import {Feather} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {Link, useRouter} from 'expo-router';
import Tweet from "../../../../components/Tweet";
import {useTweetsApi} from "../../../../lib/api/tweets";
import {useQuery} from "@tanstack/react-query";


export default function TabOneScreen() {
  const router = useRouter()
  const [tweets, setTweets] = useState([])
  const { listTweets } = useTweetsApi()

  const { isLoading, error, data } = useQuery({
    queryKey: ['tweets'],
    queryFn: listTweets,
  })

  if(isLoading) {
    return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>
  }

  if(error) {
    return <View className="h-screen flex items-center justify-center"><Text>{error.message}</Text></View>
  }

  return (
    <View className="h-full">
      <FlatList
        data={tweets}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Tweet tweet={item} />}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/new-tweet')} className="absolute bottom-4 flex items-center justify-center right-6 w-16 h-16 rounded-full bg-[#1da1f2]">
        <Feather name="plus" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
}
