import React from "react";
import { StyleSheet, Text, View } from "react-native";


import CardImage from "./components/CardImage";
import FooterBadge from "./components/FooterBadge";
import Sidebar from "./components/Sidebar";


export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CardImage />
        <FooterBadge />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
