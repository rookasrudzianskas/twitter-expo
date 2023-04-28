// @ts-nocheck
import { Text, View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';
import {Image, TouchableOpacity, FlatList} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
  return (
    <View className="h-full">
      <FlatList
        data={tweets}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Tweet tweet={item} />}
      />
    </View>
  );
}
