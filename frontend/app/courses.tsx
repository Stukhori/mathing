import * as React from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import Rectangle6 from "../assets/course/rectangle-6.svg"
import Ellipse3 from "../assets/course/ellipsecourse1.svg"
import Ellipse4 from "../assets/course/ellipsecourse2.svg"
import Rectangle181 from "../assets/course/rectangle-181.svg"
import Rectangle178 from "../assets/course/rectangle-178.svg"
import Vuesaxlinearheart from "../assets/heart.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import Vuesaxlinearprofile from "../assets/profile.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Lisearch from "../assets/lisearch.svg"
import Ellipse8 from "../assets/course/ellipsecourse5.svg"
import Ellipse9 from "../assets/course/ellipsecourse6.svg"
import Ellipse11 from "../assets/course/ellipsecourse7.svg"
import Ellipse12 from "../assets/course/ellipsecourse8.svg"
import Rectangle184 from "../assets/course/rectangle-184.svg"
import Ellipse6 from "../assets/course/ellipsecourse3.svg"
import Ellipse7 from "../assets/course/ellipsecourse4.svg"
import { useRouter } from "expo-router";


const IPhone16Pro = () => {
  		const router = useRouter();

  	return (
    		<View style={styles.iphone16Pro36}>
      			<Text style={[styles.courses, styles.coursesbox]}>Courses</Text>
      			<View style={[styles.iphone16Pro36Child, styles.coursesrectangles]} />
      			<Image style={styles.maskGroupIcon} resizeMode="cover" source={require("../src/img/courses/beginner.png")} />
      			<View style={[styles.iphone16Pro36Item, styles.coursesrectangles]} />
      			<View style={[styles.iphone16Pro36Inner, styles.coursesrectangles]} />
      			<Image style={[styles.intermediateicon, styles.coursesicons]} resizeMode="cover" source={require("../src/img/courses/intermediate.png")} />
      			<Image style={[styles.advancedicon, styles.coursesicons]} resizeMode="cover" source={require("../src/img/courses/advanced.png")} />
      			<Text style={[styles.beginner, styles.beginnerLayout]}>Beginner</Text>
      			<Text style={[styles.intermediate, styles.advancedFlexBox]}>Intermediate</Text>
      			<Text style={[styles.advanced, styles.advancedFlexBox]}>Advanced</Text>
      			<Rectangle6 style={[styles.algebrarectangle, styles.algebraicon]} width={163} height={229} />
      			<Text style={styles.categories}>Categories</Text>
      			<Image style={[styles.algebraicon1, styles.algebraicon]} resizeMode="cover" source={require("../src/img/courses/algebra.png")} />
      			<View style={[styles.algebrarectangle1, styles.categorieswhitebox]} />
      			<Text style={[styles.algebra, styles.coursesname]}>Algebra</Text>
      			<Ellipse3 style={styles.ellipseIcon} width={38} height={38} />
      			<Ellipse4 style={styles.ellipseIcon} width={38} height={38} />
      			<Text style={[styles.simpleEquationsNumbers, styles.simpleEquationsNumbersLayout]}>Simple equations, numbers, and basic laws</Text>
      			<Rectangle181 style={[styles.logicsrectangle, styles.logicsicon]} width={223} height={349} />
      			<Image style={[styles.logicsicon2, styles.logicsicon]} resizeMode="cover" source={require("../src/img/courses/logics.png")} />
      			<View style={[styles.logicswhite, styles.categorieswhitebox]} />
      			<Text style={[styles.logics, styles.coursesname]}>Logics</Text>
      			<Text style={[styles.reasoningProblemSolvingAn, styles.logicstext]}>Reasoning, problem-solving, and critical thinking</Text>
      			<Text style={[styles.algebrapt, styles.uppercategoriespt]}>59%</Text>
      			<Rectangle178 style={[styles.geometryrectangle, styles.rightctgicons]} width={163} height={229} />
      			<Image style={[styles.geometryimage, styles.rightctgicons]} resizeMode="cover" source={require("../src/img/courses/geometry.png")} />
      			<View style={[styles.iphone16Pro36Child5, styles.rightctgicons]} />
      			<Text style={[styles.geometry, styles.coursesname]}>Geometry</Text>
      			<Text style={[styles.shapesFiguresAngles, styles.arithmetictext]}>Shapes, figures, angles, and key geometry concepts</Text>
      			<View style={styles.iphone16Pro36Child6} />
      			<Ellipse8 style={[styles.geometrybluecircle, styles.iphone16ChildLayout4]} width={39} height={39} />
      			<Ellipse9 style={[styles.geometrygraycircle, styles.iphone16ChildLayout4]} width={42} height={42} />
      			<Text style={[styles.geometrypttext, styles.uppercategoriespt]}>28%</Text>
      			<Ellipse11 style={[styles.logicsbluecircle, styles.lowerctgcircle]} width={38} height={38} />
      			<Ellipse12 style={[styles.iphone16Pro36Child10, styles.iphone16ChildLayout2]} width={41} height={41} />
      			<Text style={[styles.text2, styles.textPosition]}>66%</Text>
      			<Rectangle184 style={[styles.iphone16Pro36Child11, styles.rightctgicons]} width={163} height={229} />
      			<Image style={[styles.arithmeticicon, styles.rightctgicons]} resizeMode="cover" source={require("../src/img/courses/arithmetic.png")} />
      			<View style={[styles.iphone16Pro36Child12, styles.rightctgicons]} />
      			<Text style={[styles.arithmetic, styles.coursesname]}>Arithmetic</Text>
      			<Text style={[styles.fundamentalOperationsOf, styles.arithmetictext]}>Fundamental operations of numbers</Text>
      			<Ellipse6 style={[styles.iphone16Pro36Child13, styles.lowerctgcircle]} width={38} height={38} />
      			<Ellipse7 style={[styles.iphone16Pro36Child14, styles.iphone16ChildLayout2]} width={41} height={41} />
      			<Text style={[styles.text3, styles.textPosition]}>36%</Text>
      			<View style={[styles.iphone16Pro36Child15, styles.iphone16ChildLayout1]} />
      			<View style={[styles.iphone16Pro36Child16, styles.iphone16ChildLayout1]} />
      			<Text style={[styles.continue, styles.continueTypo1]}>Continue</Text>
      			<Text style={[styles.continue1, styles.continueTypo]}>Continue</Text>
      			<View style={[styles.iphone16Pro36Child17, styles.iphone16ChildLayout]} />
      			<View style={[styles.iphone16Pro36Child18, styles.iphone16ChildLayout]} />
      			<Text style={[styles.continue2, styles.continueTypo1]}>Continue</Text>
      			<Text style={[styles.continue3, styles.continueTypo]}>Continue</Text>
								<TouchableOpacity 
						  style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} 
						  onPress={() => router.push("/profile")}
						>
						  <Vuesaxlinearprofile />
						</TouchableOpacity>
				
						<TouchableOpacity 
						  style={[styles.vuesaxlinearsetting2Icon, styles.iconLayout]} 
						  onPress={() => router.push("/settingspage")}
						>
						  <Vuesaxlinearsetting2 />
						</TouchableOpacity>
				
						<TouchableOpacity 
						  style={[styles.lisearchIcon, styles.iconPosition]} 
						  onPress={() => router.push("/home")}
						>
						  <Lisearch width={45} height={41} />
						</TouchableOpacity>
				
						<TouchableOpacity 
						  style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]} 
						  onPress={() => router.push("/home")}
						>
						  <Vuesaxlinearhome />
						</TouchableOpacity>
				
						<TouchableOpacity 
						  style={[styles.vuesaxlinearheartIcon, styles.iconPosition]} 
						  onPress={() => router.push("/learnwithfriends")}
						>
						  <Vuesaxlinearheart width={45} height={45} />
						</TouchableOpacity>
    		</View>);
};

