import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { Tab2Screen } from "../screens/tabs/Tab2Screen";
import { Tab3Screen } from "../screens/tabs/Tab3Screen";
import { globalColors } from "../themes/theme";
import { Text } from "react-native";
import { TopTabsNavigator } from "./TopTabsNavigator";
import { StackNavigator } from "./StackNavigator";
import { IonIcon } from "../components/shared/IonIcon";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            sceneContainerStyle={{
                backgroundColor: globalColors.blank
            }}
            screenOptions={{
                //headerShown: false,
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen options={{ title: 'T1', tabBarIcon: ({ color }) => (
                <Text style={{ color }}>
                    <IonIcon name = 'rocket-outline' size={30} color='blue' />
                </Text>)}} name="Tab1"  component={ Tab1Screen } 
            />
            <Tab.Screen options={{ title: 'T2', tabBarIcon: ({ color }) => (
                <Text style={{ color }}>
                    <IonIcon name = 'car-sport-outline' size={30} color='blue' />
                </Text>)}} name="Tab2"  component={ TopTabsNavigator } 
            />
            <Tab.Screen options={{ title: 'T3', tabBarIcon: ({ color }) => (
                    <IonIcon name = 'id-card-outline' size={30} color='blue' />    
                )}} name="Tab3"  component={ StackNavigator } 
            />
        </Tab.Navigator>
    )
}