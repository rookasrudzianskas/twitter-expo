// @ts-nocheck
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs, useNavigation} from 'expo-router';
import {Image, Pressable, TouchableOpacity, useColorScheme} from 'react-native';

import Colors from '../../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export const AvatarHeader = () => {
  const navigation = useNavigation();
  const user = {
      id: 'u1',
      username: 'byrookas',
      name: 'Rokas Rudzianskas',
      image:
        'https://pbs.twimg.com/profile_images/1595750905537871873/DMcn47S6_400x400.jpg',
    };

  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.7} className="ml-6">
      <Image src={user.image} className="h-7 w-7 rounded-full" />
    </TouchableOpacity>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <AvatarHeader />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
