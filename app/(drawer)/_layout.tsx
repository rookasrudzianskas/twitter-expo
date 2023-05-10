// @ts-nocheck
import { Stack, withLayoutContext } from "expo-router";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {useAuth} from "../../context/AuthContext";

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text className="text-2xl font-bold pl-20">Hello, Rokas!</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
export default function DrawerLayout() {
  const {authToken} = useAuth();

  if(!authToken) {
    return (
      <View className="h-screen flex items-center justify-center">
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
      <Drawer.Screen name="bookmarks" options={{ headerShown: false, title: 'Bookmarks' }} />
      <Drawer.Screen name="twitter-blue" options={{ headerShown: false, title: 'Twitter Blue' }} />
    </Drawer>
  )
}
