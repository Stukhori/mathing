import * as React from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import Rectangle6 from "../assets/course/rectangle-6.svg"
import Rectangle181 from "../assets/course/rectangle-181.svg"
import Rectangle178 from "../assets/course/rectangle-178.svg"
import Vuesaxlinearheart from "../assets/heart.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import Vuesaxlinearprofile from "../assets/profile.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Lisearch from "../assets/lisearch.svg"
import Rectangle184 from "../assets/course/rectangle-184.svg"
import { useRouter } from "expo-router";

const IPhone1314 = () => {
  	const router = useRouter();

  	return (
    		<View style={[styles.iphone131434, styles.iphone131434Layout]}>
      			<View style={[styles.iphone16Pro36, styles.iphone16Position]}>
        				<Text style={[styles.courses, styles.textFlexBox]}>Courses</Text>
        				<View style={[styles.iphone16Pro36Child, styles.iphone16Layout]} />
        				<Image style={styles.maskGroupIcon} resizeMode="cover" source={require("../src/img/courses/beginner.png")} />
        				<View style={[styles.iphone16Pro36Item, styles.iphone16Layout]} />
        				<View style={[styles.iphone16Pro36Inner, styles.iphone16Layout]} />
        				<Image style={[styles.maskGroupIcon1, styles.iconLayout1]} resizeMode="cover" source={require("../src/img/courses/intermediate.png")} />
        				<Image style={[styles.imageIcon, styles.iconLayout1]} resizeMode="cover" source={require("../src/img/courses/advanced.png")} />
        				<Text style={[styles.beginner, styles.beginnerLayout]}>Beginner</Text>
        				<Text style={[styles.intermediate, styles.advancedFlexBox]}>Intermediate</Text>
        				<Text style={[styles.advanced, styles.advancedFlexBox]}>Advanced</Text>
        				<Rectangle6 style={[styles.rectangleIcon, styles.iconPosition11]} />
        				<Text style={styles.categories}>Categories</Text>
        				<Image style={[styles.imageIcon1, styles.imageIconPosition1]} resizeMode="cover" source={require("../src/img/courses/algebra.png")} />
        				<View style={[styles.rectangleView, styles.rectangleViewPosition]} />
        				<Text style={[styles.algebra, styles.logicsLayout]}>Algebra</Text>
        				<Text style={[styles.simpleEquationsNumbers, styles.simpleEquationsNumbersLayout]}>Simple equations, numbers, and basic laws</Text>
        				<Rectangle181 style={[styles.iphone16Pro36Child2, styles.imageIcon2Position11]} />
        				<Image style={[styles.imageIcon2, styles.imageIcon2Position]} resizeMode="cover" source={require("../src/img/courses/logics.png")} />
        				<View style={[styles.iphone16Pro36Child3, styles.iconPosition]} />
        				<Text style={[styles.logics, styles.logicsLayout]}>Logics</Text>
        				<Text style={[styles.reasoningProblemSolvingAn, styles.fundamentalOperationsOfTypo]}>Reasoning, problem-solving, and critical thinking</Text>
        				<Text style={[styles.text, styles.textTypo]}>59%</Text>
        				<Rectangle178 style={[styles.iphone16Pro36Child4, styles.imageIconPosition11]}/>
        				<Image style={[styles.imageIcon3, styles.imageIconPosition]} resizeMode="cover" source={require("../src/img/courses/geometry.png")} />
        				<View style={[styles.iphone16Pro36Child5, styles.imageIconPosition]} />
        				<Text style={[styles.geometry, styles.logicsLayout]}>Geometry</Text>
        				<Text style={[styles.shapesFiguresAngles, styles.shapesFiguresAnglesLayout]}>Shapes, figures, angles, and key geometry concepts</Text>
        				<Text style={[styles.text1, styles.textTypo]}>28%</Text>
        				<Text style={[styles.text2, styles.textPosition]}>66%</Text>
        				<Rectangle184 style={[styles.iphone16Pro36Child10, styles.imageIconPosition12]} />
        				<Image style={[styles.imageIcon4, styles.imageIconPosition]} resizeMode="cover" source={require("../src/img/courses/arithmetic.png")} />
        				<View style={[styles.iphone16Pro36Child11, styles.imageIconPosition13]} />
        				<Text style={[styles.arithmetic, styles.logicsLayout]}>Arithmetic</Text>
        				<Text style={[styles.fundamentalOperationsOf, styles.shapesFiguresAnglesLayout]}>Fundamental operations of numbers</Text>
        				<Text style={[styles.text3, styles.textPosition]}>36%</Text>
        				<View style={[styles.iphone16Pro36Child14, styles.iphone16ChildLayout1]} />
        				<View style={[styles.iphone16Pro36Child15, styles.iphone16ChildLayout1]} />
        				<Text style={[styles.continue, styles.continueTypo1]}>Continue</Text>
        				<Text style={[styles.continue1, styles.continueTypo]}>Continue</Text>
        				<View style={[styles.iphone16Pro36Child16, styles.iphone16ChildLayout]} />
        				<View style={[styles.iphone16Pro36Child17, styles.iphone16ChildLayout]} />
        				<Text style={[styles.continue2, styles.continueTypo1]}>Continue</Text>
        				<Text style={[styles.continue3, styles.continueTypo]}>Continue</Text>
        				<View style={[styles.iphone16Pro36Child18, styles.iphone16Position]} />
        				<Vuesaxlinearprofile style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} />
        				<Lisearch style={[styles.lisearchIcon, styles.iphone16ChildLayout2]} width={45} height={41} />
        				<Vuesaxlinearhome style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]} />
        				<Vuesaxlinearsetting2 style={styles.vuesaxboldsetting2Icon} width={47} height={48} />
        				<Vuesaxlinearheart style={[styles.vuesaxlinearheartIcon, styles.iconLayout]} />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	iphone131434Layout: {
    		height: 844,
    		overflow: "hidden"
  	},
  	iphone16Position: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	textFlexBox: {
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38
  	},
  	iphone16Layout: {
    		height: 36,
    		borderRadius: 20,
    		top: 158,
    		position: "absolute"
  	},
  	iconLayout1: {
    		height: 29,
    		width: 29,
    		top: 162,
    		position: "absolute"
  	},
  	beginnerLayout: {
    		width: 105,
    		fontSize: 14,
    		top: 157
  	},
  	advancedFlexBox: {
    		color: "#272727",
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iconPosition: {
    		width: 163,
    		left: 25,
    		position: "absolute"
  	},
	  iconPosition11: {
		top: 266,
		width: 163,
		left: 0,
		position: "absolute"
  },
  	imageIconPosition1: {
    		top: 266,
    		borderRadius: 15
  	},
  	rectangleViewPosition: {
    		top: 357,
    		height: 48,
    		backgroundColor: "#fff"
  	},
  	logicsLayout: {
    		height: 26,
    		width: 116,
    		fontSize: 17,
    		color: "#272727",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 28,
    		position: "absolute"
  	},
  	simpleEquationsNumbersLayout: {
			top: 411,
    		height: 37,
    		width: 150,
    		lineHeight: 15,
    		left: 32,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		color: "#fff"
  	},
  	imageIcon2Position: {
    		top: 521,
    		width: 163,
    		borderRadius: 15,
    		left: 25,
    		position: "absolute"
  	},
  	fundamentalOperationsOfTypo: {
    		fontFamily: "DoHyeon-Regular",
    		fontWeight: "600",
			fontSize: 13
  	},
  	textTypo: {
    		fontSize: 15,
    		position: "absolute"
  	},
  	imageIconPosition: {
    		left: 206,
    		width: 163,
    		position: "absolute"
  	},
	  imageIconPosition12: {
		top: 521,
		left: 166,
		width: 163,
		position: "absolute"
  },
  imageIconPosition13: {
	top: 606,
	left: 206,
	width: 163,
	position: "absolute"
},
	  imageIconPosition11: {
		left: 166,
		width: 163,
		position: "absolute"
  },
  	shapesFiguresAnglesLayout: {
    		left: 213,
    		height: 37,
    		width: 150,
    		lineHeight: 15,
    		textAlign: "left",
    		fontSize: 12,
    		alignItems: "center",
    		display: "flex",
    		color: "#fff",
    		position: "absolute"
  	},
  	iphone16ChildLayout6: {
    		borderRadius: 40,
    		position: "absolute"
  	},
  	iphone16ChildLayout5: {
    		top: 628,
    		width: 38,
    		borderRadius: 40,
    		height: 38,
    		position: "absolute"
  	},
  	iphone16ChildLayout2: {
    		height: 41,
    		position: "absolute"
  	},
  	textPosition: {
    		top: 618,
    		fontSize: 15,
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone16ChildLayout1: {
    		height: 35,
    		width: 89,
    		borderRadius: 17,
    		top: 717,
    		position: "absolute"
  	},
  	continueTypo1: {
    		fontSize: 15,
    		left: 57,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	continueTypo: {
    		left: 234,
    		fontSize: 15,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone16ChildLayout: {
    		top: 450,
    		height: 35,
    		width: 89,
    		borderRadius: 17,
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		width: "11.54%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	courses: {
    		top: 95,
    		fontSize: 29,
    		fontFamily: "DoHyeon-Regular",
    		left: 25,
    		color: "#000",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone16Pro36Child: {
    		backgroundColor: "#6637a1",
    		width: 102,
    		left: 29,
    		borderRadius: 20,
    		top: 158
  	},
  	maskGroupIcon: {
    		top: 163,
    		left: 94,
    		width: 30,
    		height: 22,
    		position: "absolute"
  	},
  	iphone16Pro36Item: {
    		left: 153,
    		backgroundColor: "rgba(239, 238, 238, 0.93)",
    		width: 103,
    		borderRadius: 20,
    		top: 158
  	},
  	iphone16Pro36Inner: {
    		left: 268,
    		backgroundColor: "#efeeee",
    		width: 104,
    		borderRadius: 20,
    		top: 158
  	},
  	maskGroupIcon1: {
    		left: 224
  	},
  	imageIcon: {
    		left: 336
  	},
  	beginner: {
    		left: 10,
    		justifyContent: "center",
    		textAlign: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#fff",
    		width: 105,
    		fontSize: 14,
    		top: 157,
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	intermediate: {
    		top: 158,
    		left: 159,
    		width: 83,
    		height: 32,
    		textAlign: "left",
    		fontSize: 12
  	},
  	advanced: {
    		left: 275,
    		textAlign: "left",
    		width: 105,
    		fontSize: 14,
    		top: 157,
    		color: "#272727"
  	},
  	rectangleIcon: {
    		top: 270,
    		borderRadius: 15
  	},
  	categories: {
    		top: 205,
    		fontSize: 28,
    		fontFamily: "JockeyOne-Regular",
    		width: 114,
    		height: 38,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		left: 29,
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	imageIcon1: {
    		height: 103,
    		width: 163,
    		left: 25,
    		position: "absolute"
  	},
  	rectangleView: {
    		height: 48,
    		width: 163,
    		left: 25,
    		position: "absolute"
  	},
  	algebra: {
    		left: 45,
    		top: 368,
    		width: 116,
    		fontSize: 17,
    		textAlign: "left"
  	},
  	ellipseIcon: {
    		left: 132,
    		borderRadius: 40,
    		top: 362,
    		position: "absolute"
  	},
  	simpleEquationsNumbers: {
    		top: 405,
    		fontFamily: "DoHyeon-Regular",
    		fontSize: 12,
    		position: "absolute"
  	},
  	iphone16Pro36Child2: {},
	imageIcon2Position11: {
		top: 521,
		width: 163,
		borderRadius: 15,
		left: 0,
		position: "absolute"
	},
  	imageIcon2: {
    		height: 102
  	},
  	iphone16Pro36Child3: {
    		top: 607,
			left: 25,
    		height: 48,
    		backgroundColor: "#fff"
  	},
  	logics: {
    		top: 623,
    		left: 11,
    		justifyContent: "center",
    		textAlign: "center"
  	},
  	reasoningProblemSolvingAn: {
    		top: 670,
    		fontSize: 11,
    		position: "absolute",
    		height: 37,
    		width: 150,
    		lineHeight: 15,
    		left: 32,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		color: "#fff"
  	},
  	text: {
    		left: 141,
    		top: 364,
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone16Pro36Child4: {
    		top: 266,
    		borderRadius: 15
  	},
  	imageIcon3: {
    		height: 109,
    		top: 266,
    		borderRadius: 15
  	},
  	iphone16Pro36Child5: {
    		height: 48,
    		top: 357,
    		backgroundColor: "#fff"
  	},
  	geometry: {
    		left: 226,
    		top: 368,
    		width: 116,
    		fontSize: 17,
    		textAlign: "left"
  	},
  	shapesFiguresAngles: {
    		top: 410,
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone16Pro36Child6: {
    		left: 311,
    		top: 362
  	},
  	iphone16Pro36Child7: {
    		top: 360,
    		left: 309
  	},
  	text1: {
    		left: 321,
    		fontFamily: "DoHyeon-Regular",
    		top: 364,
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38
  	},
  	iphone16Pro36Child8: {
    		left: 133
  	},
  	iphone16Pro36Child9: {
    		left: 131,
    		top: 626,
    		borderRadius: 40
  	},
  	text2: {
    		left: 142,
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone16Pro36Child10: {
    		top: 533,
    		borderRadius: 15
  	},
  	imageIcon4: {
    		top: 522,
    		borderRadius: 11,
    		height: 102
  	},
  	iphone16Pro36Child11: {
    		top: 624,
    		height: 48,
    		backgroundColor: "#fff"
  	},
  	arithmetic: {
    		top: 623,
    		left: 222,
    		textAlign: "left"
  	},
  	fundamentalOperationsOf: {
    		top: 672,
    		fontFamily: "Roboto-Bold",
    		fontWeight: "600"
  	},
  	iphone16Pro36Child12: {
    		left: 313
  	},
  	iphone16Pro36Child13: {
    		top: 626,
    		borderRadius: 40,
    		left: 311
  	},
  	text3: {
    		left: 322,
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone16Pro36Child14: {
    		backgroundColor: "#96abff",
    		left: 40
  	},
  	iphone16Pro36Child15: {
    		backgroundColor: "#fbbb9c",
    		left: 220
  	},
  	continue: {
    		top: 715
  	},
  	continue1: {
    		top: 715
  	},
  	iphone16Pro36Child16: {
    		backgroundColor: "#dd97ff",
    		left: 40
  	},
  	iphone16Pro36Child17: {
    		backgroundColor: "#97fe88",
    		left: 220
  	},
  	continue2: {
    		top: 448
  	},
  	continue3: {
    		top: 449
  	},
  	iphone16Pro36Child18: {
    		top: 779,
    		backgroundColor: "#ededed",
    		height: 65
  	},
  	vuesaxlinearprofileIcon: {
    		height: "5.26%",
    		top: "93.36%",
    		right: "23.29%",
    		bottom: "1.38%",
    		left: "65.17%"
  	},
  	lisearchIcon: {
    		top: 790,
    		left: 20,
    		overflow: "hidden"
  	},
  	vuesaxlinearhomeIcon: {
    		height: "5.04%",
    		top: "93.59%",
    		right: "43.93%",
    		bottom: "1.37%",
    		left: "44.53%"
  	},
  	vuesaxboldsetting2Icon: {
    		top: 787,
    		left: 324,
    		position: "absolute"
  	},
  	vuesaxlinearheartIcon: {
    		height: "5.21%",
    		top: "93.6%",
    		right: "64.62%",
    		bottom: "1.18%",
    		left: "23.85%"
  	},
  	iphone16Pro36: {
    		top: 0,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		backgroundColor: "#fff",
    		overflow: "hidden",
    		height: 844
  	},
  	iphone131434: {
    		backgroundColor: "#ffc1c1",
    		flex: 1,
    		width: "100%",
    		overflow: "hidden"
  	}
});

export default IPhone1314;