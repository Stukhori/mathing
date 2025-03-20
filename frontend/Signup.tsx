import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone13143}>
      <View style={styles.iphone16Pro37}>
        <View style={styles.frame}>
          <Text style={[styles.alreadyHaveAn, styles.alreadyText]}>
            ALREADY HAVE AN ACCOUNT? LOG IN
          </Text>
        </View>
        <View style={styles.frame1}>
          <View style={[styles.frame2, styles.frameLayout2]} />
          <View style={[styles.frame3, styles.frameLayout2]}>
            <Text style={[styles.createAccount, styles.createAccountText1]}>
              create account
            </Text>
          </View>
        </View>
        <View style={styles.frame4}>
          <Text style={styles.firstName}>First Name</Text>
          <Text style={styles.firstName}>First Name</Text>
          <Text style={styles.firstName}>First Name</Text>
          <View style={[styles.frame5, styles.frameLayout1]}>
            <View style={styles.frameBorder} />
            <View style={[styles.frame7, styles.frameLayout]}>
              <Text style={[styles.startLearning, styles.createAccountText1]}>
                Start Learning
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame8, styles.frameLayout]} />
        <Text style={[styles.creationOfProfile, styles.mathingFlexBox]}>
          Creation of profile
        </Text>
        <View style={styles.frame9}>
          <Text style={[styles.emailAddress, styles.phoneNumberTypo]}>
            email address
          </Text>
          <View style={[styles.frame10, styles.frameLayout1]}>
            <View style={styles.frameBorder} />
            <View style={[styles.frame7, styles.frameLayout]}>
              <Text style={[styles.startLearning, styles.createAccountText1]}>
                Start Learning
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame13, styles.frameShadowBox]}>
          <Text style={[styles.phoneNumber, styles.phoneNumberTypo]}>
            phone number
          </Text>
          <View style={[styles.frame5, styles.frameLayout1]}>
            <View style={styles.frameBorder} />
            <View style={[styles.frame7, styles.frameLayout]}>
              <Text style={[styles.startLearning, styles.createAccountText1]}>
                Start Learning
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame17, styles.frameShadowBox]}>
          <Text style={[styles.phoneNumber, styles.phoneNumberTypo]}>
            username
          </Text>
          <View style={[styles.frame5, styles.frameLayout1]}>
            <View style={styles.frameBorder} />
            <View style={[styles.frame7, styles.frameLayout]}>
              <Text style={[styles.startLearning, styles.createAccountText1]}>
                Start Learning
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame21, styles.frameShadowBox]}>
          <Text style={[styles.phoneNumber, styles.phoneNumberTypo]}>
            password
          </Text>
          <View style={[styles.frame5, styles.frameLayout1]}>
            <View style={styles.frameBorder} />
            <View style={[styles.frame7, styles.frameLayout]}>
              <Text style={[styles.startLearning, styles.createAccountText1]}>
                Start Learning
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.alreadyHaveAnContainer, styles.alreadyText]}>
          <Text
            style={styles.alreadyHaveAn1}
          >{`ALREADY HAVE AN ACCOUNT? `}</Text>
          <Text style={styles.logIn}>LOG IN</Text>
        </Text>
        <Text style={[styles.byContinuingYou, styles.mathingFlexBox]}>
          By continuing, you agree to our terms of service and privacy policy
        </Text>
        <Text style={[styles.mathing, styles.mathingFlexBox]}>Mathing</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alreadyText: {
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    position: "absolute",
  },
  frameLayout2: {
    height: 48,
    width: 330,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  createAccountText1: {
    color: "#f8f9fa",
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    position: "absolute",
  },
  frameLayout1: {
    height: 50,
    width: 330,
    borderRadius: 12,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 221,
    position: "absolute",
    overflow: "hidden",
  },
  mathingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  phoneNumberTypo: {
    color: "#5e5555",
    top: 15,
    fontFamily: "DoHyeon-Regular",
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 15,
    position: "absolute",
  },
  frameShadowBox: {
    left: 37,
    backgroundColor: "#fff",
    height: 48,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    width: 330,
    borderRadius: 12,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  alreadyHaveAn: {
    top: 24,
    left: 39,
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 15,
  },
  frame: {
    top: 703,
    left: 159,
    width: 100,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    backgroundColor: "#6637a1",
    borderColor: "#6337a1",
    borderWidth: 2,
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    height: 48,
    borderRadius: 12,
    left: 0,
    shadowOpacity: 1,
  },
  createAccount: {
    marginTop: -9,
    marginLeft: -69,
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
    top: "50%",
    left: "50%",
  },
  frame3: {
    left: "50%",
    height: 48,
    marginLeft: -165,
  },
  frame1: {
    top: 606,
    height: 61,
    width: 330,
    borderRadius: 12,
    left: "50%",
    marginLeft: -165,
    position: "absolute",
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
  frameBorder: {
    backgroundColor: "#007bff",
    borderColor: "#0726af",
    height: 48,
    borderWidth: 2,
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    width: 330,
    borderRadius: 12,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  startLearning: {
    top: 2,
    left: 43,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 15,
  },
  frame7: {
    top: 14,
    left: 55,
    height: 21,
  },
  frame5: {
    top: -82,
  },
  frame4: {
    top: -198,
    left: 146,
    backgroundColor: "rgba(0, 123, 255, 0.2)",
    width: 370,
    borderColor: "#0726af",
    height: 48,
    borderWidth: 2,
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    borderRadius: 12,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  frame8: {
    top: -304,
    left: 229,
    height: 20,
  },
  creationOfProfile: {
    marginLeft: -62,
    top: -265,
    fontSize: 32,
    fontFamily: "JockeyOne-Regular",
    color: "#09090a",
    height: 23,
    width: 370,
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  emailAddress: {
    left: 14,
  },
  frame10: {
    top: -88,
  },
  frame9: {
    marginLeft: -164,
    top: 310,
    width: 329,
    backgroundColor: "#fff",
    height: 48,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    borderRadius: 12,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  phoneNumber: {
    left: 15,
  },
  frame13: {
    top: 370,
  },
  frame17: {
    top: 432,
  },
  frame21: {
    top: 498,
  },
  alreadyHaveAn1: {
    color: "#000",
  },
  logIn: {
    color: "#007bff",
  },
  alreadyHaveAnContainer: {
    marginLeft: -167,
    top: 775,
    fontSize: 20,
    fontFamily: "DoHyeon-Regular",
    left: "50%",
  },
  byContinuingYou: {
    marginLeft: -158,
    top: 672,
    lineHeight: 22,
    fontFamily: "Roboto-Regular",
    width: 306,
    height: 49,
    color: "#000",
    fontSize: 15,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
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
    top: "50%",
  },
  iphone16Pro37: {
    backgroundColor: "#fdfcff",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 844,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iphone13143: {
    backgroundColor: "#ef8e8e",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default IPhone1314;
