import * as React from "react";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const IPhone1314 = () => {
  const router = useRouter();
  
  return (
    <ImageBackground
      style={styles.iphone131429}
      resizeMode="cover"
      source={require("./src/img/bg1.jpg")}
    >
      {/* Centered Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.mathing}>Mathing</Text>
        <Text style={styles.diveIntoThe}>
          Dive into the world of math with ease and fun!
        </Text>
      </View>

      {/* "Get Started" Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Signup")}
      >
        <View style={styles.buttonBackground} />
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* "I Already Have an Account" Button */}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => router.push("/Signin")}
      >
        <View style={styles.buttonSecondaryBackground} />
        <Text style={styles.buttonSecondaryText}>
          I already have an account
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iphone131429: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  // Centered Title and Subtitle
  textContainer: {
    position: "absolute",
    top: "30%",
    alignItems: "center",
  },
  mathing: {
    fontSize: 80,
    textAlign: "center",
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
    letterSpacing: 1,
    lineHeight: 85,
  },
  diveIntoThe: {
    fontSize: 22,
    textAlign: "center",
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
    letterSpacing: 1,
    lineHeight: 28,
    marginTop: 20,
    width: 300,
  },

  // Primary Button - "Get Started"
  button: {
    position: "absolute",
    bottom: 150,
    width: 330,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe4a6",
  },
  buttonBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#341461",
  },
  buttonText: {
    fontSize: 17,
    color: "#341461",
    fontFamily: "DoHyeon-Regular",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  // Secondary Button - "I Already Have an Account"
  buttonSecondary: {
    position: "absolute",
    bottom: 80,
    width: 330,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efeeee",
  },
  buttonSecondaryBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#341461",
  },
  buttonSecondaryText: {
    fontSize: 17,
    color: "#341461",
    fontFamily: "DoHyeon-Regular",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default IPhone1314;