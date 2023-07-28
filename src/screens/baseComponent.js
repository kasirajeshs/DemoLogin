import { AppConstants } from "../constants/appConstants";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, SafeAreaView } from "react-native";

const { Component } = require("react");

export class AppBaseApp extends Component {

  constructor() {
    super();
  }

  renderContent = () => {
    return <></>;
  };

  render() {
    return (
      <SafeAreaView style={rootStyles.container}>
        <LinearGradient colors={AppConstants.BACKGROUND_GRADIENT} style={rootStyles.linearGradient}>
          {this.renderContent()}
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export const rootStyles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  containerBackground: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
});
