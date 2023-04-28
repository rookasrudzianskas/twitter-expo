//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import tweets from '../assets/data/tweets'
import Tweet from "../components/Tweet";

export default function TweetScreen() {
  return <View className="flex flex-col h-full bg-white"><Tweet tweet={tweets[0]} /></View>
}
