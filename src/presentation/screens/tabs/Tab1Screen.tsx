import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu";
import { IonIcon } from "../../components/shared/IonIcon";

export const Tab1Screen = () => {

  const navigation = useNavigation();


  return (
    <View>
        <HamburgerMenu />
        <Text>Tab1Screen</Text>
        {/*<Icon name="rocket-outline" size={30} color="#900" />*/}
        <IonIcon name = 'rocket-outline' size={30} color='blue' />
    </View>
  )
}
