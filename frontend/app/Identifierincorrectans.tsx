import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import Ellipse18 from "../assets/ellipse-18.svg"
import Checkcircle from "../assets/check-circle.svg"

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone131431}>
      			<View style={styles.iphone131431Child} />
      			<Text style={[styles.continue, styles.textTypo]}>Continue</Text>
      			<View style={styles.iphone131431Item} />
      			<Text style={[styles.text, styles.textTypo]}>1/15</Text>
      			<Text style={[styles.continue, styles.textTypo]}>Continue</Text>
      			<View style={[styles.iphone131431Inner, styles.rectangleViewLayout]} />
      			<Text style={styles.c}>C.</Text>
      			<View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      			<Text style={[styles.b, styles.bTypo]}>B.</Text>
      			<Ellipse18 style={styles.ellipseIcon} width={31} height={31} />
      			<Checkcircle style={styles.checkCircleIcon} width={36} height={34} />
      			<View style={styles.iphone131431Child1} />
      			<Text style={[styles.c1, styles.bTypo]}>C.</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	textTypo: {
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	rectangleViewLayout: {
    		height: 54,
    		width: 308,
    		borderWidth: 4,
    		left: 41,
    		borderRadius: 15,
    		position: "absolute",
    		borderStyle: "solid"
  	},
  	bTypo: {
    		left: 61,
    		fontSize: 22,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone131431Child: {
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
  	iphone131431Item: {
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
  	iphone131431Inner: {
    		top: 500,
    		backgroundColor: "#c5f1ae",
    		borderColor: "#2b9e19"
  	},
  	c: {
    		top: 450,
    		left: 135,
    		fontSize: 22,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	rectangleView: {
    		top: 425,
    		backgroundColor: "#c8c8c8",
    		borderColor: "#424242"
  	},
  	b: {
    		top: 433
  	},
  	ellipseIcon: {
    		top: 438,
    		left: 301,
    		position: "absolute"
  	},
  	checkCircleIcon: {
    		top: 510,
    		left: 299,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iphone131431Child1: {
    		top: 355,
    		backgroundColor: "#fff",
    		borderColor: "#d6bdf4",
    		width: 302,
    		height: 48,
    		left: 41,
    		borderRadius: 15,
    		position: "absolute",
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	c1: {
    		top: 508
  	},
  	iphone131431: {
    		backgroundColor: "#fdfcff",
    		borderColor: "#000",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden",
    		borderWidth: 1,
    		borderStyle: "solid"
  	}
});

export default IPhone1314;