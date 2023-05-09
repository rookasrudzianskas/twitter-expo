//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import tweets from '../../../../../assets/data/tweets'
import Tweet from "../../../../../components/Tweet";
import {useSearchParams} from "expo-router";
import {useQuery} from "@tanstack/react-query";
import {getTweet} from "../../../../../lib/api/tweets";

export default function TweetScreen() {
  const {id} = useSearchParams()
  // const tweet = tweets.find((tweet) => tweet.id === id)
  const { data, isLoading, error } = useQuery({
    queryKey: ['tweet', id],
    queryFn: () => getTweet(id as string),
  })

  if(isLoading) {
    return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>
  }

  if(error) {
    return <View className="h-screen flex items-center justify-center"><Text>{error.message}</Text></View>
  }

  return <View className="flex flex-col h-full bg-white"><Tweet tweet={data} /></View>
}
