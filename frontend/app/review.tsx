import * as React from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import Radixiconscrosscircled from "../assets/reviewpage/cross-circled.svg"
import Lucidetimer from "../assets/reviewpage/lucidetimer.svg"
import Vuesaxlinearprofile from "../assets/profile.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Lisearch from "../assets/lisearch.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import Simplelineiconscheck from "../assets/reviewpage/icons_check.svg"
import Materialsymbolsshareoutline from "../assets/reviewpage/share-outline.svg"
import Vuesaxlinearheart from "../assets/heart.svg"
import { useRouter } from "expo-router";

const IPhone1314 = () => {
  	const router = useRouter();
	
  	return (
    		<View style={styles.iphone131410}>
      			<View style={styles.iphone16Pro44}>
        				<View style={styles.iphone16Pro44Child} />
        				<Image style={styles.image5Icon} resizeMode="cover" source={require("../src/img/imagecoin.png")} />
        				<Text style={[styles.lessonOverview, styles.textTypo1]}>Lesson overview</Text>
        				<Text style={[styles.score, styles.textTypo1]}>Score</Text>
        				<Image style={styles.percentagecircle} resizeMode="cover" source={require("../src/img/Group1.png")} />
        				<Text style={[styles.percentagetext, styles.percentageLayout]}>60%</Text>
        				<Image style={styles.imageIcon} resizeMode="cover" source={require("../src/img/profilepic.png")} />
        				<Text style={[styles.correctAnswers, styles.answersLayout]}>12 correct answers</Text>
        				<Text style={[styles.wrongAnswers, styles.answersLayout]}>8 wrong answers</Text>
        				<Text style={[styles.minutes, styles.timetext]}>9:51 minutes</Text>
        				<Text style={[styles.recommendations, styles.Recommendations]}>Recommendations</Text>
        				<View style={[styles.recommendation1rectangle, styles.recommendationrectangles]} />
        				<Text style={[styles.coinamount1, styles.text1Layout]}>10</Text>
        				<Image style={styles.coiniconleft} resizeMode="cover" source={require("../src/img/imagecoin.png")} />
        				<View style={[styles.rectangleView, styles.image9IconLayout]} />
        				<Image style={styles.maskGroupIcon} resizeMode="cover" source={require("../src/img/Maskgroup.png")} />
        				<Text style={[styles.shareResultsWith, styles.setTheoryTypo]}>Share results with friends !</Text>
        				<View style={[styles.viewrectangleleft, styles.iphone16ChildBg]} />
        				<Text style={[styles.view, styles.viewLayout]}>View</Text>
        				<View style={[styles.iphone16Pro44Child2, styles.recommendationrectangles]} />
        				<Text style={[styles.text2, styles.coinamount]}>20</Text>
        				<Image style={[styles.image9Icon, styles.image9IconLayout]} resizeMode="cover" source={require("../src/img/imagecoin.png")} />
        				<View style={[styles.iphone16Pro44Child3, styles.rectangleViewBorder]} />
        				<Image style={styles.maskGroupIcon1} resizeMode="cover" source={require("../src/img/Maskgroup.png")} />
        				<View style={[styles.iphone16Pro44Child4, styles.iphone16ChildBg]} />
        				<Text style={[styles.view1, styles.viewTypo]}>View</Text>
        				<Text style={[styles.setTheory, styles.setTheoryTypo]}>Set theory</Text>
        				<Text style={[styles.viewAll, styles.viewTypo]}>View all</Text>
        				<Text style={[styles.treeDiagram, styles.setTheoryTypo]}>Tree diagram</Text>
        				<Radixiconscrosscircled style={[styles.radixIconscrossCircled, styles.percentageLayout]} width={46} height={46} />
        				<Lucidetimer style={styles.lucidetimerIcon} width={54} height={54} />
        				<View style={[styles.iphone16Pro44Child5, styles.answersLayout]} />
        				<Simplelineiconscheck style={styles.simpleLineIconscheck} width={43} height={43} />
										<TouchableOpacity 
								  style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} 
								  onPress={() => router.push("/home")}
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
								  onPress={() => router.push("/home")}
								>
								  <Vuesaxlinearheart width={45} height={45} />
								</TouchableOpacity>
      			</View>
      			<Materialsymbolsshareoutline style={[styles.materialSymbolsshareOutlineIcon, styles.viewLayout]} width={35} height={36} />
    		</View>);
};

