import * as React from "react";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";

const IPhone1314 = () => {
  const router = useRouter();

  return (
    <ImageBackground
      style={styles.iphone131429}
      resizeMode="cover"
      source={require("../src/img/bg1.jpg")}
    >
      {/* Sign Up Button */}
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => router.push("/signup")}
      >
        <View style={[styles.frame1, styles.framePosition]}>
          <View style={[styles.frame2, styles.frameShadowBox]} />
          <View style={[styles.frame3, styles.frameLayout]}>
            <Text style={styles.getStarted}>Get Started</Text>
          </View>
        </View>
      </Pressable>

      {/* Sign In Button */}
      <Pressable
        style={[styles.frame4, styles.framePosition]}
        onPress={() => router.push("/signin")}
      >
        <View style={[styles.frame5, styles.frameShadowBox]} />
        <View style={styles.frame6}>
          <Text style={styles.iAlreadyHave}>I already have an account</Text>
        </View>
      </Pressable>

      {/* Centered container for "Mathing" and description */}
      <View style={styles.textContainer}>
        <Text style={styles.mathing}>Mathing</Text>
        <Text style={styles.diveIntoThe}>
          Dive into the world of math with ease and fun!
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    width: 330,
    borderRadius: 12,
    left: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  frameShadowBox: {
    height: 48,
    borderWidth: 2,
    borderColor: "#341461",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#e5e5e5",
    left: 0,
    top: 0,
    width: 330,
    borderStyle: "solid",
    borderRadius: 12,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 703,
    left: 159,
    width: 100,
  },
  frame2: {
    backgroundColor: "#ffe4a6",
  },
  getStarted: {
    marginLeft: -53.3,
    top: 2,
    textAlign: "left",
    color: "#341461",
    fontFamily: "DoHyeon-Regular",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 17,
    left: "50%",
    position: "absolute",
  },
  frame3: {
    top: 14,
    left: 55,
    width: 221,
  },
  frame1: {
    top: 664,
    borderColor: "#000",
    borderWidth: 1,
    height: 49,
    borderStyle: "solid",
    width: 330,
    borderRadius: 12,
    left: "50%",
    marginLeft: -165,
  },
  frame5: {
    backgroundColor: "#efeeee",
  },
  iAlreadyHave: {
    marginTop: -7.5,
    marginLeft: -141.5,
    width: 282,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    top: "50%",
    color: "#341461",
    fontFamily: "DoHyeon-Regular",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 17,
    left: "50%",
    position: "absolute",
  },
  frame6: {
    top: 7,
    left: 33,
    width: 265,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    top: 740,
    height: 50,
    width: 330,
    borderRadius: 12,
    left: "50%",
    marginLeft: -165,
  },

  // New styles for text container
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100, // Moves everything slightly upwards
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
    marginTop: 20, // Ensures spacing below "Mathing"
    width: 300,
  },
  iphone131429: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default IPhone1314;
