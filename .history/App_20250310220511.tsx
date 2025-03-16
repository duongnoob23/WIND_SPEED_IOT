import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import DashBoard from "./src/page/DashBoard/DashBoard";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const handleIncrease = () => {
    setCount(count + 1);
  };

  console.log(">>> check count", count);
  return (
    <View style={css.frontEnd}>
      <StatusBar style="auto" />
      <Button
        title="Click me to say hello"
        onPress={handleIncrease}
        color="green"
      />
      <View>
        <Text>Hello {name}</Text>
        <TextInput
          multiline
          style={css.border}
          onChangeText={(e) => setName(e)}
          value={name}
          keyboardType="numeric"
        />
      </View>
    </View>
    // <View>
    //   <DashBoard />
    // </View>
  );
}

const css = StyleSheet.create({
  frontEnd: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  border: {
    borderColor: "green",
    borderWidth: 1,
    width: 300,
    padding: 15,
  },
});
