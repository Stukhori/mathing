import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Vector from "../assets/wire.svg";
import Maskgroup from "../assets/mask-group.svg";

const IPhone1314 = () => {
  return (
    <View style={[styles.iphone13146, styles.iphone13146Layout]}>
      <View style={[styles.iphone16Pro38, styles.iphone13146Layout]}>
        <View style={styles.btnberanda} />
        <Text style={[styles.error, styles.textTypo]}>Error</Text>
        <Text style={[styles.itSeemsLike, styles.textTypo]}>
          It seems like you're offline. Please check your internet connection.
        </Text>
        <Text style={[styles.retry, styles.textTypo]}>Retry</Text>
        <Vector style={[styles.vectorIcon, styles.iconLayout]} />
        <Maskgroup style={[styles.maskGroupIcon, styles.iconLayout]} />
        <Text style={[styles.text, styles.textTypo]}>404</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13146Layout: {
    overflow: "hidden",
    height: 844,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btnberanda: {
    top: 669,
    left: 75,
    borderRadius: 10,
    backgroundColor: "#6637a1",
    width: 240,
    height: 50,
    position: "absolute",
  },
  error: {
    top: 494,
    left: 160,
    fontSize: 30,
    color: "#161719",
    width: 70,
    height: 21,
  },
  itSeemsLike: {
    height: "8.89%",
    marginLeft: -145,
    top: "64.69%",
    left: "50%",
    fontSize: 25,
    color: "#9b9b9b",
    width: 291,
  },
  retry: {
    height: "3.32%",
    width: "19.49%",
    top: "80.45%",
    left: "39.49%",
    fontSize: 22,
    color: "#fff",
  },
  vectorIcon: {
    height: "27.46%",
    width: "84.64%",
    top: "14.99%",
    right: "7.65%",
    bottom: "57.55%",
    left: "7.71%",
  },
  maskGroupIcon: {
    height: "27.37%",
    width: "84.62%",
    top: "15.28%",
    right: "7.69%",
    bottom: "57.35%",
    left: "7.69%",
  },
  text: {
    height: "9.24%",
    width: "26.92%",
    top: "50%",
    left: "36.41%",
    fontSize: 60,
    lineHeight: 69,
    color: "#6637a1",
  },
  iphone16Pro38: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 390,
    position: "absolute",
  },
  iphone13146: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
  },
});

export default IPhone1314;