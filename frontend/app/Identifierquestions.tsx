import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Ellipse1 from "../assets/ellipse-1.svg";
import Ellipse2 from "../assets/ellipse-2.svg";
import Ellipse5 from "../assets/ellipse-5.svg";
import Ellipse11 from "../assets/ellipse-11.svg";
import Rectangle173 from "../assets/rectangle-173.svg";

const Component = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.header} />
        <Text style={styles.pageNumber}>1/15</Text>
      </View>

      <View style={styles.content}>
        <Rectangle173 style={styles.rectangleIcon} />

        {/* Answer options */}
        {["A.", "B.", "C.", "D."].map((option, index) => (
          <React.Fragment key={index}>
            <View style={[styles.optionBox, styles[`optionBox${index}`]]} />
            <Text style={[styles.optionText, styles[`optionText${index}`]]}>
              {option}
            </Text>
            {index === 0 && <Ellipse1 style={styles.ellipseIcon} />}
            {index === 1 && <Ellipse5 style={styles.ellipseIcon} />}
            {index === 2 && <Ellipse2 style={styles.ellipseIcon} />}
            {index === 3 && <Ellipse11 style={styles.ellipseIcon} />}
          </React.Fragment>
        ))}

        <View style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfcff",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    position: "absolute",
    top: -21,
    left: 0,
    backgroundColor: "#6337a1",
    width: 390,
    height: 350,
  },
  pageNumber: {
    position: "absolute",
    top: 33,
    right: 76,
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
  },
  content: {
    flex: 1,
  },
  rectangleIcon: {
    position: "absolute",
    height: "20.62%",
    width: "85.64%",
    top: "11.49%",
    right: "7.18%",
    left: "0.18%",
    borderRadius: 10,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  optionBox: {
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fff",
    left: "11.28%",
    right: "11.28%",
    width: "77.44%",
    height: "5.69%",
    borderRadius: 15,
  },
  optionBox0: { top: "42.3%", borderColor: "#d6bdf4" },
  optionBox1: { top: "50.95%", borderColor: "#d1b1ff" },
  optionBox2: { top: "59.83%", borderColor: "#d6bdf4" },
  optionBox3: { top: "68.6%", borderColor: "#d6bdf4" },
  optionText: {
    position: "absolute",
    left: "15.38%",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    fontSize: 22,
    fontWeight: "700",
  },
  optionText0: { top: "42.89%", fontFamily: "Roboto-Bold" },
  optionText1: { top: "51.54%", fontFamily: "DoHyeon-Regular" },
  optionText2: { top: "60.31%", fontFamily: "DoHyeon-Regular" },
  optionText3: { top: "69.08%", fontFamily: "Roboto-Bold" },
  ellipseIcon: {
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "7.95%",
    height: "3.67%",
    right: "15.13%",
    left: "76.92%",
  },
  continueButton: {
    position: "absolute",
    top: 678,
    left: 99,
    backgroundColor: "#ffd980",
    width: 193,
    height: 41,
    borderRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: { width: 0, height: 133 },
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
  },
  continueText: {
    position: "absolute",
    top: 2,
    left: 61,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
  },
});

export default Component;
