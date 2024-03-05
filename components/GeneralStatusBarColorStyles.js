import { Platform, StatusBar, StyleSheet } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 50 : StatusBar.currentHeight;

export default StyleSheet.create({
  statusBar: {
    height: 50,
  },
});
