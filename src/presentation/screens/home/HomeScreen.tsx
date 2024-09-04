import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import type { RootStackParams } from '../../routes/StackNavigator'

export const HomeScreen = () => {

  console.log('Iniciando..');

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View>
        <PrimaryButton 
          onPress={ () => navigation.navigate('Products') }
          label='Productos' 
        />
        <PrimaryButton 
          onPress={ () => navigation.navigate('About') } 
          label='SpeedTracker'
        />
        <PrimaryButton 
          onPress={ () => navigation.navigate('Settings') }
          label='Settings'
        />

    </View>
  )
}
