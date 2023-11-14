import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { View } from "react-native";

function LocationP() {
  const [location, setlocation] = useState(null);
  const [lat, setlat] = useState(null);
  const [long, setlong] = useState(null);
  const getlocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status == "granted") {
      let loc = await Location.getCurrentPositionAsync({});
      setlocation(loc.coords);
      setlat(loc.coords.latitude);
      setlong(loc.coords.longitude);
    } else {
      console.log("Permission denied");
    }
  };
  console.log(location);
  useEffect(() => {
    getlocation();
  }, []);

  let text = JSON.stringify(location);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <MapView style={styles.map} region={location}>
        <Marker
          draggable
          coordinate={{ latitude: lat, longitude: long }}
        ></Marker>
        <Circle center={{ latitude: lat, longitude: long }} radius={100} />
      </MapView>
    </View>
  );
}
const newLocal = "50%";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "50%",
    height: "50%",
  },
});

export default LocationP;
