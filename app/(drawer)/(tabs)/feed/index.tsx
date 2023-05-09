// @ts-nocheck
import { Text, View } from '../../../../components/Themed';
import {Image, TouchableOpacity, FlatList} from "react-native";
import {Feather} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {Link, useRouter} from 'expo-router';
import Tweet from "../../../../components/Tweet";


export default function TabOneScreen() {
  const router = useRouter()
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const fetchTweets = async () => {
      // fetch the tweets
      const url = 'http://localhost:3000/tweet';
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo2fQ.FOgqCYFyq9B-OREo6n5Ttu-m9WO8LYuezDLybm0W2FY';
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      console.log(res);
    }
    fetchTweets()
  }, [])

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
