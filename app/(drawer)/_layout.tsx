import { Stack, withLayoutContext } from "expo-router";
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};
export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
    </Drawer>
  )
}
