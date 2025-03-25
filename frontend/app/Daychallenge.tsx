import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Rectangle176 from "../assets/rectangle-173.svg";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone131413}>
      <View style={[styles.purpleback, styles.toppurple]} />
      <View style={[styles.iphone131413Item, styles.toppurple]} />
      <Text style={[styles.challengeOfThe, styles.textFlexBox]}>
        Challenge of the day
      </Text>
      <Text style={[styles.arrowtext, styles.textFlexBox]}>←</Text>
      <Rectangle176
        style={[styles.questionrectangle, styles.rectangleViewPosition]}
        width={329}
        height={230}
      />
      <Text
        style={[styles.questiontext, styles.continueClr]}
      >{`Agzam wants to go on a vacation to Vietnam, the trip costs $1,200. She plans to save money every month for a year. In the first month, she saves $50, and each subsequent month, she increases her savings by $10. Will she have enough money by the end of the year to afford the trip?`}</Text>
      <View style={[styles.answerrectangle, styles.rectangleViewPosition]} />
      <Text style={[styles.yourAnswer, styles.continueClr]}>Your answer:</Text>
      <View style={[styles.continuebutton, styles.continuePosition]} />
      <Text style={[styles.continue, styles.continuePosition]}>Continue</Text>
      <View
        style={[styles.hintbutton, styles.hintandhelpbuttons]}
      />
      <Text style={[styles.hint, styles.hintTypo]}>Hint!</Text>
      <Image
        style={[styles.roboticon, styles.continuePosition]}
        resizeMode="cover"
        source={require("../src/img/robot.png")}
      />
      <View
        style={[styles.helpbutton, styles.hintandhelpbuttons]}
      />
      <Text style={[styles.needHelp, styles.hintTypo]}>Need help?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toppurple: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  rectangleViewPosition: {
    left: "50%",
    position: "absolute",
  },
  continueClr: {
    color: "#000",
    fontFamily: "DoHyeon-Regular",
  },
  continuePosition: {
    top: 700,
    position: "absolute",
  },
  hintandhelpbuttons: {
    height: 42,
    width: 120,
    backgroundColor: "#6637a1",
    borderRadius: 20,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 774,
    position: "absolute",
  },
  hintTypo: {
    top: 775,
    fontSize: 17,
    textAlign: "center",
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
    position: "absolute",
  },
  purpleback: {
    backgroundColor: "#552d8e",
    height: 379,
  },
  iphone131413Item: {
    backgroundColor: "#875fc0",
    height: 116,
  },
  challengeOfThe: {
    marginLeft: -129,
    top: 57,
    fontSize: 23,
    width: 271,
    height: 60,
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    display: "flex",
    lineHeight: 38,
    position: "absolute",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
  },
  arrowtext: {
    top: 64,
    left: 7,
    fontSize: 50,
    fontFamily: "Inconsolata-Regular",
    width: 53,
    height: 38,
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    display: "flex",
    lineHeight: 48,
    position: "absolute",
  },
  questionrectangle: {
    marginLeft: -164,
    top: 134,
    borderRadius: 20, // Optional: rounder corners
    width: 280, // Increased size
    height: 90, // Increased height
    position: "absolute",
    backgroundColor: "#fff", // Ensure it's visible
    zIndex: 0, // Make sure it stays behind the text
  },
  questiontext: {
    marginLeft: -145,
    top: 156,
    lineHeight: 20,
    textAlign: "left",
    width: 291,
    height: 186,
    fontSize: 20,
    color: "#000",
    alignItems: "center",
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  answerrectangle: {
    marginLeft: -166,
    top: 461,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b786f1",
    borderWidth: 2,
    width: 333,
    height: 188,
    borderRadius: 15,
  },
  yourAnswer: {
    top: 422,
    left: 40,
    fontSize: 21,
    lineHeight: 17,
    width: 143,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: "#000",
    position: "absolute",
  },
  continuebutton: {
    backgroundColor: "#efb22e",
    width: 193,
    height: 41,
    left: 31,
    borderRadius: 15,
  },
  continue: {
    left: 92,
    fontSize: 20,
    color: "#000",
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    lineHeight: 38,
    top: 700,
  },
  hintbutton: {
    left: 31,
  },
  hint: {
    left: 69,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  roboticon: {
    left: 287,
    width: 66,
    height: 62,
  },
  helpbutton: {
    left: 227,
  },
  needHelp: {
    left: 249,
  },
  iphone131413: {
    backgroundColor: "#fdfcff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;