import * as React from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import Vuesaxlinearprofile from "../assets/profile/profilebold.svg"
import Vuesaxlinearheart from "../assets/heart.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Lisearch from "../assets/lisearch.svg"
import Ellipse5 from "../assets/profile/ellipseprofile1.svg"
import Ellipse7 from "../assets/profile/ellipseprofile2.svg"
import Ellipse6 from "../assets/profile/ellipseprofile3.svg"
import Ellipse9 from "../assets/profile/ellipseprofile4.svg"
import Shadow from "../assets/profile/shadow.svg"
import Group88 from "../assets/profile/Group-88.svg"
import Maskcopy55 from "../assets/profile/mask-copy-55.svg"
import Group89 from "../assets/profile/Group-89.svg"
import Group91 from "../assets/profile/Group-91.svg"
import Star12 from "../assets/profile/star-12.svg"
import Star3copy21 from "../assets/profile/star-3-copy-21.svg"
import Star3copy22 from "../assets/profile/star-3-copy-22.svg"
import Ellipse10 from "../assets/profile/ellipseprofile5.svg"
import Shadow1 from "../assets/profile/shadow1.svg"
import Group93 from "../assets/profile/Group-93.svg"
import Stars from "../assets/profile/stars.svg"
import Group98 from "../assets/profile/Group-98.svg"
import Group99 from "../assets/profile/Group-99.svg"
import Group100 from "../assets/profile/Group-100.svg"
import Stars1 from "../assets/profile/stars1.svg"
import Ellipse11 from "../assets/profile/ellipseprofile6.svg"
import Shadow2 from "../assets/profile/shadow2.svg"
import Mask from "../assets/profile/mask.svg"
import Group101 from "../assets/profile/Group-101.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import { useRouter } from "expo-router";

