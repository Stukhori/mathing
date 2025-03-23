import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Ellipse1 from "../assets/ellipse-1.svg";
import Ellipse11 from "../assets/ellipse-11.svg";
import Ellipse17 from "../assets/ellipse-17.svg";
import Ellipse2 from "../assets/ellipse-2.svg";
import Checkcircle from "../assets/check-circle.svg";
import Ellipse3 from "../assets/ellipse-3.svg";
import Rectangle7 from "../assets/rectangle-7.svg";
import Rectangle173 from "../assets/rectangle-173.svg";
import Ellipse16 from "../assets/ellipse-16.svg";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone131426}>
      <View style={styles.iphone16Pro38}>
        <View style={[styles.iphone16Pro38Child, styles.rectangleViewLayout]} />
        <View style={[styles.iphone16Pro38Item, styles.iphone16Layout]} />
        <View style={[styles.iphone16Pro38Inner, styles.iphone16Layout]} />
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Text style={[styles.a, styles.aFlexBox]}>A.</Text>
        <Text style={[styles.b, styles.aFlexBox]}>B.</Text>
        <Text style={[styles.c, styles.aFlexBox]}>C.</Text>
        <Text style={[styles.d, styles.aFlexBox]}>D.</Text>
        <Text style={[styles.text, styles.textTypo2]}>7</Text>
        <Text style={[styles.text1, styles.textTypo1]}>10</Text>
        <Text style={[styles.text2, styles.textTypo2]}>5</Text>
        <Text style={[styles.text3, styles.textTypo1]}>14</Text>
        <Ellipse1
          style={[styles.ellipseIcon, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <Ellipse11
          style={[styles.iphone16Pro38Child1, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <View style={[styles.iphone16Pro38Item, styles.iphone16Layout]} />
        <Text style={[styles.b, styles.aFlexBox]}>B.</Text>
        <Text style={[styles.text1, styles.textTypo1]}>10</Text>
        <Ellipse17
          style={[styles.iphone16Pro38Child1, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <Ellipse2
          style={[styles.iphone16Pro38Child4, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <Checkcircle style={styles.checkCircleIcon} width={36} height={34} />
        <Ellipse3
          style={[styles.iphone16Pro38Child5, styles.iphone16ChildLayout]}
          width={31}
          height={31}
        />
        <Rectangle7 style={styles.rectangleIcon} width={303} height={13} />
        <Text style={[styles.progress, styles.text5Typo]}>Progress</Text>
        <Text style={[styles.text5, styles.text5Typo]}>123</Text>
        <View
          style={[styles.iphone16Pro38Child6, styles.iphone16ChildShadowBox]}
        />
        <Text style={[styles.hint, styles.textFlexBox]}>Hint!</Text>
        <Text style={[styles.text6, styles.textFlexBox]}>{`(5   )    `}</Text>
        <Image
          style={styles.heads6Icon}
          resizeMode="cover"
          source="Heads/6.png"
        />
        <View
          style={[styles.iphone16Pro38Child7, styles.iphone16ChildShadowBox]}
        />
        <Text style={[styles.needHelp, styles.hintTypo]}>Need help?</Text>
        <View
          style={[styles.iphone16Pro38Child8, styles.iphone16ChildPosition]}
        />
        <View
          style={[styles.iphone16Pro38Child9, styles.iphone16ChildPosition]}
        />
        <View
          style={[styles.iphone16Pro38Child10, styles.iphone16ChildLayout1]}
        />
        <Rectangle173
          style={styles.iphone16Pro38Child11}
          width={230}
          height={67}
        />
        <Text style={[styles.whatIs5, styles.textTypo]}>
          What is 5 / 7 of 14?
        </Text>
        <Text style={[styles.text7, styles.textTypo]}>
          {`1 2 3 4 5 6 7 8 9 `}10{` `}
        </Text>
        <Text style={[styles.basicsOfArithmetic, styles.whatIs5Position]}>
          Basics of arithmetic
        </Text>
        <Ellipse16 style={styles.iphone16Pro38Child12} width={32} height={32} />
        <Text style={[styles.text8, styles.textTypo]}>6</Text>
        <View
          style={[styles.iphone16Pro38Child13, styles.iphone16ChildLayout1]}
        />
        <Text style={[styles.continue, styles.textTypo]}>Continue</Text>
        <Text style={[styles.text9, styles.textFlexBox]}>←</Text>
      </View>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source="image 5.png"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
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
  iphone16Layout: {
    height: 54,
    width: 308,
    borderWidth: 4,
    left: 41,
    borderStyle: "solid",
    borderRadius: 15,
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
  iphone16ChildLayout: {
    height: 31,
    width: 31,
    left: 300,
    position: "absolute",
  },
  text5Typo: {
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
  iphone16ChildLayout1: {
    borderRadius: 15,
    position: "absolute",
  },
  textTypo: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  whatIs5Position: {
    left: "50%",
    fontFamily: "DoHyeon-Regular",
  },
  iphone16Pro38Child: {
    top: 317,
  },
  iphone16Pro38Item: {
    top: 387,
    backgroundColor: "#c8c8c8",
    borderColor: "#424242",
  },
  iphone16Pro38Inner: {
    top: 462,
    backgroundColor: "#c5f1ae",
    borderColor: "#2b9e19",
  },
  rectangleView: {
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
  text: {
    top: 469,
  },
  text1: {
    top: 396,
  },
  text2: {
    top: 321,
  },
  text3: {
    top: 544,
  },
  ellipseIcon: {
    top: 324,
  },
  iphone16Pro38Child1: {
    top: 400,
  },
  iphone16Pro38Child4: {
    top: 473,
  },
  checkCircleIcon: {
    top: 472,
    left: 298,
    position: "absolute",
    overflow: "hidden",
  },
  iphone16Pro38Child5: {
    top: 548,
  },
  rectangleIcon: {
    top: 363,
    left: 500,
    position: "absolute",
  },
  progress: {
    top: 214,
    left: 56,
    color: "#fff",
  },
  text5: {
    top: 236,
    left: 38,
    color: "#fff",
  },
  iphone16Pro38Child6: {
    left: 35,
  },
  hint: {
    left: 55,
    width: 44,
    top: 778,
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
  },
  text6: {
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
  iphone16Pro38Child7: {
    left: 244,
  },
  needHelp: {
    left: 270,
    color: "#fff",
    textAlign: "center",
    lineHeight: 38,
    position: "absolute",
  },
  iphone16Pro38Child8: {
    top: -3,
    backgroundColor: "#552d8e",
    width: 402,
    height: 298,
  },
  iphone16Pro38Child9: {
    top: 1,
    backgroundColor: "#875fc0",
    width: 401,
    height: 97,
  },
  iphone16Pro38Child10: {
    top: 51,
    left: 48,
    backgroundColor: "rgba(149, 199, 255, 0)",
    width: 317,
    height: 114,
  },
  iphone16Pro38Child11: {
    top: 182,
    left: 80,
    borderRadius: 10,
    position: "absolute",
  },
  whatIs5: {
    marginLeft: -81,
    top: 197,
    left: "50%",
    fontFamily: "DoHyeon-Regular",
    color: "#000",
  },
  text7: {
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
  iphone16Pro38Child12: {
    top: 114,
    left: 191,
    position: "absolute",
  },
  text8: {
    top: 111,
    left: 201,
    letterSpacing: 10,
    fontFamily: "Roboto Flex",
    color: "#552d8e",
    fontWeight: "700",
    fontSize: 20,
  },
  iphone16Pro38Child13: {
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
  text9: {
    top: 54,
    left: 7,
    fontSize: 50,
    fontFamily: "Inconsolata-Regular",
    width: 53,
    height: 38,
  },
  iphone16Pro38: {
    top: 0,
    left: 0,
    backgroundColor: "#fdfcff",
    width: 390,
    height: 844,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  image5Icon: {
    top: 789,
    left: 115,
    width: 16,
    height: 14,
    position: "absolute",
  },
  iphone131426: {
    flex: 1,
    width: "100%",
    height: 847,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default IPhone1314;