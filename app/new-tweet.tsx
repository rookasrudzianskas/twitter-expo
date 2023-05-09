//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTweet} from "../lib/api/tweets";

const NewTweet = () => {
  const [text, setText] = useState<string>('')
  const user = {
    id: 'u1',
    username: 'byrookas',
    name: 'Rokas Rudzianskas',
    image:
      'https://pbs.twimg.com/profile_images/1595750905537871873/DMcn47S6_400x400.jpg',
  }
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, error } = useMutation({
    mutationFn: createTweet,
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ['tweets'] })
      queryClient.setQueriesData(['tweets'], (old) => {
        return [
          data,
          ...old,
        ]
      })
    }
  })

  const onTweetPress = async () => {
    try {
      await mutateAsync({ content: text })
      setText('');
      router.back();
    } catch (error) {
      console.log(error)
    }
  }

  if(isLoading) {
    return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>
  }

  if(error) {
    return <View className="h-screen flex items-center justify-center"><Text>{error.message}</Text></View>
  }

  return (
    <View className="h-screen bg-white pt-16 px-5">
      <View className="w-full flex flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()} className="" activeOpacity={0.7}>
          <Text className="text-[15px]">Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onTweetPress} className="bg-[#1da1f2] px-5 py-2 rounded-full" activeOpacity={0.7}>
          <Text className="text-[15px] text-white font-bold">Tweet</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-start mt-6 w-full">
        <Image className="w-10 h-10 rounded-full" source={{uri: user.image}} />
        <View className="flex flex-col ml-3 flex-1 h-36">
          <View className="flex flex-row border mt-1 inline-flex w-[80px] items-center justify-center space-x-1 rounded-full border-2 border-[#1da1f2]">
            <Text className="text-[#1da1f2] font-semibold">Public</Text>
            <Ionicons name="chevron-down-sharp" size={18} color="#1da1f2" />
          </View>
          <TextInput
            placeholder={'What is happening'}
            className="text-[14px] mt-2 w-full"
            multiline
            numberOfLines={5}
            style={{flex: 1}}
            value={text}
            onChangeText={setText}
          />
        </View>
      </View>
    </View>
  );
};

export default NewTweet;
