import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Ellipse17 from "../assets/ellipse-5.svg";
import Ellipse1 from "../assets/ellipse-1.svg";
import Ellipse2 from "../assets/ellipse-2.svg";
import Ellipse3 from "../assets/ellipse-11.svg";
import Rectangle173 from "../assets/Rectanglecourse.svg";
import Ellipse16 from "../assets/ellipsecourse.svg";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone131432}>
      <View style={styles.iphone16Pro38}>
        <View
          style={[styles.optionBrectangle, styles.iphone16ChildLayout1]}
        />
        <Ellipse17
          style={[styles.optionBellipse, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <View
          style={[styles.optionArectangle, styles.iphone16ChildLayout1]}
        />
        <View style={[styles.optionCrectangle, styles.iphone16ChildLayout1]} />
        <View
          style={[styles.optionDrectangle, styles.iphone16ChildLayout1]}
        />
        <Text style={[styles.a, styles.aFlexBox]}>A.</Text>
        <Text style={[styles.b, styles.aFlexBox]}>B.</Text>
        <Text style={[styles.c, styles.aFlexBox]}>C.</Text>
        <Text style={[styles.d, styles.aFlexBox]}>D.</Text>
        <Text style={[styles.answerc, styles.textTypo2]}>7</Text>
        <Text style={[styles.answerb, styles.textTypo1]}>10</Text>
        <Text style={[styles.answera, styles.textTypo2]}>5</Text>
        <Text style={[styles.answerd, styles.textTypo1]}>14</Text>
        <Ellipse1
          style={[styles.ellipseA, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <Ellipse2
          style={[styles.ellipseC, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <Ellipse3
          style={[styles.ellipseD, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <View
          style={[styles.hintellipse, styles.iphone16ChildShadowBox]}
        />
        <Text style={[styles.hint, styles.textFlexBox]}>Hint!</Text>
        <Text style={[styles.coinstext, styles.textFlexBox]}>{`(5   )    `}</Text>
        <Image
          style={styles.heads6Icon}
          resizeMode="cover"
          source={require("../src/img/robot.png")}
        />
        <View
          style={[styles.needHelpellipse, styles.iphone16ChildShadowBox]}
        />
        <Text style={[styles.needHelp, styles.hintTypo]}>Need help?</Text>
        <View
          style={[styles.questionspurpleellipse, styles.iphone16ChildPosition]}
        />
        <View
          style={[styles.toppurpleellipse, styles.iphone16ChildPosition]}
        />
        <Rectangle173
          style={styles.questionwhiteellipse}
          width={230}
          height={67}
        />
        <Text style={[styles.questiontext, styles.textTypo]}>
          What is 5 / 7 of 14?
        </Text>
        <Text style={[styles.textnumbers, styles.textTypo]}>
          {`1    2    3    4     5          7    8    9    `}10{` `}
        </Text>
        <Text style={[styles.basicsOfArithmetic, styles.coursenamePosition]}>
          Basics of arithmetic
        </Text>
        <Ellipse16 style={styles.questionnumber} width={32} height={32} />
        <Text style={[styles.selectedquestion, styles.textTypo]}>6</Text>
        <View
          style={[styles.continuerectangle, styles.iphone16ChildLayout2]}
        />
        <Text style={[styles.continue, styles.textTypo]}>Continue</Text>
        <Text style={[styles.arrowsymbol, styles.textFlexBox]}>←</Text>
      </View>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../src/img/imagecoin.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone16ChildLayout1: {
    height: 48,
    width: 302,
    borderWidth: 1,
    borderColor: "#d6bdf4",
    borderStyle: "solid",
    left: 44,
    borderRadius: 15,
    position: "absolute",
    backgroundColor: "#fff",
  },
  iphone16ChildLayout: {
    height: 31,
    width: 31,
    left: 300,
    position: "absolute",
  },
  aFlexBox: {
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  textTypo2: {
    left: 189,
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    fontSize: 22,
    position: "absolute",
  },
  textTypo1: {
    left: 185,
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    fontSize: 22,
    position: "absolute",
  },
  text4Typo: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  iphone16ChildShadowBox: {
    height: 42,
    width: 120,
    backgroundColor: "#6637a1",
    borderRadius: 20,
    top: 775,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#fff",
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  hintTypo: {
    top: 778,
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
  },
  iphone16ChildPosition: {
    left: 1,
    position: "absolute",
  },
  iphone16ChildLayout2: {
    borderRadius: 15,
    position: "absolute",
  },
  textTypo: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  coursenamePosition: {
    left: "50%",
    fontFamily: "DoHyeon-Regular",
  },
  optionBrectangle: {
    top: 393,
  },
  optionBellipse: {
    top: 400,
  },
  optionArectangle: {
    top: 317,
  },
  optionCrectangle: {
    top: 465,
  },
  optionDrectangle: {
    top: 539,
  },
  a: {
    top: 322,
    color: "#000",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 38,
    fontSize: 22,
    left: 60,
  },
  b: {
    top: 395,
    fontFamily: "DoHyeon-Regular",
    color: "#000",
    textAlign: "center",
    lineHeight: 38,
    fontSize: 22,
    left: 60,
  },
  c: {
    top: 469,
    fontFamily: "DoHyeon-Regular",
    color: "#000",
    textAlign: "center",
    lineHeight: 38,
    fontSize: 22,
    left: 60,
  },
  d: {
    top: 543,
    color: "#000",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 38,
    fontSize: 22,
    left: 60,
  },
  answerc: {
    top: 469,
  },
  answerb: {
    top: 396,
  },
  answera: {
    top: 321,
  },
  answerd: {
    top: 544,
  },
  ellipseA: {
    top: 324,
  },
  ellipseC: {
    top: 473,
  },
  ellipseD: {
    top: 548,
  },
  hintellipse: {
    left: 35,
  },
  hint: {
    left: 55,
    width: 44,
    top: 778,
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
  },
  coinstext: {
    left: 83,
    width: 70,
    top: 778,
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
  },
  heads6Icon: {
    top: 698,
    left: 291,
    width: 66,
    height: 62,
    position: "absolute",
  },
  needHelpellipse: {
    left: 247,
  },
  needHelp: {
    left: 270,
    color: "#fff",
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  questionspurpleellipse: {
    top: -3,
    backgroundColor: "#552d8e",
    width: 402,
    height: 298,
  },
  toppurpleellipse: {
    top: 1,
    backgroundColor: "#875fc0",
    width: 401,
    height: 97,
  },
  questionwhiteellipse: {
    top: 170, // Adjust position if needed
    left: 80, // Shift left for centering
    borderRadius: 20, // Optional: rounder corners
    width: 280, // Increased size
    height: 90, // Increased height
    position: "absolute",
    backgroundColor: "#fff", // Ensure it's visible
    zIndex: 0, // Make sure it stays behind the text
  },
  questiontext: {
    top: 185, // Adjust to align properly
    left: "29%",
    transform: [{ translateX: -90 }], // Center the text properly
    fontFamily: "DoHyeon-Regular",
    color: "#000",
    fontSize: 22, // Increase readability
    textAlign: "center",
    zIndex: 1, // Ensure it stays above the background
    position: "absolute",
  },
  textnumbers: {
    top: 113,
    left: 22,
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
  },
  basicsOfArithmetic: {
    marginLeft: -135,
    top: 47,
    fontSize: 23,
    width: 271,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#fff",
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  questionnumber: {
    top: 114,
    left: 192,
    position: "absolute",
  },
  selectedquestion: {
    top: 111,
    left: 201,
    letterSpacing: 10,
    fontFamily: "Roboto Flex",
    color: "#552d8e",
    fontWeight: "700",
    fontSize: 20,
  },
  continuerectangle: {
    top: 609,
    left: 100,
    backgroundColor: "#efb22e",
    width: 190,
    height: 41,
  },
  continue: {
    top: 611,
    left: 162,
    fontFamily: "DoHyeon-Regular",
    color: "#000",
  },
  arrowsymbol: {
    top: 54,
    left: 7,
    fontSize: 50,
    fontFamily: "Inconsolata-Regular",
    width: 53,
    height: 58,
  },
  iphone16Pro38: {
    top: 0,
    left: -1,
    backgroundColor: "#fdfcff",
    width: 392,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
    height: 844,
  },
  image5Icon: {
    top: 789,
    left: 115,
    width: 16,
    height: 14,
    position: "absolute",
  },
  iphone131432: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: "#fff",
  },
});

export default IPhone1314;