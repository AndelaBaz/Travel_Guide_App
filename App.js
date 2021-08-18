import React, { useState } from "react";
import { LogBox, StyleSheet, Text, View} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Navigacija from "./navigacija/Navigacija";

	
import { enableScreens } from "react-native-screens";

LogBox.ignoreAllLogs(true);
enableScreens();

const ucitajFontove = () => {
  return Font.loadAsync({
    "quando": require("./assets/fonts/Quando-Regular.ttf")
  });
};

export default function App() {
  const [fontUcitan, postaviFontUcitan] = useState(false);
  if (!fontUcitan) {
    return (
      <AppLoading
        startAsync={ucitajFontove}
        onFinish={() => postaviFontUcitan(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
      <Navigacija />
  );
}

const stil = StyleSheet.create({});
