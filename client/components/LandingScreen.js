import React from "react";
import { StyleSheet, Text, View, Image, FlatList, Button} from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
      <Button
        title="Go to"
        onPress={() => navigation.navigate("Onboarding", { name: "Jane" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcde67",
    alignItems: "center",
    justifyContent: "center",
  },
});
