import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../../themes/theme';

export const AboutScreen = () => {
    const [speed, setSpeed] = useState(0);
    const [exceededLimit, setExceededLimit] = useState(false);
  
    useEffect(() => {
      (async () => {
        //let { status } = await Location.requestForegroundPermissionsAsync();
        let status = 'granted';
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
        let location = 50;
        const currentSpeed = location * 3;
        //const currentSpeed = location.coords.speed * 3.6; // Convert m/s to km/h
        setSpeed(currentSpeed);
        console.log('Seteando speed: ' + currentSpeed);
      })();
    }, []);
  
    return (
      <View style={ globalStyles.container }>
        <Text style={ globalStyles.speedText }>Current Speed: {speed.toFixed(2)} km/h</Text>
        {exceededLimit && (
          <Text style={ globalStyles.warningText}>Warning: Speed limit exceeded!</Text>
        )}
      </View>
    );
  };