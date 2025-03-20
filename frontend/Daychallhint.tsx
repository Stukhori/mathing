import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Rectangle176 from "../assets/rectangle-176.svg";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone131414}>
      <View style={[styles.iphone131414Child, styles.iphone131414Position]} />
      <View style={[styles.iphone131414Item, styles.iphone131414Position]} />
      <View style={styles.iphone131414Inner} />
      <Text style={[styles.challengeOfThe, styles.textFlexBox]}>
        Challenge of the day
      </Text>
      <Text style={[styles.text, styles.textFlexBox]}>←</Text>
      <Rectangle176 style={styles.rectangleIcon} width={329} height={230} />
      <Text
        style={[styles.agzamWantsTo, styles.continueClr]}
      >{`Agzam wants to go on a vacation to Vietnam, the trip costs $1,200.

She plans to save money every month for a year. In the first month, she saves $50, and each subsequent month, she increases her savings by $10. 

      			Will she have enough money by the end of the year to afford the trip?`}</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.yourAnswer, styles.continueClr]}>Your answer:</Text>
      <View style={[styles.iphone131414Child1, styles.continuePosition]} />
      <Text style={[styles.continue, styles.continuePosition]}>Continue</Text>
      <View
        style={[styles.iphone131414Child2, styles.iphone131414ChildShadowBox]}
      />
      <View
        style={[styles.iphone131414Child3, styles.hintFormulaForPosition]}
      />
      <Text style={[styles.hint, styles.hintTypo]}>Hint!</Text>
      <Image
        style={[styles.heads6Icon, styles.continuePosition]}
        resizeMode="cover"
        source="Heads/6.png"
      />
      <View
        style={[styles.iphone131414Child4, styles.iphone131414ChildShadowBox]}
      />
      <Text style={[styles.needHelp, styles.hintTypo]}>Need help?</Text>
      <Text
        style={[styles.hintFormulaFor, styles.hintFormulaForPosition]}
      >{`Hint:
Formula for the sum of an arithmetic progression: 

      			Sn​=2n*(2a+(n−1)d)`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131414Position: {
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
  continueClr: {
    color: "#000",
    fontFamily: "DoHyeon-Regular",
  },
  rectangleViewLayout: {
    width: 333,
    marginLeft: -166,
  },
  continuePosition: {
    top: 700,
    position: "absolute",
  },
  iphone131414ChildShadowBox: {
    height: 42,
    width: 120,
    backgroundColor: "#6637a1",
    borderRadius: 20,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 774,
    shadowOpacity: 1,
    position: "absolute",
  },
  hintFormulaForPosition: {
    top: "50%",
    left: "50%",
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
  iphone131414Child: {
    backgroundColor: "#552d8e",
    height: 379,
  },
  iphone131414Item: {
    backgroundColor: "#875fc0",
    height: 106,
  },
  iphone131414Inner: {
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
    left: "50%",
    position: "absolute",
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
    top: 471,
    backgroundColor: "#fff",
    height: 188,
    borderWidth: 2,
    borderColor: "#b786f1",
    borderStyle: "solid",
    width: 333,
    marginLeft: -166,
    left: "50%",
    borderRadius: 15,
    position: "absolute",
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
  iphone131414Child1: {
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
  iphone131414Child2: {
    left: 31,
  },
  iphone131414Child3: {
    marginTop: -101,
    marginLeft: -181,
    shadowColor: "rgba(169, 58, 242, 0)",
    shadowRadius: 69,
    elevation: 69,
    backgroundColor: "#ffafee",
    width: 363,
    height: 202,
    shadowOpacity: 1,
    top: "50%",
    borderWidth: 2,
    borderColor: "#b786f1",
    borderStyle: "solid",
    borderRadius: 15,
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
  iphone131414Child4: {
    left: 227,
  },
  needHelp: {
    left: 249,
  },
  hintFormulaFor: {
    marginTop: -100,
    fontSize: 24,
    lineHeight: 25,
    color: "#2e0862",
    height: 212,
    width: 333,
    marginLeft: -166,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
  },
  iphone131414: {
    backgroundColor: "#fdfcff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;