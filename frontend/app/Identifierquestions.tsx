import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import Ellipse1 from "../assets/ellipse-1.svg"
import Ellipse2 from "../assets/ellipse-2.svg"
import Ellipse5 from "../assets/ellipse-5.svg"
import Ellipse11 from "../assets/ellipse-11.svg"
import Rectangle173 from "../assets/rectangle-173.svg"

const Component = () => {
  	
  	return (
    		<View style={styles.component1}>
      			<View style={styles.iphone131422}>
        				<View style={styles.iphone131422Child} />
        				<Text style={[styles.continue, styles.textTypo]}>Continue</Text>
        				<View style={styles.iphone131422Item} />
        				<Text style={[styles.text, styles.textTypo]}>1/15</Text>
      			</View>
      			<View style={[styles.component1Child, styles.component1Layout]} />
      			<View style={[styles.component1Item, styles.component1Layout]} />
      			<View style={[styles.component1Inner, styles.component1Layout]} />
      			<View style={[styles.rectangleView, styles.component1Layout]} />
      			<Text style={[styles.a, styles.aTypo]}>A.</Text>
      			<Text style={[styles.b, styles.bTypo]}>B.</Text>
      			<Text style={[styles.c, styles.bTypo]}>C.</Text>
      			<Text style={[styles.d, styles.aTypo]}>D.</Text>
      			<Ellipse1 style={[styles.ellipseIcon, styles.iconChildLayout]} />
      			<Ellipse2 style={[styles.component1Child1, styles.iconChildLayout]} />
      			<Ellipse5 style={[styles.component1Child2, styles.iconChildLayout]} />
      			<Ellipse11 style={[styles.component1Child3, styles.iconChildLayout]} />
      			<Rectangle173 style={[styles.rectangleIcon, styles.iconChildLayout]} />
    		</View>);
};

const styles = StyleSheet.create({
  	textTypo: {
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	component1Layout: {
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		left: "11.28%",
    		right: "11.28%",
    		width: "77.44%",
    		height: "5.69%",
    		borderRadius: 15,
    		position: "absolute"
  	},
  	aTypo: {
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		fontSize: 22,
    		left: "15.38%",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	bTypo: {
    		fontSize: 22,
			fontWeight: "700",
    		left: "15.38%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iconChildLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden",
    		position: "absolute"
  	},
  	iphone131422Child: {
    		top: 678,
    		left: 99,
    		shadowColor: "rgba(0, 0, 0, 0)",
    		shadowOffset: {
      			width: 0,
      			height: 133
    		},
    		shadowRadius: 37,
    		elevation: 37,
    		shadowOpacity: 1,
    		backgroundColor: "#ffd980",
    		width: 193,
    		height: 41,
    		borderRadius: 15,
    		position: "absolute"
  	},
  	continue: {
    		top: 680,
    		left: 160,
    		fontSize: 20,
    		color: "#000",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38
  	},
  	iphone131422Item: {
    		top: -21,
    		left: 0,
    		backgroundColor: "#6337a1",
    		width: 390,
    		height: 350,
    		position: "absolute"
  	},
  	text: {
    		top: 33,
    		left: 314,
    		fontSize: 30,
    		color: "#fff",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38
  	},
  	iphone131422: {
    		height: "100%",
    		top: "0%",
    		right: "0%",
    		bottom: "0%",
    		left: "0%",
    		backgroundColor: "#fdfcff",
    		overflow: "hidden",
    		position: "absolute",
    		width: "100%"
  	},
  	component1Child: {
    		top: "42.3%",
    		bottom: "52.01%",
    		borderColor: "#d6bdf4",
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		left: "11.28%",
    		right: "11.28%",
    		width: "77.44%",
    		height: "5.69%"
  	},
  	component1Item: {
    		top: "50.95%",
    		bottom: "43.36%",
    		borderColor: "#d1b1ff",
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		left: "11.28%",
    		right: "11.28%",
    		width: "77.44%",
    		height: "5.69%"
  	},
  	component1Inner: {
    		top: "59.83%",
    		bottom: "34.48%",
    		borderColor: "#d6bdf4",
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		left: "11.28%",
    		right: "11.28%",
    		width: "77.44%",
    		height: "5.69%"
  	},
  	rectangleView: {
    		top: "68.6%",
    		bottom: "25.71%",
    		borderColor: "#d6bdf4",
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		left: "11.28%",
    		right: "11.28%",
    		width: "77.44%",
    		height: "5.69%"
  	},
  	a: {
    		top: "42.89%"
  	},
  	b: {
    		top: "51.54%"
  	},
  	c: {
    		top: "60.31%"
  	},
  	d: {
    		top: "69.08%"
  	},
  	ellipseIcon: {
    		top: "43.13%",
    		bottom: "53.2%",
    		left: "76.92%",
    		right: "15.13%",
    		width: "7.95%",
    		height: "3.67%",
    		maxWidth: "100%"
  	},
  	component1Child1: {
    		top: "60.78%",
    		bottom: "35.55%",
    		left: "76.92%",
    		right: "15.13%",
    		width: "7.95%",
    		height: "3.67%",
    		maxWidth: "100%"
  	},
  	component1Child2: {
    		top: "51.78%",
    		bottom: "44.55%",
    		left: "76.92%",
    		right: "15.13%",
    		width: "7.95%",
    		height: "3.67%",
    		maxWidth: "100%"
  	},
  	component1Child3: {
    		top: "69.43%",
    		bottom: "26.9%",
    		left: "76.92%",
    		right: "15.13%",
    		width: "7.95%",
    		height: "3.67%",
    		maxWidth: "100%"
  	},
  	rectangleIcon: {
    		height: "20.62%",
    		width: "85.64%",
    		top: "11.49%",
    		right: "7.18%",
    		bottom: "67.89%",
    		left: "0.18%",
    		borderRadius: 10
  	},
  	component1: {
    		flex: 1,
    		height: 844,
    		width: "100%"
  	}
});

export default Component;