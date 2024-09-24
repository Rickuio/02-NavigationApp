import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { SpeedLimit } from '../screens/speed/SpeedLimit';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStackParams = {
  Home: undefined,
  Product: { id:number, name: string },
  Products: undefined,
  Settings: undefined,
  About: undefined,
  SpeedLimit: undefined
}

//const Stack = createStackNavigator();
const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    })
  }, [])
  
  return (
    <Stack.Navigator screenOptions={ {
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    } }>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Products" component={ ProductsScreen } />
      <Stack.Screen name="Product" component={ ProductScreen } />
      <Stack.Screen name="Settings" component={ SettingsScreen } />
      <Stack.Screen name="SpeedLimit" component={ SpeedLimit } />
      <Stack.Screen name="About" component={ AboutScreen } />
    </Stack.Navigator>
  );
}