import React from "react";
import { Text, View, Button } from "react-native";

export default function GameScreen({ navigation, route }) {
  const { count } = route.params;
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Game Screen!
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Times i've been here: {count}
      </Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { count: count + 1 })}
      />
    </View>
  );
}
