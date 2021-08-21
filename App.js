import React, { useState } from "react";
import { LogBox, StyleSheet, Text, View} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";


import Navigacija from "./navigacija/Navigacija";
import gradoviReducer from "./store/reducers/gradovi";

	
import { enableScreens } from "react-native-screens";

LogBox.ignoreAllLogs(true);
enableScreens();

const glavniReducer = combineReducers({
  gradovi: gradoviReducer,
})

const store = createStore(glavniReducer);

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
    <Provider store={store}>
      <Navigacija />
    </Provider>
      
  );
}

const stil = StyleSheet.create({});