const IPhone1314 = () => {
	const router = useRouter();
	
  	return (
    		<View style={styles.iphone131421}>
      			<View style={styles.menurectangle} />
      			<Image style={styles.imageIcon} resizeMode="cover" source={require("../src/img/profilepic.png")} />
      			<Text style={styles.username}>
        				<Text style={styles.stukhoriTxt}>
          					<Text style={styles.blankLine}>{' '}</Text>
          					<Text style={styles.stukhori1}>@stukhori</Text>
        				</Text>
      			</Text>
      			<Text style={[styles.activityHistory7, styles.awards5Layout]}>Activity history</Text>
				<TouchableOpacity onPress={() => router.push("/awards")}>
				<Text style={[styles.viewAll1, styles.viewTypo]}>View all</Text>
				</TouchableOpacity>
      			<Text style={[styles.awards5, styles.awards5Layout]}>Awards (4)</Text>
      			<View style={styles.currencyrectangle} />
      			<Image style={styles.diamondicon} resizeMode="cover" source={require("../src/img/diamond.png")} />
      			<Image style={styles.staricon} resizeMode="cover" source={require("../src/img/star.png")} />
      			<Image style={styles.coinicon} resizeMode="cover" source={require("../src/img/imagecoin.png")} />
      			<Text style={styles.startext}>15</Text>
      			<Text style={[styles.cointext2, styles.cointext]}>84</Text>
      			<Text style={[styles.diamondtext2, styles.diamondtext]}>3</Text>
      			<View style={[styles.activityrectangle, styles.iphone131421ShadowBox]} />
      			<View style={[styles.awardsrectangle, styles.iphone131421ShadowBox]} />
      			<Text style={styles.activitytext1}>Algebra. Sequences and series</Text>
      			<Text style={[styles.activitytext3, styles.activitytext]}>Algebra. Exponents and powers</Text>
      			<Text style={[styles.activitytext2, styles.activitytext]}>Geometry. Area and perimeter</Text>
      			<Ellipse5 style={[styles.percentageellipses, styles.iphone131421ChildLayout6]} width={44} height={44} />
      			<Text style={[styles.activitypt1, styles.percentagetext]}>100%</Text>
      			<Ellipse7 style={[styles.iphone131421Child1, styles.iphone131421ChildLayout6]} width={44} height={44} />
      			<Text style={[styles.activitypt3, styles.percentagetext]}>100%</Text>
      			<Ellipse6 style={[styles.iphone131421Child2, styles.iphone131421ChildLayout6]} width={44} height={44} />
      			<Text style={[styles.activitypt2, styles.percentagetext]}>100%</Text>
      			<View style={[styles.viewrec1, styles.iphone131421ChildLayout1]} />
      			<Text style={[styles.view, styles.viewLayout]}>View</Text>
      			<View style={[styles.iphone131421Child4, styles.iphone131421ChildLayout1]} />
      			<Text style={[styles.view1, styles.viewLayout]}>View</Text>
      			<View style={[styles.iphone131421Child5, styles.iphone131421ChildLayout1]} />
      			<Text style={[styles.view2, styles.viewLayout]}>View</Text>
      			<Ellipse9 style={[styles.iphone131421Child6, styles.awardsellipse]} width={63} height={63} />
      			<Shadow style={[styles.shadowIcon, styles.shadowIconLayout]} />
      			<Group88 style={[styles.groupIcon, styles.groupIconLayout]} />
      			<Maskcopy55 style={[styles.maskCopy55, styles.shadowIconPosition]} />
      			<Group89 style={[styles.iphone131421Child7, styles.groupIconLayout]} />
      			<Group91 style={[styles.iphone131421Child7, styles.groupIconLayout]} />
      			<Image style={[styles.iphone131421Child9, styles.groupIconLayout]} resizeMode="cover" source={require("../src/img/Group 92.png")} />
      			<Star12 style={[styles.starIcon, styles.rulerposition]} />
      			<Image style={[styles.triangularRulerIcon, styles.rulerposition]} resizeMode="cover" source={require("../src/img/ruler.png")} />
      			<Ellipse10 style={[styles.iphone131421Child10, styles.awardsellipse]} width={63} height={63} />
      			<Shadow1 style={[styles.shadowIcon1, styles.shadowIcon1Layout]} />
      			<Group93 style={[styles.iphone131421Child11, styles.groupIconLayout]} />
      			<Stars style={[styles.starsIcon, styles.starsIconPosition]} />
      			<Image style={[styles.multiplyIcon, styles.cointext]} resizeMode="cover" source={require("../src/img/multiply.png")} />
      			<Group98 style={[styles.iphone131421Child12, styles.award1face]} />
      			<Group99 style={[styles.iphone131421Child13, styles.award1face]} />
      			<Group100 style={[styles.iphone131421Child14, styles.starsIconPosition]} />
      			<Stars1 style={[styles.starsIcon, styles.starsIconPosition]} />
      			<Image style={[styles.multiplyIcon, styles.cointext]} resizeMode="cover" source={require("../src/img/multiply.png")} />
      			<Ellipse11 style={[styles.iphone131421Child15, styles.awardsellipse]} width={63} height={63} />
      			<Shadow2 style={[styles.shadowIcon2, styles.award3ellipse]} />
      			<Mask style={[styles.maskIcon, styles.award3ellipse]} />
      			<Group101 style={[styles.iphone131421Child16, styles.shadowIcon1Layout]} />
      			<Image style={[styles.groupIcon1, styles.groupIconLayout]} resizeMode="cover" source={require("../src/img/Group.png")} />
      			<Image style={[styles.fireIcon, styles.iphone131421ChildLayout1]} resizeMode="cover" source={require("../src/img/fire.png")} />
      			<View style={[styles.iphone131421Child17, styles.iphone131421ShadowBox]} />
      			<Image style={styles.iphone131421Child18} resizeMode="cover" source={require("../src/img/Group 1.png")} />
      			<Text style={[styles.currentCourse, styles.currentCourseLayout]}>Current course</Text>
      			<Text style={[styles.mathIntermediate, styles.currentCourseLayout]}>Math Intermediate</Text>
      			<Text style={styles.text6}>59%</Text>
				  <TouchableOpacity 
        style={[styles.vuesaxlinearprofileIcon, styles.groupIconLayout]} 
        onPress={() => { /* Stay on same page */ }}
      >
        <Vuesaxlinearprofile />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.vuesaxlinearsetting2Icon, styles.groupIconLayout]} 
        onPress={() => router.push("/settingspage")}
      >
        <Vuesaxlinearsetting2 />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.lisearchIcon, styles.iconPosition]} 
        onPress={() => router.push("/home")}
      >
        <Lisearch width={48} height={41} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]} 
        onPress={() => router.push("/home")}
      >
        <Vuesaxlinearhome />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.vuesaxlinearheartIcon, styles.iconLayout]} 
        onPress={() => router.push("/learnwithfriends")}
      >
        <Vuesaxlinearheart />
      </TouchableOpacity>
    		</View>);
};

