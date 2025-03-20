import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Rectangle176 from "../assets/rectangle-176.svg";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone131413}>
      <View style={[styles.iphone131413Child, styles.iphone131413Position]} />
      <View style={[styles.iphone131413Item, styles.iphone131413Position]} />
      <View style={styles.iphone131413Inner} />
      <Text style={[styles.challengeOfThe, styles.textFlexBox]}>
        Challenge of the day
      </Text>
      <Text style={[styles.text, styles.textFlexBox]}>←</Text>
      <Rectangle176
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        width={329}
        height={230}
      />
      <Text
        style={[styles.agzamWantsTo, styles.continueClr]}
      >{`Agzam wants to go on a vacation to Vietnam, the trip costs $1,200.

She plans to save money every month for a year. In the first month, she saves $50, and each subsequent month, she increases her savings by $10. 

      			Will she have enough money by the end of the year to afford the trip?`}</Text>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Text style={[styles.yourAnswer, styles.continueClr]}>Your answer:</Text>
      <View style={[styles.iphone131413Child1, styles.continuePosition]} />
      <Text style={[styles.continue, styles.continuePosition]}>Continue</Text>
      <View
        style={[styles.iphone131413Child2, styles.iphone131413ChildShadowBox]}
      />
      <Text style={[styles.hint, styles.hintTypo]}>Hint!</Text>
      <Image
        style={[styles.heads6Icon, styles.continuePosition]}
        resizeMode="cover"
        source="Heads/6.png"
      />
      <View
        style={[styles.iphone131413Child3, styles.iphone131413ChildShadowBox]}
      />
      <Text style={[styles.needHelp, styles.hintTypo]}>Need help?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131413Position: {
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
  rectanglePosition: {
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
  iphone131413ChildShadowBox: {
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
  iphone131413Child: {
    backgroundColor: "#552d8e",
    height: 379,
  },
  iphone131413Item: {
    backgroundColor: "#875fc0",
    height: 106,
  },
  iphone131413Inner: {
    top: 54,
    left: 47,
    backgroundColor: "rgba(149, 199, 255, 0)",
    width: 317,
    height: 114,
    borderRadius: 15,
    position: "absolute",
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
  text: {
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
    lineHeight: 38,
    position: "absolute",
  },
  rectangleIcon: {
    marginLeft: -164,
    top: 124,
    borderRadius: 10,
  },
  agzamWantsTo: {
    marginLeft: -145,
    top: 196,
    lineHeight: 20,
    textAlign: "left",
    width: 291,
    height: 86,
    fontSize: 17,
    color: "#000",
    alignItems: "center",
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -166,
    top: 471,
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
    position: "absolute",
  },
  iphone131413Child1: {
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
  iphone131413Child2: {
    left: 31,
  },
  hint: {
    left: 69,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  heads6Icon: {
    left: 287,
    width: 66,
    height: 62,
  },
  iphone131413Child3: {
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