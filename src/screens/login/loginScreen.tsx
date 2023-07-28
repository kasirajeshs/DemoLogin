import React from "react";
import { Alert, StyleSheet, SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import InteractiveTextInput from "react-native-text-input-interactive";
import DropShadow from "react-native-drop-shadow";
import { AppConstants } from "../../constants/appConstants";

interface PropsLoginScreen {
  navigation: any;
}

const hardcodedUserName = "test@test.com";
const hardcodedPassword = "password";
const appBackgroundGradient = ["#E5F7FF", "#FFFFFF"];

const LoginScreen: React.FC<PropsLoginScreen> = ({ navigation }) => {
  const [username, setUsername] = React.useState("test@test.com");
  const [password, setPassword] = React.useState("password");

  const doLogin = () => {
    if (username === hardcodedUserName && password === hardcodedPassword || true) {
      Alert.alert(
        "Info",
        "Login Success",
        [{ text: "OK", onPress: () => navigation.navigate(AppConstants.AppPaths.HOME) }],
        { cancelable: false }
      );

    } else {
      Alert.alert(
        "Error",
        "Login Failed",
        [{ text: "OK" }],
        { cancelable: true }
      );
    }
  };

  const renderLogo = () => {
    return (
      <View style={{ marginTop: 32, marginBottom: 16 }}>
        <Image
          resizeMode="contain"
          source={require("../../assets/login_page_logo.png")}
          style={[styles.logoImageStyle]}
        />
      </View>
    );
  };

  const renderTextInputs = () => {
    return (
      <View style={{ marginTop: 44 }}>
        <InteractiveTextInput
          textInputStyle={styles.userNameStyle}
          onChangeText={setUsername}
          placeholder="Username"
        />

        <View style={styles.space}>
          <InteractiveTextInput
            placeholder="Password"
            secureTextEntry={true}
            enableIcon
            textInputStyle={styles.passwordStyle}
            iconImageSource={require("../../assets/visibility-button.png")}
            onChangeText={setPassword}
            onIconPress={() => {
            }}
          />
        </View>

      </View>
    );
  };

  const renderLoginButton = () => {
    return (
      // @ts-ignore
      <DropShadow style={styles.buttonShadow}>
        <TouchableOpacity style={[styles.loginButton]} onPress={doLogin}>
          <Text style={styles.loginButtonLabel}>{"Login"}</Text>
        </TouchableOpacity>
      </DropShadow>


    );
  };

  const renderLabels = () => {
    return (
      <View style={{ marginTop: 16 }}>
        <Text style={[styles.welcomeLabel]}>
          {"Welcome"}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appBackgroundGradient} style={styles.linearGradient}>
        <View style={styles.contentContainer}>
          {renderLogo()}
          {renderLabels()}
          {renderTextInputs()}
          {renderLoginButton()}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0
  },
  welcomeLabel: {
    fontSize: 26,
    lineHeight: 31,
    color: "#505664"
  },
  welcomeSubLabel: {
    fontSize: 18,
    lineHeight: 28,
    marginTop: 8
  },
  contentContainer: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24
  },
  logoImageStyle: {
    width: 184,
    height: 184,
    alignSelf: "center"
  },
  buttonShadow: {
    shadowColor: "rgba(149, 171, 214, 0.76)",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  loginButton: {
    height: 54,
    width: "100%",
    color: "#FFFFFF",
    marginTop: "11%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 8,
    shadowOpacity: 0.5,
    backgroundColor: "#2196f3",
    shadowOffset: {
      width: 0,
      height: 5
    }
  },
  loginButtonLabel: {
    color: "#FFFFFF",
    fontSize: 20
  },

  userNameStyle: {
    width: "100%"
  },
  passwordStyle: {
    width: "100%"
  },
  space: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default LoginScreen;
