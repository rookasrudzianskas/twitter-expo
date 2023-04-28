//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import tweets from '../../assets/data/tweets'
import Tweet from "../../components/Tweet";
import {useSearchParams} from "expo-router";

export default function TweetScreen() {
  const {id} = useSearchParams()
  const tweet = tweets.find((tweet) => tweet.id === id)
  return <View className="flex flex-col h-full bg-white"><Tweet tweet={tweet} /></View>
}
