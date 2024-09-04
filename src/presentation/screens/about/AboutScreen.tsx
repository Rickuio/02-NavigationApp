import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import * as Location from 'expo-location'
import { globalStyles } from "../../themes/theme";

export const AboutScreen = () => {

    const [speed, setSpeed] = useState(0);
    const [limit, setLimit] = useState(false);

    useEffect( () => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }
            await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 5000,
                    distanceInterval: 1,
                },
                (location) => {
                    let currentSpeed = 0;
                    if (location.coords.speed != null) {
                        currentSpeed = location.coords.speed * 3.6;
                    }else {
                        currentSpeed = 0;
                    }
                    setSpeed(currentSpeed);
                    setLimit(currentSpeed > 50);
                }
            );
        })();
    }, [] );

    return (
        <View style={ globalStyles.container}>
        <Text style={  globalStyles.speedText}>Current Speed: {speed.toFixed(2)} km/h</Text>
            {limit && (<Text style={globalStyles.warningText}>Warning: Speed limit exceeded!</Text>)}
        </View>
      )
}
