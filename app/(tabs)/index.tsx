// @ts-nocheck
import { Text, View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';
import {Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
  const tweet = tweets[0];
  return (
    <View className="h-full">
      <Tweet tweet={tweet} />
    </View>
  );
}
