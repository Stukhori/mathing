import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import Vuesaxlinearprofile from "../assets/vuesaxlinearprofile.svg"
import Vuesaxlinearheart from "../assets/vuesaxlinearheart.svg"
import Vuesaxlinearsetting2 from "../assets/vuesaxlinearsetting2.svg"
import Group80 from "../assets/group-80.svg"
import Lisearch from "../assets/lisearch.svg"
import Group57 from "../assets/group-57.svg"
import Group65 from "../assets/group-65.svg"
import Group67 from "../assets/group-67.svg"
import Group68 from "../assets/group-68.svg"
import Group69 from "../assets/group-69.svg"
import Color from "../assets/color.svg"
import Group78 from "../assets/group-78.svg"

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone131420}>
      			<View style={styles.iphone131420Child} />
      			<View style={styles.iphone131420Child} />
      			<Vuesaxlinearprofile style={[styles.vuesaxlinearprofileIcon, styles.iconChildLayout]} />
      			<Vuesaxlinearheart style={[styles.vuesaxlinearheartIcon, styles.iconChildLayout]} />
      			<Vuesaxlinearsetting2 style={[styles.vuesaxlinearsetting2Icon, styles.iconLayout]} />
      			<Group80 style={styles.iphone131420Inner} width={47} height={48} />
      			<Lisearch style={styles.lisearchIcon} width={48} height={41} />
      			<View style={styles.rectangleView} />
      			<Text style={[styles.availableAwards, styles.textFlexBox]}>Available awards</Text>
      			<Text style={[styles.text, styles.textFlexBox]}>←</Text>
      			<View style={styles.iphone131420Child1} />
      			<Text style={[styles.dailyChallenges, styles.dailyChallengesLayout]}>Daily Challenges</Text>
      			<Text style={[styles.skillMilestones, styles.dailyChallengesLayout]}>Skill Milestones</Text>
      			<Text style={[styles.specialAchievements, styles.dailyChallengesLayout]}>Special Achievements</Text>
      			<Image style={[styles.groupIcon, styles.iconChildLayout]} resizeMode="cover" source="Group 90.png" />
      			<Text style={[styles.consistencyIsA, styles.perfectionistLayout]}>Consistency is a key!</Text>
      			<Text style={[styles.completeAtLeast, styles.score100OnLayout]}>Complete at least one task for 7 days in a row.</Text>
      			<Text style={[styles.currentProgress80, styles.currentLayout]}>Current Progress: 80%</Text>
      			<View style={[styles.iphone131420Child2, styles.iphone131420ChildShadowBox]} />
      			<Text style={[styles.equationExpert, styles.currentPosition]}>Equation Expert</Text>
      			<Text style={[styles.successfullySolve25, styles.currentPosition]}>Successfully solve 25 algebraic equations.</Text>
      			<Text style={[styles.currentProgress72, styles.currentPosition]}>Current Progress: 72%</Text>
      			<View style={[styles.iphone131420Child3, styles.iphone131420ChildShadowBox]} />
      			<Text style={[styles.multiplicationMastery, styles.currentPosition]}>Multiplication Mastery</Text>
      			<Text style={[styles.solve100Multiplication, styles.currentPosition]}>Solve 100 multiplication problems within a month.</Text>
      			<Text style={[styles.currentProgress23, styles.currentPosition]}>Current Progress: 23%</Text>
      			<Group57 style={[styles.iphone131420Child4, styles.iconChildLayout]} />
      			<Group65 style={[styles.iphone131420Child5, styles.iconChildLayout]} />
      			<Image style={[styles.iphone131420Child6, styles.iconChildLayout]} resizeMode="cover" source="Group 66.png" />
      			<Image style={[styles.triangularRulerIcon, styles.iconChildLayout]} resizeMode="cover" source="Triangular Ruler.png" />
      			<Group67 style={[styles.iphone131420Child7, styles.iconChildLayout]} />
      			<Group68 style={[styles.iphone131420Child8, styles.iphone131420ChildLayout]} />
      			<Group69 style={[styles.iphone131420Child9, styles.iphone131420ChildLayout]} />
      			<Image style={styles.multiplyIcon} resizeMode="cover" source="Multiply.png" />
      			<View style={[styles.iphone131420Child10, styles.iphone131420ChildShadowBox]} />
      			<Text style={[styles.perfectionist, styles.currentPosition]}>Perfectionist</Text>
      			<Text style={[styles.score100On, styles.currentPosition]}>Score 100% on five quizzes in a row.</Text>
      			<Text style={[styles.currentProgress40, styles.currentPosition]}>Current Progress: 40%</Text>
      			<Color style={[styles.colorIcon, styles.iconLayout]} />
      			<Image style={[styles.iphone131420Child11, styles.iconChildLayout]} resizeMode="cover" source="Group 77.png" />
      			<Group78 style={[styles.iphone131420Child12, styles.iconChildLayout]} />
      			<Image style={styles.gemStoneIcon} resizeMode="cover" source="Gem Stone.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	iconChildLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconLayout: {
    		width: "12.56%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	textFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#fff",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	dailyChallengesLayout: {
    		height: 50,
    		width: 263,
    		textAlign: "left",
    		color: "#272727",
    		lineHeight: 28,
    		fontSize: 25,
    		left: 22,
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	perfectionistLayout: {
    		height: 44,
    		width: 239,
    		color: "#000",
    		fontSize: 20,
    		lineHeight: 38
  	},
  	score100OnLayout: {
    		height: 40,
    		width: 272,
    		lineHeight: 16,
    		fontSize: 12,
    		color: "#000"
  	},
  	currentLayout: {
    		width: 205,
    		fontSize: 15,
    		height: 40,
    		lineHeight: 16
  	},
  	iphone131420ChildShadowBox: {
    		marginLeft: -175,
    		transform: [
      			{
        				rotate: "-0.1deg"
      			}
    		],
    		height: 95,
    		width: 351,
    		borderWidth: 1,
    		borderColor: "#debbff",
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		borderRadius: 26,
    		shadowOpacity: 1,
    		elevation: 23,
    		shadowRadius: 23,
    		shadowOffset: {
      			width: 0,
      			height: 10
    		},
    		shadowColor: "rgba(0, 0, 0, 0.1)",
    		left: "50%",
    		position: "absolute"
  	},
  	currentPosition: {
    		left: 96,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iphone131420ChildLayout: {
    		width: "10.9%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iphone131420Child: {
    		top: 774,
    		left: -6,
    		backgroundColor: "#ededed",
    		width: 402,
    		height: 70,
    		position: "absolute"
  	},
  	vuesaxlinearprofileIcon: {
    		width: "12.05%",
    		top: "93.13%",
    		right: "24.36%",
    		left: "63.59%",
    		bottom: "1.42%",
    		maxWidth: "100%",
    		height: "5.45%"
  	},
  	vuesaxlinearheartIcon: {
    		height: "5.21%",
    		width: "11.54%",
    		top: "93.36%",
    		right: "64.36%",
    		left: "24.1%",
    		bottom: "1.42%",
    		maxWidth: "100%"
  	},
  	vuesaxlinearsetting2Icon: {
    		top: "93.01%",
    		right: "4.36%",
    		bottom: "1.54%",
    		left: "83.08%",
    		height: "5.45%"
  	},
  	iphone131420Inner: {
    		top: 784,
    		left: 167,
    		position: "absolute"
  	},
  	lisearchIcon: {
    		top: 789,
    		left: 18,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	rectangleView: {
    		top: 0,
    		left: 0,
    		backgroundColor: "#339624",
    		width: 390,
    		height: 106,
    		position: "absolute"
  	},
  	availableAwards: {
    		marginLeft: -135,
    		top: 57,
    		fontSize: 23,
    		width: 271,
    		height: 60,
    		fontFamily: "DoHyeon-Regular",
    		left: "50%",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#fff",
    		lineHeight: 38
  	},
  	text: {
    		top: 64,
    		left: 7,
    		fontSize: 50,
    		fontFamily: "Inconsolata-Regular",
    		width: 53,
    		height: 38,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#fff",
    		lineHeight: 38
  	},
  	iphone131420Child1: {
    		marginLeft: -176,
    		top: 183,
    		transform: [
      			{
        				rotate: "-0.1deg"
      			}
    		],
    		height: 95,
    		width: 351,
    		borderWidth: 1,
    		borderColor: "#debbff",
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		borderRadius: 26,
    		shadowOpacity: 1,
    		elevation: 23,
    		shadowRadius: 23,
    		shadowOffset: {
      			width: 0,
      			height: 10
    		},
    		shadowColor: "rgba(0, 0, 0, 0.1)",
    		left: "50%",
    		position: "absolute"
  	},
  	dailyChallenges: {
    		top: 117
  	},
  	skillMilestones: {
    		top: 300
  	},
  	specialAchievements: {
    		top: 574
  	},
  	groupIcon: {
    		height: "6.99%",
    		width: "14.21%",
    		top: "23.7%",
    		right: "77.85%",
    		bottom: "69.31%",
    		left: "7.95%"
  	},
  	consistencyIsA: {
    		top: 186,
    		left: 95,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	completeAtLeast: {
    		top: 209,
    		left: 95,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	currentProgress80: {
    		top: 229,
    		color: "#139000",
    		width: 205,
    		fontSize: 15,
    		left: 95,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iphone131420Child2: {
    		top: 351
  	},
  	equationExpert: {
    		top: 354,
    		height: 44,
    		width: 239,
    		color: "#000",
    		fontSize: 20,
    		lineHeight: 38
  	},
  	successfullySolve25: {
    		top: 377,
    		height: 40,
    		width: 272,
    		lineHeight: 16,
    		fontSize: 12,
    		color: "#000"
  	},
  	currentProgress72: {
    		top: 397,
    		width: 205,
    		fontSize: 15,
    		height: 40,
    		lineHeight: 16,
    		color: "#139000"
  	},
  	iphone131420Child3: {
    		top: 457
  	},
  	multiplicationMastery: {
    		top: 460,
    		height: 44,
    		width: 239,
    		color: "#000",
    		fontSize: 20,
    		lineHeight: 38
  	},
  	solve100Multiplication: {
    		top: 483,
    		height: 40,
    		width: 272,
    		lineHeight: 16,
    		fontSize: 12,
    		color: "#000"
  	},
  	currentProgress23: {
    		top: 503,
    		color: "#b85b25",
    		width: 205,
    		fontSize: 15,
    		height: 40,
    		lineHeight: 16,
    		left: 96
  	},
  	iphone131420Child4: {
    		height: "4.73%",
    		width: "12.62%",
    		top: "45.99%",
    		right: "78.3%",
    		bottom: "49.29%",
    		left: "9.08%"
  	},
  	iphone131420Child5: {
    		height: "5.81%",
    		width: "12.13%",
    		top: "43.46%",
    		right: "78.55%",
    		bottom: "50.73%",
    		left: "9.33%"
  	},
  	iphone131420Child6: {
    		height: "4.04%",
    		width: "8.44%",
    		top: "44.34%",
    		right: "80.39%",
    		bottom: "51.61%",
    		left: "11.17%"
  	},
  	triangularRulerIcon: {
    		height: "1.9%",
    		width: "5.9%",
    		top: "45.26%",
    		right: "81.03%",
    		bottom: "52.84%",
    		left: "13.08%"
  	},
  	iphone131420Child7: {
    		height: "4.03%",
    		width: "11.18%",
    		top: "58.94%",
    		right: "78.72%",
    		bottom: "37.03%",
    		left: "10.1%"
  	},
  	iphone131420Child8: {
    		height: "2.51%",
    		top: "57.09%",
    		right: "78.86%",
    		bottom: "40.4%",
    		left: "10.24%"
  	},
  	iphone131420Child9: {
    		height: "5.02%",
    		top: "56.11%",
    		right: "78.98%",
    		bottom: "38.87%",
    		left: "10.12%"
  	},
  	multiplyIcon: {
    		top: 484,
    		left: 52,
    		width: 19,
    		height: 24,
    		position: "absolute"
  	},
  	iphone131420Child10: {
    		top: 625
  	},
  	perfectionist: {
    		top: 628,
    		height: 44,
    		width: 239,
    		color: "#000",
    		fontSize: 20,
    		lineHeight: 38
  	},
  	score100On: {
    		top: 651,
    		height: 40,
    		width: 272,
    		lineHeight: 16,
    		fontSize: 12,
    		color: "#000"
  	},
  	currentProgress40: {
    		top: 671,
    		color: "#d79703",
    		width: 205,
    		fontSize: 15,
    		height: 40,
    		lineHeight: 16,
    		left: 96
  	},
  	colorIcon: {
    		height: "5.57%",
    		top: "76.07%",
    		right: "78.21%",
    		bottom: "18.36%",
    		left: "9.23%"
  	},
  	iphone131420Child11: {
    		height: "4.28%",
    		width: "9.26%",
    		top: "76.76%",
    		right: "79.82%",
    		bottom: "18.96%",
    		left: "10.92%"
  	},
  	iphone131420Child12: {
    		height: "3.45%",
    		width: "5.64%",
    		top: "78.62%",
    		right: "81.62%",
    		bottom: "17.93%",
    		left: "12.74%"
  	},
  	gemStoneIcon: {
    		top: 655,
    		left: 51,
    		width: 21,
    		height: 23,
    		position: "absolute"
  	},
  	iphone131420: {
    		backgroundColor: "#fdfcff",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default IPhone1314;