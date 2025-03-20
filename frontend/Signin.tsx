import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Eyeoff from "../assets/eye-off.svg";
import Xmlid34 from "../assets/xmlid-34.svg";
import Image32lww from "../assets/image--32lww.svg";

const IPhone1314 = () => {
  return (
    <View style={[styles.iphone13145, styles.iphone13145ShadowBox]}>
      <View style={[styles.iphone16Pro38, styles.iphone13145ShadowBox]}>
        <View style={[styles.frame, styles.frameLayout2]}>
          <Text style={[styles.alreadyHaveAn, styles.signTypo]}>
            ALREADY HAVE AN ACCOUNT? LOG IN
          </Text>
        </View>
        <View style={[styles.frame1, styles.frameShadowBox1]}>
          <Text style={styles.firstName}>First Name</Text>
          <Text style={styles.firstName}>First Name</Text>
          <Text style={styles.firstName}>First Name</Text>
          <View style={[styles.frame2, styles.frameLayout1]}>
            <View style={styles.frameLayout} />
            <View style={[styles.frame4, styles.framePosition]}>
              <Text style={[styles.startLearning, styles.signIn1Text]}>
                Start Learning
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame5, styles.frame5Layout]} />
        <Text style={[styles.creationOfProfile, styles.mathingFlexBox]}>
          Creation of profile
        </Text>
        <Text style={[styles.signIn, styles.orFlexBox]}>Sign in</Text>
        <Text style={[styles.forgotYourPassword, styles.signIn1Typo]}>
          Forgot your password?
        </Text>
        <View style={[styles.frame6, styles.frameLayout2]} />
        <View style={[styles.frame7, styles.frameShadowBox1]}>
          <Eyeoff
            style={[styles.eyeOffIcon, styles.frame5Layout]}
            width={27}
            height={20}
          />
          <Text style={[styles.password, styles.passwordTypo]}>password</Text>
        </View>
        <View style={[styles.frame8, styles.frameLayout1]}>
          <View style={styles.frame9} />
          <View style={[styles.frame10, styles.framePosition]}>
            <Text style={[styles.signIn1, styles.signIn1Typo]}>Sign in</Text>
          </View>
        </View>
        <View style={[styles.frame11, styles.frameLayout1]}>
          <View style={[styles.frame10, styles.framePosition]} />
          <Text style={[styles.signInWith, styles.signTypo]}>
            Sign in with apple
          </Text>
          <Xmlid34 style={styles.xmlid34Icon} />
        </View>
        <Text style={[styles.or, styles.orFlexBox]}>or</Text>
        <View style={[styles.frame13, styles.frameShadowBox]}>
          <Image32lww style={styles.image32lwwIcon} width={34} height={34} />
          <View style={[styles.frame14, styles.frame14Position]}>
            <Text style={[styles.signInWith1, styles.signTypo]}>
              Sign in with google
            </Text>
          </View>
        </View>
        <View style={[styles.iphone16Pro38Child, styles.iphone16Position]} />
        <View style={[styles.iphone16Pro38Item, styles.iphone16Position]} />
        <Text style={[styles.mathing, styles.frame14Position]}>Mathing</Text>
        <View style={[styles.frame15, styles.frameShadowBox]}>
          <Text style={[styles.emailAddress, styles.passwordTypo]}>
            email address
          </Text>
          <View style={[styles.frame2, styles.frameLayout1]}>
            <View style={styles.frameLayout} />
            <View style={[styles.frame4, styles.framePosition]}>
              <Text style={[styles.startLearning, styles.signIn1Text]}>
                Start Learning
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13145ShadowBox: {
    height: 844,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  frameLayout2: {
    width: 100,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  signTypo: {
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 15,
    position: "absolute",
  },
  frameShadowBox1: {
    height: 48,
    borderStyle: "solid",
    borderRadius: 12,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  frameLayout1: {
    height: 50,
    width: 330,
    borderRadius: 12,
    position: "absolute",
  },
  framePosition: {
    top: 14,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  signIn1Text: {
    color: "#f8f9fa",
    top: 2,
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
  },
  frame5Layout: {
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  mathingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  orFlexBox: {
    lineHeight: 38,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  signIn1Typo: {
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    position: "absolute",
  },
  passwordTypo: {
    color: "#5e5555",
    top: 15,
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 15,
    position: "absolute",
  },
  frameShadowBox: {
    backgroundColor: "#fff",
    width: 330,
    height: 48,
    borderStyle: "solid",
    borderRadius: 12,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  frame14Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iphone16Position: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#514880",
    backgroundColor: "rgba(79, 69, 127, 0.99)",
    top: 677,
    borderStyle: "solid",
    position: "absolute",
  },
  alreadyHaveAn: {
    top: 24,
    left: 39,
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
  frame: {
    top: 703,
    left: 155,
    height: 21,
  },
  firstName: {
    color: "rgba(124, 129, 135, 0.49)",
    left: 15,
    top: 15,
    textAlign: "left",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 15,
    position: "absolute",
  },
  frameLayout: {
    backgroundColor: "#007bff",
    width: 330,
    height: 48,
    borderWidth: 2,
    borderColor: "#0726af",
    borderStyle: "solid",
    borderRadius: 12,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  startLearning: {
    left: 43,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 15,
    top: 2,
    position: "absolute",
  },
  frame4: {
    left: 55,
    width: 221,
  },
  frame2: {
    top: -82,
    left: 0,
  },
  frame1: {
    top: -198,
    left: 146,
    backgroundColor: "rgba(0, 123, 255, 0.2)",
    width: 370,
    borderWidth: 2,
    borderColor: "#0726af",
    height: 48,
    borderStyle: "solid",
    borderRadius: 12,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
  },
  frame5: {
    top: -304,
    left: 229,
    width: 221,
  },
  creationOfProfile: {
    marginLeft: -62,
    top: -265,
    fontSize: 32,
    fontFamily: "JockeyOne-Regular",
    color: "#09090a",
    height: 23,
    left: "50%",
    width: 370,
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  signIn: {
    marginLeft: -164,
    top: 326,
    fontSize: 29,
    color: "#5d219c",
    width: 84,
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    position: "absolute",
  },
  forgotYourPassword: {
    marginLeft: -10,
    top: 342,
    color: "#1da1f2",
    width: 175,
    height: 22,
    lineHeight: 38,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  frame6: {
    top: 415,
    left: 169,
    height: 21,
  },
  eyeOffIcon: {
    top: 13,
    left: 290,
  },
  password: {
    left: 16,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
  frame7: {
    top: 436,
    backgroundColor: "rgba(255, 255, 255, 0.49)",
    borderColor: "#bca0de",
    width: 329,
    borderWidth: 1,
    left: 30,
    height: 48,
    borderStyle: "solid",
    borderRadius: 12,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
  },
  frame9: {
    backgroundColor: "#6637a1",
    borderColor: "#6637a1",
    width: 330,
    height: 48,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 12,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  signIn1: {
    marginLeft: -28.5,
    color: "#f8f9fa",
    top: 2,
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
  },
  frame10: {
    marginLeft: -65,
    width: 129,
    left: "50%",
  },
  frame8: {
    top: 505,
    left: 31,
  },
  signInWith: {
    marginLeft: -71,
    top: 17,
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
  },
  xmlid34Icon: {
    height: "58%",
    width: "7.88%",
    top: "16%",
    right: "87.88%",
    bottom: "26%",
    left: "4.24%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame11: {
    top: 751,
    backgroundColor: "#091624",
    left: 30,
  },
  or: {
    marginLeft: -18,
    top: 662,
    fontSize: 20,
    fontFamily: "Dosis-Regular",
    color: "rgba(79, 69, 127, 0.99)",
    width: 32,
    left: "50%",
    height: 21,
    position: "absolute",
  },
  image32lwwIcon: {
    top: 6,
    left: 9,
    position: "absolute",
    overflow: "hidden",
  },
  signInWith1: {
    marginLeft: -76,
    color: "#010911",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    top: 0,
  },
  frame14: {
    marginTop: -7,
    marginLeft: -118,
    width: 236,
    height: 21,
    overflow: "hidden",
  },
  frame13: {
    top: 695,
    borderColor: "#d6bdf4",
    left: 30,
    borderWidth: 2,
  },
  iphone16Pro38Child: {
    left: 232,
    width: 122,
  },
  iphone16Pro38Item: {
    width: 125,
    left: 30,
  },
  mathing: {
    marginTop: -259,
    marginLeft: -172,
    fontSize: 75,
    lineHeight: 25,
    color: "#b875ff",
    width: 342,
    height: 58,
    fontFamily: "DoHyeon-Regular",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  emailAddress: {
    fontFamily: "DoHyeon-Regular",
    left: 15,
  },
  frame15: {
    marginLeft: -165,
    top: 376,
    borderColor: "#a377da",
    borderWidth: 1,
    left: "50%",
  },
  iphone16Pro38: {
    backgroundColor: "#fdfcff",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13145: {
    backgroundColor: "#fdbdbd",
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default IPhone1314;
