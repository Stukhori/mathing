import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const IPhone1314 = () => {
  return (
    <ImageBackground
      style={styles.iphone131423}
      resizeMode="cover"
      source={require("../src/img/bg1.jpg")}
    >
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frame1, styles.frame1ShadowBox]} />
        <View style={styles.frame2}>
          <Text style={[styles.startTheTest, styles.startTheTestTypo]}>
            start the test
          </Text>
        </View>
      </View>
      <View style={[styles.iphone131423Child, styles.frame1ShadowBox]} />
      <View style={styles.frame3}>
        <Text
          style={[styles.pleaseAnswerTo, styles.startTheTestTypo]}
        >{`Please, answer to a short quiz to identify your current level!
`}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 330,
    borderRadius: 12,
  },
  frame1ShadowBox: {
    shadowOpacity: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  startTheTestTypo: {
    textAlign: "left",
    color: "#341461",
    fontFamily: "DoHyeon-Regular",
    textTransform: "uppercase",
    letterSpacing: 1,
    left: "50%",
    position: "absolute",
  },
  frame1: {
    left: 0,
    shadowColor: "#e5e5e5",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: "#ffe4a6",
    borderColor: "#341461",
    borderWidth: 2,
    height: 48,
    top: 0,
    width: 330,
    borderRadius: 12,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  startTheTest: {
    marginLeft: -83.3,
    top: 2,
    fontSize: 22,
    lineHeight: 20,
  },
  frame2: {
    top: 14,
    left: 55,
    width: 221,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    marginLeft: -165,
    top: 501,
    borderColor: "#000",
    height: 49,
    borderWidth: 1,
    borderStyle: "solid",
    width: 330,
    borderRadius: 12,
    left: "50%",
    position: "absolute",
  },
  iphone131423Child: {
    top: 337,
    left: 29,
    shadowColor: "rgba(67, 28, 125, 0)",
    shadowOffset: {
      width: 0,
      height: 69,
    },
    shadowRadius: 19,
    elevation: 19,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderColor: "#d4b1ff",
    width: 332,
    height: 131,
    borderWidth: 1,
  },
  pleaseAnswerTo: {
    marginLeft: -135,
    fontSize: 25,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    width: 279,
    height: 118,
    top: 0,
  },
  frame3: {
    marginLeft: -154,
    top: 355,
    width: 300,
    height: 100,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone131423: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;
