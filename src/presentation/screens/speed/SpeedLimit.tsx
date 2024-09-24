import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { globalStyles } from '../../themes/theme';

export const SpeedLimit = () => {
  const [speed, setSpeed] = useState(0);
  const [exceededLimit, setExceededLimit] = useState(false);

  useEffect(() => {
    Geolocation.requestAuthorization('whenInUse');

    const watchId = Geolocation.watchPosition(
      (position) => {
        const speedInKmh = position.coords.speed ? position.coords.speed * 3.6 : 0; // Convertir m/s a km/h
        setSpeed(speedInKmh);
        setExceededLimit(speedInKmh > 50); // Límite de velocidad
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, distanceFilter: 1, interval: 1000 }
    );

    return () => Geolocation.clearWatch(watchId); // Limpiar cuando el componente se desmonte
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.speedText}>Current Speed: {speed.toFixed(2)} km/h</Text>
      {exceededLimit && (
        <Text style={globalStyles.warningText}>Warning: Speed limit exceeded!</Text>
      )}
    </View>
  );
};