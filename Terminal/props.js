import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

function PRo(props) {
  return (
    <View style={styles.container}>
      <Text>
        {props.name}: {props.num}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PRo;
