import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import type { RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../themes/theme'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'

export const HomeScreen = () => {

  console.log('Iniciando..');

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  /*
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])
  */

  return (
    <View style={ globalStyles.container}>

        <HamburgerMenu />
        
        <PrimaryButton 
          onPress={ () => navigation.navigate('Products') }
          label='Productos' 
        />
        <PrimaryButton 
          onPress={ () => navigation.navigate('SpeedLimit') }
          label='SpeedLimit' 
        />
        <PrimaryButton 
          onPress={ () => navigation.navigate('About') }
          label='About'
        />
        <PrimaryButton 
          onPress={ () => navigation.navigate('Settings') }
          label='Settings'
        />

    </View>
  )
}
