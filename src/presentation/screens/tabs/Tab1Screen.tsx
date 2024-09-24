import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu";

export const Tab1Screen = () => {

  const navigation = useNavigation();


  return (
    <View>
        <HamburgerMenu />
        <Text>Tab1Screen</Text>
    </View>
  )
}
