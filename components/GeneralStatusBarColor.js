import React from "react";
import { StatusBar, View } from "react-native";
import styles from "./GeneralStatusBarColorStyles";

StatusBar.setBarStyle("light-content", true);

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor="#9c44dc" {...props} />
  </View>
);
export default GeneralStatusBarColor;
