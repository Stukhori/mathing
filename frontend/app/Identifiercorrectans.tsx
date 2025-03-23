import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import Ellipse1 from "../assets/ellipse-1.svg"

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone131425}>
      			<View style={[styles.iphone131425Child, styles.iphone131425Layout]} />
      			<Text style={[styles.continue, styles.bTypo]}>Continue</Text>
      			<View style={styles.iphone131425Item} />
      			<Text style={[styles.text, styles.bTypo]}>1/15</Text>
      			<View style={[styles.iphone131425Inner, styles.iphone131425Layout]} />
      			<Text style={[styles.b, styles.bTypo]}>B.</Text>
      			<Ellipse1 style={styles.ellipseIcon} width={31} height={31} />
    		</View>);
};

const styles = StyleSheet.create({
  	iphone131425Layout: {
    		borderRadius: 15,
    		position: "absolute"
  	},
  	bTypo: {
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone131425Child: {
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
    		height: 41
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
  	iphone131425Item: {
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
  	iphone131425Inner: {
    		top: 427,
    		left: 41,
    		backgroundColor: "#fff",
    		borderColor: "#70d261",
    		borderWidth: 4,
    		width: 308,
    		height: 54,
    		borderStyle: "solid"
  	},
  	b: {
    		top: 435,
    		left: 60,
    		fontSize: 22,
    		color: "#000",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38
  	},
  	ellipseIcon: {
    		top: 439,
    		left: 300,
    		position: "absolute"
  	},
  	iphone131425: {
    		backgroundColor: "#fdfcff",
    		borderColor: "#000",
    		borderWidth: 1,
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden",
    		borderStyle: "solid"
  	}
});

export default IPhone1314;