const styles = StyleSheet.create({
  	coursesbox: {
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38
  	},
  	coursesrectangles: {
    		height: 36,
    		borderRadius: 20,
    		top: 158,
    		position: "absolute"
  	},
  	coursesicons: {
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
  	algebraicon: {
    		width: 163,
    		left: 25,
    		position: "absolute"
  	},
  	categorieswhitebox: {
    		height: 48,
    		backgroundColor: "#fff"
  	},
  	coursesname: {
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
    		height: 37,
    		width: 150,
    		lineHeight: 15,
    		left: 32,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		color: "#fff"
  	},
  	logicsicon: {
    		top: 531,
    		width: 163,
    		borderRadius: 15,
    		left: 25,
    		position: "absolute"
  	},
  	logicstext: {
    		fontFamily: "Roboto-Bold",
    		fontWeight: "600"
  	},
  	uppercategoriespt: {
    		fontSize: 11,
    		position: "absolute"
  	},
  	rightctgicons: {
    		left: 211,
    		width: 163,
    		position: "absolute"
  	},
  	arithmetictext: {
    		left: 218,
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
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		bottom: "1.49%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iphone16ChildLayout4: {
    		borderRadius: 40,
    		position: "absolute"
  	},
  	lowerctgcircle: {
    		top: 628,
    		width: 38,
    		borderRadius: 40,
    		height: 38,
    		position: "absolute"
  	},
  	iphone16ChildLayout2: {
    		width: 11,
    		top: 626,
    		height: 1,
    		borderRadius: 40,
    		position: "absolute"
  	},
  	textPosition: {
    		top: 627,
    		fontSize: 11,
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
    		left: 241,
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
    		left: 97,
    		width: 27,
    		height: 27,
    		position: "absolute"
  	},
  	iphone16Pro36Item: {
    		left: 158,
    		backgroundColor: "rgba(239, 238, 238, 0.93)",
    		width: 103,
    		borderRadius: 20,
    		top: 158
  	},
  	iphone16Pro36Inner: {
    		left: 275,
    		backgroundColor: "#efeeee",
    		width: 104,
    		borderRadius: 20,
    		top: 158
  	},
  	intermediateicon: {
    		left: 229
  	},
  	advancedicon: {
    		left: 346
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
    		left: 164,
    		width: 83,
    		height: 52,
    		textAlign: "left",
    		fontSize: 12
  	},
  	advanced: {
    		left: 282,
    		textAlign: "left",
    		width: 105,
    		fontSize: 14,
    		top: 157,
    		color: "#272727"
  	},
  	algebrarectangle: {
    		borderRadius: 45,
    		top: 356,
			width: 155
  	},
  	categories: {
    		top: 205,
    		fontSize: 28,
    		fontFamily: "DoHyeon-Regular",
    		width: 124,
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
  	algebraicon1: {
    		height: 103,
    		borderRadius: 15,
    		top: 266
  	},
  	algebrarectangle1: {
    		top: 357,
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
    		left: 134,
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
  	logicsrectangle: {
		left: 34
	},
  	logicsicon2: {
    		height: 102
  	},
  	logicswhite: {
    		top: 622,
    		width: 163,
    		left: 25,
    		position: "absolute"
  	},
  	logics: {
    		top: 633,
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
  	algebrapt: {
    		left: 143,
    		top: 362,
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontFamily: "DoHyeon-Regular"
  	},
  	geometryrectangle: {
    		borderRadius: 15,
    		top: 356
  	},
  	geometryimage: {
    		height: 109,
    		borderRadius: 15,
    		top: 266
  	},
  	iphone16Pro36Child5: {
    		height: 48,
    		backgroundColor: "#fff",
    		top: 357
  	},
  	geometry: {
    		left: 231,
    		top: 368,
    		width: 116,
    		fontSize: 17,
    		textAlign: "left"
  	},
  	shapesFiguresAngles: {
    		top: 405,
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone16Pro36Child6: {
    		top: 784,
    		left: 0,
    		backgroundColor: "#ededed",
    		width: 402,
    		height: 70,
    		position: "absolute"
  	},
  	vuesaxlinearheartIcon: {
    		width: "11.19%",
    		right: "64.43%",
    		left: "24.38%",
    		top: "93.6%",
    		height: "5.03%",
    		maxWidth: "100%",
    		bottom: "1.49%"
  	},
  	vuesaxlinearhomeIcon: {
    		width: "11.44%",
    		right: "44.03%",
    		left: "44.53%",
    		top: "93.48%",
    		height: "5.03%",
    		maxWidth: "100%",
    		bottom: "1.49%"
  	},
  	vuesaxlinearprofileIcon: {
    		height: "5.26%",
    		width: "11.69%",
    		top: "93.5%",
    		right: "23.63%",
    		left: "64.68%"
  	},
  	vuesaxlinearsetting2Icon: {
    		top: 788,
    		left: 318,
    		position: "absolute"
  	},
  	lisearchIcon: {
    		top: 791,
    		left: 29,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	geometrybluecircle: {
    		left: 318,
    		top: 362
  	},
  	geometrygraycircle: {
    		top: 360,
    		left: 317
  	},
  	geometrypttext: {
    		left: 329,
    		fontFamily: "DoHyeon-Regular",
    		top: 362,
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38
  	},
  	logicsbluecircle: {
    		left: 128
  	},
  	iphone16Pro36Child10: {
    		left: 133
  	},
  	text2: {
    		left: 144,
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone16Pro36Child11: {
    		top: 613,
    		borderRadius: 15
  	},
  	arithmeticicon: {
    		top: 532,
    		borderRadius: 11,
    		height: 102
  	},
  	iphone16Pro36Child12: {
    		top: 624,
    		height: 48,
    		backgroundColor: "#fff"
  	},
  	arithmetic: {
    		top: 635,
    		left: 227,
    		textAlign: "left"
  	},
  	fundamentalOperationsOf: {
    		top: 672,
    		fontFamily: "Roboto-Bold",
    		fontWeight: "600"
  	},
  	iphone16Pro36Child13: {
    		left: 323
  	},
  	iphone16Pro36Child14: {
    		left: 324.5
  	},
  	text3: {
    		left: 332,
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone16Pro36Child15: {
    		backgroundColor: "#96abff",
    		left: 40
  	},
  	iphone16Pro36Child16: {
    		backgroundColor: "#fbbb9c",
    		left: 225
  	},
  	continue: {
    		top: 715
  	},
  	continue1: {
    		top: 715
  	},
  	iphone16Pro36Child17: {
    		backgroundColor: "#dd97ff",
    		left: 40
  	},
  	iphone16Pro36Child18: {
    		backgroundColor: "#97fe88",
    		left: 225
  	},
  	continue2: {
    		top: 448
  	},
  	continue3: {
    		top: 449
  	},
  	iphone16Pro36: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		flex: 1,
    		width: "100%",
    		height: 874,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	}
});

export default IPhone16Pro;