import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Rectangle176 from "../assets/rectangle-176.svg";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone131415}>
      <View style={[styles.iphone131415Child, styles.iphone131415Position]} />
      <View style={[styles.iphone131415Item, styles.iphone131415Position]} />
      <View style={styles.iphone131415Inner} />
      <Text style={[styles.challengeOfThe, styles.textFlexBox]}>
        Challenge of the day
      </Text>
      <Text style={[styles.text, styles.textFlexBox]}>←</Text>
      <Rectangle176 style={styles.rectangleIcon} width={329} height={230} />
      <Text
        style={styles.agzamWantsTo}
      >{`Agzam wants to go on a vacation to Vietnam, the trip costs $1,200.

She plans to save money every month for a year. In the first month, she saves $50, and each subsequent month, she increases her savings by $10. 

      			Will she have enough money by the end of the year to afford the trip?`}</Text>
      <View style={styles.rectangleView} />
      <Text style={styles.yourAnswer}>Your answer:</Text>
      <View style={[styles.iphone131415Child1, styles.heads6IconPosition]} />
      <Text style={styles.continue}>Continue</Text>
      <View
        style={[styles.iphone131415Child2, styles.iphone131415ChildShadowBox1]}
      />
      <View
        style={[styles.iphone131415Child3, styles.iphone131415ChildShadowBox]}
      />
      <View
        style={[styles.iphone131415Child4, styles.iphone131415ChildShadowBox]}
      />
      <Text style={[styles.hint, styles.hintTypo]}>Hint!</Text>
      <Image
        style={[styles.heads6Icon, styles.heads6IconPosition]}
        resizeMode="cover"
        source="Heads/6.png"
      />
      <View
        style={[styles.iphone131415Child5, styles.iphone131415ChildShadowBox1]}
      />
      <Text style={[styles.needHelp, styles.hintTypo]}>Need help?</Text>
      <Text style={styles.answerInThe}>{`Answer:
In the first month, he saves $50, in the second month 60, in the third month $70. This is an arithmetic progression where:
a=50 (the first term),
d=10 (the common difference),
n=12n (the number of months).
S 12​=12/2​⋅(2⋅50+(12−1)⋅10)
S12 = 1260$
      			Answer: no, he will not, as 1260>1200`}</Text>
      <Text style={[styles.text1, styles.textPosition]}>2</Text>
      <Text style={[styles.text2, styles.textPosition]}>0</Text>
      <Text style={styles.text3}>12</Text>
      <Image
        style={[styles.imageIcon, styles.iconPosition]}
        resizeMode="cover"
        source="image.png"
      />
      <Image
        style={[styles.image4Icon, styles.iconPosition]}
        resizeMode="cover"
        source="image 4.png"
      />
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source="image 5.png"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131415Position: {
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
  heads6IconPosition: {
    top: 700,
    position: "absolute",
  },
  iphone131415ChildShadowBox1: {
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
  iphone131415ChildShadowBox: {
    width: 363,
    elevation: 69,
    shadowRadius: 69,
    shadowColor: "rgba(0, 0, 0, 0)",
    top: "50%",
    marginLeft: -181,
    shadowOpacity: 1,
    borderWidth: 2,
    borderColor: "#b786f1",
    borderStyle: "solid",
    left: "50%",
    borderRadius: 15,
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
  textPosition: {
    width: 14,
    marginTop: 110,
    color: "#2e0862",
    lineHeight: 15,
    top: "50%",
    height: 42,
    fontSize: 20,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 539,
    position: "absolute",
  },
  iphone131415Child: {
    backgroundColor: "#552d8e",
    height: 379,
  },
  iphone131415Item: {
    backgroundColor: "#875fc0",
    height: 106,
  },
  iphone131415Inner: {
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
    lineHeight: 38,
    alignItems: "center",
    display: "flex",
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
    lineHeight: 38,
    alignItems: "center",
    display: "flex",
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
    width: 291,
    height: 86,
    textAlign: "left",
    fontSize: 17,
    color: "#000",
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    top: 471,
    backgroundColor: "#fff",
    width: 333,
    height: 188,
    borderWidth: 2,
    borderColor: "#b786f1",
    borderStyle: "solid",
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
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  iphone131415Child1: {
    backgroundColor: "#efb22e",
    width: 193,
    height: 41,
    left: 31,
    borderRadius: 15,
  },
  continue: {
    left: 92,
    fontSize: 20,
    top: 700,
    color: "#000",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
    position: "absolute",
  },
  iphone131415Child2: {
    left: 31,
  },
  iphone131415Child3: {
    marginTop: -101,
    backgroundColor: "#f9ffad",
    height: 202,
  },
  iphone131415Child4: {
    marginTop: 104,
    backgroundColor: "#faffad",
    height: 55,
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
  iphone131415Child5: {
    left: 227,
  },
  needHelp: {
    left: 249,
  },
  answerInThe: {
    marginTop: -111,
    fontSize: 15,
    width: 335,
    height: 212,
    color: "#2e0862",
    lineHeight: 15,
    top: "50%",
    marginLeft: -166,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    position: "absolute",
  },
  text1: {
    marginLeft: -103,
  },
  text2: {
    marginLeft: -31,
  },
  text3: {
    marginLeft: 39,
    width: 19,
    marginTop: 110,
    color: "#2e0862",
    lineHeight: 15,
    top: "50%",
    height: 42,
    fontSize: 20,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    position: "absolute",
  },
  imageIcon: {
    left: 184,
    width: 22,
    height: 26,
  },
  image4Icon: {
    left: 110,
    width: 23,
    height: 27,
  },
  image5Icon: {
    top: 538,
    left: 255,
    width: 25,
    height: 29,
    position: "absolute",
  },
  iphone131415: {
    backgroundColor: "#fdfcff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;