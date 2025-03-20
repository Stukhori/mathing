import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import Radixiconscrosscircled from "../assets/radixiconscrosscircled.svg"
import Lucidetimer from "../assets/lucidetimer.svg"
import Group85 from "../assets/group-85.svg"
import Simplelineiconscheck from "../assets/simplelineiconscheck.svg"
import Materialsymbolsshareoutline from "../assets/materialsymbolsshareoutline.svg"
import Vuesaxlinearheart from "../assets/vuesaxlinearheart.svg"

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone131410}>
      			<View style={styles.iphone16Pro44}>
        				<View style={styles.iphone16Pro44Child} />
        				<Image style={styles.image5Icon} resizeMode="cover" source="image 5.png" />
        				<Text style={[styles.lessonOverview, styles.textTypo1]}>Lesson overview</Text>
        				<Text style={[styles.score, styles.textTypo1]}>Score</Text>
        				<Image style={styles.iphone16Pro44Item} resizeMode="cover" source="Group 1.png" />
        				<Text style={[styles.text, styles.textLayout]}>60%</Text>
        				<Image style={styles.imageIcon} resizeMode="cover" source="image.png" />
        				<Text style={[styles.correctAnswers, styles.answersLayout]}>12 correct answers</Text>
        				<Text style={[styles.wrongAnswers, styles.answersLayout]}>8 wrong answers</Text>
        				<Text style={[styles.minutes, styles.answersTypo]}>9:51 minutes</Text>
        				<Text style={[styles.recommendations, styles.viewAllPosition]}>Recommendations</Text>
        				<View style={[styles.iphone16Pro44Inner, styles.iphone16ShadowBox]} />
        				<Text style={[styles.text1, styles.viewFlexBox]}>10</Text>
        				<Image style={styles.image5Icon1} resizeMode="cover" source="image 5.png" />
        				<View style={[styles.rectangleView, styles.image9IconLayout]} />
        				<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask group.png" />
        				<Text style={[styles.shareResultsWith, styles.setTheoryTypo]}>Share results with friends !</Text>
        				<View style={[styles.iphone16Pro44Child1, styles.iphone16ChildBg]} />
        				<Text style={[styles.view, styles.viewLayout]}>View</Text>
        				<View style={[styles.iphone16Pro44Child2, styles.iphone16ShadowBox]} />
        				<Text style={[styles.text2, styles.textTypo]}>20</Text>
        				<Image style={[styles.image9Icon, styles.image9IconLayout]} resizeMode="cover" source="image 9.png" />
        				<View style={[styles.iphone16Pro44Child3, styles.rectangleViewBorder]} />
        				<Image style={styles.maskGroupIcon1} resizeMode="cover" source="Mask group.png" />
        				<View style={[styles.iphone16Pro44Child4, styles.iphone16ChildBg]} />
        				<Text style={[styles.view1, styles.viewTypo]}>View</Text>
        				<Text style={[styles.setTheory, styles.setTheoryTypo]}>Set theory</Text>
        				<Text style={[styles.viewAll, styles.viewTypo]}>View all</Text>
        				<Text style={[styles.treeDiagram, styles.setTheoryTypo]}>Tree diagram</Text>
        				<Radixiconscrosscircled style={[styles.radixIconscrossCircled, styles.textLayout]} width={46} height={46} />
        				<Lucidetimer style={styles.lucidetimerIcon} width={54} height={54} />
        				<Group85 style={[styles.groupIcon, styles.answersLayout]} width={390} height={65} />
        				<Simplelineiconscheck style={styles.simpleLineIconscheck} width={43} height={43} />
      			</View>
      			<Materialsymbolsshareoutline style={[styles.materialSymbolsshareOutlineIcon, styles.viewLayout]} width={35} height={36} />
      			<Vuesaxlinearheart style={styles.vuesaxlinearheartIcon} />
    		</View>);
};

const styles = StyleSheet.create({
  	textTypo1: {
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		color: "#000",
    		lineHeight: 38
  	},
  	textLayout: {
    		width: 46,
    		position: "absolute"
  	},
  	answersLayout: {
    		height: 65,
    		position: "absolute"
  	},
  	answersTypo: {
    		fontSize: 25,
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38
  	},
  	viewAllPosition: {
    		top: 523,
    		position: "absolute"
  	},
  	iphone16ShadowBox: {
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
  	viewFlexBox: {
    		left: -35,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000"
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
  	textTypo: {
    		top: 635,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		fontSize: 24,
    		position: "absolute"
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
    		lineHeight: 38
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
  	iphone16Pro44Item: {
    		top: 143,
    		left: 150,
    		width: 77,
    		height: 75,
    		position: "absolute"
  	},
  	text: {
    		top: 142,
    		left: 169,
    		fontSize: 15,
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
    		top: 238,
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
    		top: 308,
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
    		top: 385,
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
  	iphone16Pro44Inner: {
    		left: 19
  	},
  	text1: {
    		width: 384,
    		height: 41,
    		top: 635,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		fontSize: 24,
    		position: "absolute"
  	},
  	image5Icon1: {
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
  	iphone16Pro44Child1: {
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
    		color: "#000"
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
  	groupIcon: {
    		top: 780,
    		left: 1
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
    		width: "11.54%",
    		top: "93.72%",
    		right: "64.62%",
    		bottom: "1.07%",
    		left: "23.85%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
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