const styles = StyleSheet.create({
  	groupIconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconLayout: {
    		height: "5.21%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	awards5Layout: {
    		height: 43,
    		width: 200,
    		textAlign: "left",
    		fontSize: 24,
    		marginLeft: -166,
    		color: "#030303",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 28,
    		left: "50%",
    		position: "absolute"
  	},
  	viewTypo: {
    		color: "#6d6d6d",
    		height: 43,
    		textAlign: "left",
    		fontSize: 20,
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 28,
    		left: "50%",
    		position: "absolute"
  	},
  	cointext: {
    		left: 77,
    		position: "absolute"
  	},
  	diamondtext: {
    		top: 246,
    		height: 37,
    		width: 351,
    		justifyContent: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontSize: 20,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular"
  	},
  	iphone131421ShadowBox: {
    		width: 350,
    		transform: [
      			{
        				rotate: "-0.1deg"
      			}
    		],
    		borderColor: "#debbff",
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
    		position: "absolute",
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	activitytext: {
    		height: 21,
    		fontSize: 15,
    		color: "#000",
    		lineHeight: 18,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iphone131421ChildLayout6: {
    		height: 44,
    		width: 44,
    		borderRadius: 40,
    		position: "absolute"
  	},
  	percentagetext: {
    		height: 66,
    		width: 40,
    		fontSize: 11,
    		justifyContent: "center",
    		color: "#000",
    		lineHeight: 38,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iphone131421ChildLayout1: {
    		height: 24,
    		position: "absolute"
  	},
  	viewLayout: {
    		width: 47,
    		left: 303,
    		fontSize: 15,
    		justifyContent: "center",
    		color: "#000",
    		lineHeight: 28,
    		height: 26,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	awardsellipse: {
    		height: 63,
    		width: 63,
    		top: 678,
    		position: "absolute"
  	},
  	shadowIconLayout: {
    		borderRadius: 21,
    		opacity: 0.1
  	},
  	shadowIconPosition: {
    		bottom: "13.39%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	rulerposition: {
    		right: "46.67%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	shadowIcon1Layout: {
    		width: "10.77%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	starsIconPosition: {
    		left: "17.32%",
    		right: "73.6%",
    		width: "8.08%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	award1face: {
    		left: "16.56%",
    		right: "71.85%",
    		width: "11.59%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	award3ellipse: {
    		left: "67.51%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	currentCourseLayout: {
    		height: 50,
    		width: 263,
    		left: 41,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 28,
    		position: "absolute"
  	},
  	menurectangle: {
    		top: 774,
    		left: -6,
    		backgroundColor: "#ededed",
    		width: 402,
    		height: 70,
    		position: "absolute"
  	},
  	vuesaxlinearprofileIcon: {
    		width: "12.05%",
    		right: "24.36%",
    		left: "63.59%",
    		bottom: "1.42%",
    		top: "93.13%",
    		height: "5.45%",
    		maxWidth: "100%"
  	},
  	vuesaxlinearheartIcon: {
    		width: "11.54%",
    		top: "93.36%",
    		right: "64.36%",
    		left: "24.1%",
    		bottom: "1.42%"
  	},
  	vuesaxlinearsetting2Icon: {
    		width: "12.56%",
    		top: "93.01%",
    		right: "4.36%",
    		bottom: "1.54%",
    		left: "83.08%",
    		height: "5.45%",
    		maxWidth: "100%"
  	},
  	lisearchIcon: {
    		top: 789,
    		left: 18,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	imageIcon: {
    		top: 108,
    		left: 116,
    		width: 158,
    		height: 158,
    		position: "absolute"
  	},
  	blankLine: {
    		color: "#030303",
    		fontSize: 25
  	},
  	stukhori1: {
    		color: "#525252",
    		fontSize: 20
  	},
  	stukhoriTxt: {
    		width: "100%"
  	},
  	username: {
    		marginLeft: -100,
    		top: 75,
    		width: 201,
    		height: 23,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 28,
    		left: "50%",
    		position: "absolute"
  	},
  	activityHistory7: {
    		top: 403
  	},
  	viewAll: {
    		marginLeft: 105,
    		top: 410,
    		width: 71
  	},
  	viewAll1: {
    		marginLeft: 108,
    		top: 628,
    		width: 67
  	},
  	awards5: {
    		top: 624
  	},
  	currencyrectangle: {
    		marginLeft: -114,
    		top: 245,
    		width: 222,
    		height: 39,
    		transform: [
      			{
        				rotate: "-0.1deg"
      			}
    		],
    		borderColor: "#debbff",
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
    		position: "absolute",
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	diamondicon: {
    		top: 252,
    		left: 192,
    		width: 26,
    		height: 26,
    		position: "absolute"
  	},
  	staricon: {
    		top: 251,
    		left: 124,
    		width: 27,
    		height: 27,
    		position: "absolute"
  	},
  	coinicon: {
    		top: 250,
    		left: 267,
    		width: 29,
    		height: 29,
    		position: "absolute"
  	},
  	startext: {
    		top: 247,
    		left: -67,
    		height: 37,
    		width: 351,
    		justifyContent: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontSize: 20,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	cointext2: {
    		top: 246,
    		height: 37,
    		width: 351,
    		justifyContent: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontSize: 20,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular"
  	},
  	diamondtext2: {
    		left: 6,
    		position: "absolute"
  	},
  	activityrectangle: {
    		top: 447,
    		height: 170,
    		marginLeft: -175,
    		width: 350,
			color: "#000"
  	},
  	awardsrectangle: {
    		marginLeft: -174.87,
    		top: 665,
    		height: 92
  	},
  	activitytext1: {
    		top: 469,
    		width: 218,
    		height: 19,
    		fontSize: 15,
    		left: 91,
    		color: "#000",
    		lineHeight: 18,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	activitytext3: {
    		top: 577,
    		width: 197,
    		left: 91,
    		height: 21
  	},
  	activitytext2: {
    		top: 523,
    		left: 90,
    		width: 203
  	},
  	percentageellipses: {
    		top: 456,
    		left: 34,
    		borderRadius: 40
  	},
  	activitypt1: {
    		top: 458,
    		left: 36,
    		height: 66,
    		width: 40,
    		fontSize: 11
  	},
  	iphone131421Child1: {
    		top: 565,
    		left: 35
  	},
  	activitypt3: {
    		top: 567,
    		left: 37
  	},
  	iphone131421Child2: {
    		top: 511,
    		left: 34,
    		borderRadius: 40
  	},
  	activitypt2: {
    		top: 513,
    		left: 36,
    		height: 66,
    		width: 40,
    		fontSize: 11
  	},
  	viewrec1: {
    		top: 466,
    		width: 56,
    		backgroundColor: "#ffd96f",
    		borderRadius: 15,
    		left: 298,
    		height: 24
  	},
  	view: {
    		top: 464
  	},
  	iphone131421Child4: {
    		top: 521,
    		width: 56,
    		backgroundColor: "#ffd96f",
    		borderRadius: 15,
    		left: 298,
    		height: 24
  	},
  	view1: {
    		top: 519
  	},
  	iphone131421Child5: {
    		top: 576,
    		width: 56,
    		backgroundColor: "#ffd96f",
    		borderRadius: 15,
    		left: 298,
    		height: 24
  	},
  	view2: {
    		top: 574
  	},
  	iphone131421Child6: {
    		left: 161
  	},
  	shadowIcon: {
    		height: "6.28%",
    		width: "11.28%",
    		top: "80.33%",
    		right: "44.87%",
    		left: "43.85%",
    		opacity: 0.1,
    		bottom: "13.39%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	groupIcon: {
    		height: "4.67%",
    		width: "12.44%",
    		top: "83.01%",
    		right: "44.23%",
    		bottom: "12.32%",
    		left: "43.33%"
  	},
  	maskCopy55: {
    		height: "6.04%",
    		width: "10.51%",
    		top: "80.57%",
    		right: "45.13%",
    		left: "44.36%",
    		borderRadius: 14,
    		opacity: 0.2
  	},
  	iphone131421Child7: {
    		height: "5.73%",
    		width: "11.97%",
    		top: "80.52%",
    		right: "44.45%",
    		bottom: "13.74%",
    		left: "43.57%"
  	},
  	iphone131421Child9: {
    		height: "3.98%",
    		width: "8.33%",
    		top: "81.7%",
    		right: "46.27%",
    		bottom: "14.63%",
    		left: "45.39%"
  	},
  	starIcon: {
    		height: "0.71%",
    		width: "1.28%",
    		top: "81.99%",
    		bottom: "17.3%",
    		left: "52.05%"
  	},
  	star3Copy21: {
    		height: "0.36%",
    		width: "1.03%",
    		top: "84.24%",
    		right: "52.05%",
    		left: "46.92%"
  	},
  	star3Copy22: {
    		height: "0.24%",
    		width: "0.77%",
    		top: "84.36%",
    		right: "47.18%",
    		left: "52.05%"
  	},
  	triangularRulerIcon: {
    		height: "1.9%",
    		width: "5.9%",
    		top: "82.35%",
    		bottom: "15.76%",
    		left: "47.44%"
  	},
  	iphone131421Child10: {
    		left: 55
  	},
  	shadowIcon1: {
    		height: "5.69%",
    		right: "72.29%",
    		bottom: "13.63%",
    		left: "16.94%",
    		top: "70.69%",
    		opacity: 0.1,
    		borderRadius: 21
  	},
  	iphone131421Child11: {
    		height: "4.29%",
    		width: "11.9%",
    		top: "83.27%",
    		right: "71.69%",
    		bottom: "12.44%",
    		left: "16.41%"
  	},
  	starsIcon: {
    		height: "2.56%",
    		top: "82.46%",
    		bottom: "14.98%"
  	},
  	multiplyIcon: {
    		top: 693,
    		width: 21,
    		height: 25
  	},
  	iphone131421Child12: {
    		height: "2.68%",
    		top: "81.3%",
    		bottom: "16.02%"
  	},
  	iphone131421Child13: {
    		height: "5.34%",
    		top: "80.95%",
    		bottom: "13.71%"
  	},
  	iphone131421Child14: {
    		height: "3.72%",
    		top: "81.6%",
    		bottom: "14.52%"
  	},
  	iphone131421Child15: {
    		left: 273
  	},
  	shadowIcon2: {
    		height: "6.99%",
    		width: "15.64%",
    		top: "70.66%",
    		right: "13.85%",
    		bottom: "12.35%",
    		opacity: 0.1
  	},
  	maskIcon: {
    		height: "6.75%",
    		width: "15.13%",
    		right: "19.36%",
    		bottom: "12.56%",
    		top: "79.69%"
  	},
  	iphone131421Child16: {
    		height: "4.62%",
    		top: "81.2%",
    		right: "16.15%",
    		bottom: "13.53%",
    		left: "71.58%"
  	},
  	groupIcon1: {
    		height: "5.64%",
    		width: "5.74%",
    		top: "81.58%",
    		right: "18.87%",
    		bottom: "14.77%",
    		left: "76.38%"
  	},
  	fireIcon: {
    		top: 694,
    		left: 295,
    		width: 25
  	},
  	vuesaxlinearhomeIcon: {
    		width: "11.79%",
    		right: "44.1%",
    		bottom: "1.66%",
    		left: "44.1%",
    		top: "93.13%"
  	},
  	iphone131421Child17: {
    		top: 300,
    		height: 91,
    		marginLeft: -175,
    		width: 350
  	},
  	iphone131421Child18: {
    		top: 311,
    		left: 285,
    		width: 69,
    		height: 68,
    		position: "absolute"
  	},
  	currentCourse: {
    		top: 304,
    		fontSize: 17,
    		color: "#797979"
  	},
  	mathIntermediate: {
    		top: 332,
    		color: "#272727",
    		fontSize: 25,
    		height: 50,
    		width: 263,
    		left: 41
  	},
  	text6: {
    		top: 323,
    		width: 38,
    		height: 45,
    		left: 303,
    		justifyContent: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontSize: 20,
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iphone131421: {
    		backgroundColor: "#fdfcff",
    		borderColor: "#000",
    		flex: 1,
    		height: 844,
    		overflow: "hidden",
    		width: "100%",
    		borderWidth: 1,
    		borderStyle: "solid"
  	}
});

export default IPhone1314;