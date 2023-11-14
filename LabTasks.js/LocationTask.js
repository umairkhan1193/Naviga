import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";

export default function UsingMap() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setlat] = useState(null);
  const [long, setlong] = useState(null);
  const [address, setaddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setlat(location.coords.latitude);
      setlong(location.coords.longitude);
    })();
  }, []);

  const A = async () => {
    axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`
      )
      .then((res) => {
        let data = res.data;
        setaddress(data);
      });
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.log("aaaaaa:", address);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <MapView
        style={styles.map}
        region={location}
        zoomControlEnabled
        zoomEnabled
        zoomTapEnabled
      >
        <Marker
          onMarkerDragEnd={location}
          draggable
          coordinate={{ latitude: lat, longitude: long }}
        />
        <Circle center={{ latitude: lat, longitude: long }} radius={100} />
      </MapView>
      <Text style={styles.paragraph}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