const styles = StyleSheet.create({
  	textTypo1: {
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		color: "#000",
    		lineHeight: 38
  	},
  	percentageLayout: {
    		width: 46,
    		position: "absolute"
  	},
  	answersLayout: {
    		height: 65,
    		position: "absolute"
  	},
  	timetext: {
    		fontSize: 25,
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38
  	},
  	Recommendations: {
    		top: 523,
    		position: "absolute"
  	},
  	recommendationrectangles: {
    		height: 162,
    		width: 163,
    		backgroundColor: "#efeeef",
    		borderRadius: 10,
    		elevation: 31,
    		shadowRadius: 31,
    		shadowOffset: {
      			width: 0,
      			height: 112
    		},
    		top: 574,
    		shadowColor: "rgba(0, 0, 0, 0)",
    		shadowOpacity: 1,
    		position: "absolute"
  	},
  	text1Layout: {
    		height: 41,
    		position: "absolute"
  	},
  	image9IconLayout: {
    		height: 29,
    		position: "absolute"
  	},
  	setTheoryTypo: {
    		fontSize: 20,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iphone16ChildBg: {
    		backgroundColor: "#ebc765",
    		borderRadius: 15,
    		position: "absolute"
  	},
  	viewLayout: {
    		height: 36,
    		position: "absolute"
  	},
  	coinamount: {
    		top: 635,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		fontSize: 24
  	},
  	rectangleViewBorder: {
    		borderWidth: 1,
    		borderColor: "#000",
    		borderStyle: "solid",
    		backgroundColor: "#59b934",
    		borderRadius: 17,
    		top: 642
  	},
  	viewTypo: {
    		fontSize: 18,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 32
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		width: "11.54%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iphone16Pro44Child: {
    		marginLeft: -177,
    		top: 81,
    		shadowOffset: {
      			width: 0,
      			height: 300
    		},
    		shadowRadius: 84,
    		elevation: 84,
    		borderRadius: 20,
    		backgroundColor: "#fff",
    		width: 355,
    		height: 420,
    		shadowColor: "rgba(0, 0, 0, 0)",
    		left: "50%",
    		shadowOpacity: 1,
    		position: "absolute"
  	},
  	image5Icon: {
    		top: 748,
    		left: 744,
    		width: 116,
    		height: 95,
    		position: "absolute"
  	},
  	lessonOverview: {
    		top: 109,
    		left: 157,
    		fontSize: 24,
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	score: {
    		top: 162,
    		left: 251,
    		fontSize: 24,
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	percentagecircle: {
    		top: 143,
    		left: 150,
    		width: 77,
    		height: 75,
    		position: "absolute"
  	},
    percentagetext: {
    		top: 162,
    		left: 167,
    		fontSize: 20,
    		height: 77,
    		transform: [
      			{
        				rotate: "-0.3deg"
      			}
    		],
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		color: "#000",
    		lineHeight: 38
  	},
  	imageIcon: {
    		top: 135,
    		left: 35,
    		width: 91,
    		height: 91,
    		position: "absolute"
  	},
  	correctAnswers: {
    		top: 248,
    		width: 230,
    		fontSize: 25,
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		left: 111,
    		height: 65,
    		justifyContent: "center",
    		textAlign: "center"
  	},
  	wrongAnswers: {
    		top: 318,
    		width: 209,
    		fontSize: 25,
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		left: 111,
    		height: 65,
    		justifyContent: "center",
    		textAlign: "center"
  	},
  	minutes: {
    		top: 392,
    		left: 120,
    		textAlign: "left",
    		width: 254,
    		height: 45,
    		position: "absolute"
  	},
  	recommendations: {
    		left: 26,
    		fontSize: 26,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		color: "#000",
    		lineHeight: 38
  	},
  	recommendation1rectangle: {
    		left: 19
  	},
  	coinamount1: {
    		width: 384,
    		left: -35,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		top: 635,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		fontSize: 24
  	},
  	coiniconleft: {
    		left: 109,
    		width: 32,
    		height: 31,
    		top: 640,
    		position: "absolute"
  	},
  	rectangleView: {
    		left: 29,
    		width: 75,
    		borderWidth: 1,
    		borderColor: "#000",
    		borderStyle: "solid",
    		backgroundColor: "#59b934",
    		borderRadius: 17,
    		top: 642
  	},
  	maskGroupIcon: {
    		top: 645,
    		left: 55,
    		width: 23,
    		height: 23,
    		position: "absolute"
  	},
  	shareResultsWith: {
    		marginLeft: -139,
    		top: 446,
    		lineHeight: 38,
    		fontSize: 20,
    		left: "50%"
  	},
  	viewrectangleleft: {
    		left: 53,
    		width: 103,
    		height: 33,
    		top: 689
  	},
  	view: {
    		top: 688,
    		width: 281,
    		fontSize: 18,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		left: -35,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000"
  	},
  	iphone16Pro44Child2: {
    		left: 210
  	},
  	text2: {
    		left: 167,
    		width: 351,
    		height: 37,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		position: "absolute"
  	},
  	image9Icon: {
    		left: 297,
    		width: 29,
    		top: 640
  	},
  	iphone16Pro44Child3: {
    		left: 222,
    		width: 69,
    		height: 27,
    		position: "absolute"
  	},
  	maskGroupIcon1: {
    		top: 644,
    		left: 243,
    		width: 21,
    		height: 21,
    		position: "absolute"
  	},
  	iphone16Pro44Child4: {
    		top: 690,
    		left: 239,
    		width: 94,
    		height: 30
  	},
  	view1: {
    		left: 161,
    		width: 257,
    		height: 32,
    		top: 689,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		position: "absolute"
  	},
  	setTheory: {
    		top: 598,
    		left: 48,
    		lineHeight: 20,
    		width: 105,
    		height: 19,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex"
  	},
  	viewAll: {
    		left: 291,
    		color: "#fff",
    		top: 523,
    		position: "absolute"
  	},
  	treeDiagram: {
    		top: 589,
    		left: 232,
    		lineHeight: 38,
    		fontSize: 20
  	},
  	radixIconscrossCircled: {
    		top: 317,
    		left: 43
  	},
  	lucidetimerIcon: {
    		top: 380,
    		left: 41,
    		position: "absolute"
  	},
  	iphone16Pro44Child5: {
    		top: 780,
    		left: 1,
    		backgroundColor: "#ededed",
    		width: 390
  	},
  	vuesaxlinearprofileIcon: {
    		right: "23.03%",
    		left: "65.43%",
    		bottom: "1.37%",
    		maxWidth: "100%",
    		width: "11.54%",
    		top: "93.37%",
    		height: "5.25%"
  	},
  	vuesaxlinearsetting2Icon: {
    		right: "4.87%",
    		left: "83.59%",
    		bottom: "1.37%",
    		maxWidth: "100%",
    		width: "11.54%",
    		top: "93.37%",
    		height: "5.25%"
  	},
  	lisearchIcon: {
    		top: 791,
    		left: 21,
    		overflow: "hidden"
  	},
  	vuesaxlinearhomeIcon: {
    		height: "5.03%",
    		top: "93.6%",
    		right: "43.68%",
    		left: "44.78%",
    		bottom: "1.37%",
    		maxWidth: "100%",
    		width: "11.54%"
  	},
  	simpleLineIconscheck: {
    		top: 249,
    		left: 46,
    		position: "absolute"
  	},
  	iphone16Pro44: {
    		top: 0,
    		left: 0,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		backgroundColor: "#dacbf9",
    		height: 845,
    		width: 390,
    		shadowOpacity: 1,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	materialSymbolsshareOutlineIcon: {
    		top: 441,
    		left: 311
  	},
  	vuesaxlinearheartIcon: {
    		height: "5.21%",
    		top: "93.72%",
    		right: "64.62%",
    		bottom: "1.07%",
    		left: "23.85%",
    		maxWidth: "100%",
    		width: "11.54%"
  	},
  	iphone131410: {
    		backgroundColor: "#d0afca",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default IPhone1314;