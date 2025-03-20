import * as React from "react";
import {StyleSheet, View, Text} from "react-native";

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone131422}>
      			<View style={styles.iphone131422Child} />
      			<Text style={[styles.continue, styles.textTypo]}>Continue</Text>
      			<View style={styles.iphone131422Item} />
      			<Text style={[styles.text, styles.textTypo]}>1/15</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	textTypo: {
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
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
    		borderRadius: 15,
    		backgroundColor: "#ffd980",
    		width: 193,
    		height: 41,
    		position: "absolute"
  	},
  	continue: {
    		top: 680,
    		left: 160,
    		fontSize: 20,
    		color: "#000"
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
    		color: "#fff"
  	},
  	iphone131422: {
    		backgroundColor: "#fdfcff",
    		borderStyle: "solid",
    		borderColor: "#000",
    		borderWidth: 1,
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default IPhone1314;