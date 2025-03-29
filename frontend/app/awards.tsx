import * as React from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import Vuesaxlinearprofile from "../assets/profile.svg"
import Vuesaxlinearheart from "../assets/heart.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Vuesaxlinearhome from "../assets/homebold.svg"
import Lisearch from "../assets/lisearch.svg"
import Group57 from "../assets/awards/group-57.svg"
import Group65 from "../assets/awards/group-65.svg"
import Group67 from "../assets/awards/group-67.svg"
import Group68 from "../assets/awards/group-68.svg"
import Group69 from "../assets/awards/group-69.svg"
import Color from "../assets/awards/color.svg"
import Group78 from "../assets/awards/group-78.svg"
import { useRouter } from "expo-router";

const IPhone1314 = () => {
  	const router = useRouter();

  	return (
    		<View style={styles.iphone131433}>
      			<View style={styles.iphone131433Child} />
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
		  style={[styles.iphone131433Item, styles.iconLayout]} 
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
      			<View style={styles.iphone131433Inner} />
      			<Text style={[styles.availableAwards, styles.textFlexBox]}>Available awards</Text>
      			<TouchableOpacity 
				style={[styles.text, styles.textFlexBox]}
  				onPress={() => router.push("/profile")}>		
  				<Text style={{ fontSize: 50 }}>←</Text>
				</TouchableOpacity>
      			<View style={styles.rectangleView} />
      			<Text style={[styles.dailyChallenges, styles.dailyChallengesLayout]}>Daily Challenges</Text>
      			<Text style={[styles.skillMilestones, styles.dailyChallengesLayout]}>Skill Milestones</Text>
      			<Text style={[styles.specialAchievements, styles.dailyChallengesLayout]}>Special Achievements</Text>
      			<Image style={[styles.groupIcon, styles.iconChildLayout]} resizeMode="cover" source={require("../assets/awards/Group 66.png")} />
      			<Text style={[styles.consistencyIsA, styles.perfectionistLayout]}>Consistency is a key!</Text>
      			<Text style={[styles.completeAtLeast, styles.score100OnLayout]}>Complete at least one task for 7 days in a row.</Text>
      			<Text style={[styles.currentProgress80, styles.currentLayout]}>Current Progress: 80%</Text>
      			<View style={[styles.iphone131433Child1, styles.iphone131433ChildShadowBox]} />
      			<Text style={[styles.equationExpert, styles.currentPosition]}>Equation Expert</Text>
      			<Text style={[styles.successfullySolve25, styles.currentPosition]}>Successfully solve 25 algebraic equations.</Text>
      			<Text style={[styles.currentProgress72, styles.currentPosition]}>Current Progress: 72%</Text>
      			<View style={[styles.iphone131433Child2, styles.iphone131433ChildShadowBox]} />
      			<Text style={[styles.multiplicationMastery, styles.currentPosition]}>Multiplication Mastery</Text>
      			<Text style={[styles.solve100Multiplication, styles.currentPosition]}>Solve 100 multiplication problems within a month.</Text>
      			<Text style={[styles.currentProgress23, styles.currentPosition]}>Current Progress: 23%</Text>
      			<Group57 style={[styles.iphone131433Child3, styles.iconChildLayout]} />
      			<Group65 style={[styles.iphone131433Child4, styles.iconChildLayout]} />
      			<Image style={[styles.iphone131433Child5, styles.iconChildLayout]} resizeMode="cover" source={require("../assets/awards/Group 66.png")} />
      			<Image style={[styles.triangularRulerIcon, styles.iconChildLayout]} resizeMode="cover" source={require("../src/img/ruler.png")} />
      			<Group67 style={[styles.iphone131433Child6, styles.iconChildLayout]} />
      			<Group68 style={[styles.iphone131433Child7, styles.iphone131433ChildLayout]} />
      			<Group69 style={[styles.iphone131433Child8, styles.iphone131433ChildLayout]} />
      			<Image style={styles.multiplyIcon} resizeMode="cover" source={require("../src/img/multiply.png")} />
      			<View style={[styles.iphone131433Child9, styles.iphone131433ChildShadowBox]} />
      			<Text style={[styles.perfectionist, styles.currentPosition]}>Perfectionist</Text>
      			<Text style={[styles.score100On, styles.currentPosition]}>Score 100% on five quizzes in a row.</Text>
      			<Text style={[styles.currentProgress40, styles.currentPosition]}>Current Progress: 40%</Text>
      			<Color style={[styles.colorIcon, styles.iconLayout]} />
      			<Image style={[styles.iphone131433Child10, styles.iconChildLayout]} resizeMode="cover" source={require("../assets/awards/Group 77.png")} />
      			<Group78 style={[styles.iphone131433Child11, styles.iconChildLayout]} />
      			<Image style={styles.gemStoneIcon} resizeMode="cover" source={require("../src/img/diamond.png")} />
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
  	iphone131433ChildShadowBox: {
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
  	iphone131433ChildLayout: {
    		width: "10.9%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iphone131433Child: {
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
  	iphone131433Item: {
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
  	iphone131433Inner: {
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
		top: 44,
		left: 7,
		// Remove fontSize: 50,
		fontFamily: "Inconsolata-Regular",
		width: 53,
		height: 58,
		alignItems: "center",
		display: "flex",
		textAlign: "center",
		color: "#fff",
		lineHeight: 8
	  },
  	rectangleView: {
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
    		top: 219,
    		left: 95,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	currentProgress80: {
    		top: 239,
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
  	iphone131433Child1: {
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
    		top: 387,
    		height: 40,
    		width: 272,
    		lineHeight: 16,
    		fontSize: 12,
    		color: "#000"
  	},
  	currentProgress72: {
    		top: 407,
    		width: 205,
    		fontSize: 15,
    		height: 40,
    		lineHeight: 16,
    		color: "#139000"
  	},
  	iphone131433Child2: {
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
    		top: 493,
    		height: 40,
    		width: 272,
    		lineHeight: 16,
    		fontSize: 12,
    		color: "#000"
  	},
  	currentProgress23: {
    		top: 513,
    		color: "#b85b25",
    		width: 205,
    		fontSize: 15,
    		height: 40,
    		lineHeight: 16,
    		left: 96
  	},
  	iphone131433Child3: {
    		height: "4.73%",
    		width: "12.62%",
    		top: "45.99%",
    		right: "78.3%",
    		bottom: "49.29%",
    		left: "9.08%"
  	},
  	iphone131433Child4: {
    		height: "5.81%",
    		width: "12.13%",
    		top: "43.46%",
    		right: "78.55%",
    		bottom: "50.73%",
    		left: "9.33%"
  	},
  	iphone131433Child5: {
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
  	iphone131433Child6: {
    		height: "4.03%",
    		width: "11.18%",
    		top: "58.94%",
    		right: "78.72%",
    		bottom: "37.03%",
    		left: "10.1%"
  	},
  	iphone131433Child7: {
    		height: "2.51%",
    		top: "57.09%",
    		right: "78.86%",
    		bottom: "40.4%",
    		left: "10.24%"
  	},
  	iphone131433Child8: {
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
  	iphone131433Child9: {
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
    		top: 661,
    		height: 40,
    		width: 272,
    		lineHeight: 16,
    		fontSize: 12,
    		color: "#000"
  	},
  	currentProgress40: {
    		top: 681,
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
  	iphone131433Child10: {
    		height: "4.28%",
    		width: "9.26%",
    		top: "76.76%",
    		right: "79.82%",
    		bottom: "18.96%",
    		left: "10.92%"
  	},
  	iphone131433Child11: {
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
  	iphone131433: {
    		backgroundColor: "#fdfcff",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default IPhone1314;