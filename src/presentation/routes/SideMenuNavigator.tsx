import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } 
  from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalColors } from '../themes/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => { 

  const dimensins = useWindowDimensions();
  return (
    <Drawer.Navigator 

      drawerContent={ (props) => <CustomDrawerContent { ...props } />}

      screenOptions={{
        headerShown: false,
        drawerType: (dimensins.width >= 758) ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 15,
          paddingHorizontal: 15
        }
      }}
    >
      {/*<Drawer.Screen name="StackNavigator" component={ StackNavigator } />*/}
      <Drawer.Screen name="Tabs" component={ BottomTabNavigator } />
      <Drawer.Screen name="Profile" component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = ( props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50
      }} ></View>

      <DrawerItemList { ...props } />

      <Text>Salir</Text>

    </DrawerContentScrollView>
  );
}