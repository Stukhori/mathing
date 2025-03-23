import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import Search from "../assets/search.svg"
import Ellipse4 from "../assets/ellipse-4.svg"
import Image3 from "../assets/image3.svg"
import Ellipse5 from "../assets/ellipse-5.svg"
import Ellipse6 from "../assets/ellipse-6.svg"
import Ellipse7 from "../assets/ellipse-7.svg"
import Vuesaxlinearprofile from "../assets/vuesaxlinearprofile.svg"
import Vuesaxlinearsetting2 from "../assets/vuesaxlinearsetting2.svg"
import Lisearch from "../assets/lisearch.svg"
import Vuesaxlinearhome from "../assets/vuesaxlinearhome.svg"
import Vuesaxlinearheart from "../assets/vuesaxlinearheart.svg"

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone13149}>
      			<View style={[styles.iphone16Pro38, styles.iphone16Position]}>
        				<View style={styles.iphone16Pro38Child} />
        				<Text style={[styles.searchFriends, styles.friendsLayout]}>Search friends...</Text>
        				<Search style={styles.searchIcon} width={22} height={21} />
        				<Text style={[styles.learnWithFriends, styles.learnFlexBox]}>Learn with friends</Text>
        				<View style={styles.iphone16Pro38Item} />
        				<Text style={[styles.viewAll, styles.viewTypo]}>View all</Text>
        				<Text style={[styles.friends, styles.groupsLayout]}>Friends</Text>
        				<Image style={[styles.imageIcon, styles.imageIconLayout]} resizeMode="cover" source="../assets/fox.png" />
        				<Image style={[styles.imageIcon1, styles.imageIconLayout]} resizeMode="cover" source="../assets/men.png" />
        				<Text style={styles.ayaulym}>Ayaulym</Text>
        				<Text style={[styles.agzam, styles.agzamTypo]}>Agzam</Text>
        				<Text style={styles.text}>(12)</Text>
        				<Image style={[styles.imageIcon2, styles.imageIconLayout]} resizeMode="cover" source="../assets/women.png" />
        				<Text style={[styles.daniyal, styles.agzamTypo]}>Daniyal</Text>
        				<Text style={[styles.addNewFriends, styles.agzamTypo]}>{`Add new
          					friends`}</Text>
        				<Ellipse4 style={[styles.iphone16Pro38Inner, styles.imageIconLayout]} width={64} height={64} />
        				<Image style={[styles.image3Icon, styles.iconLayout3]} resizeMode="cover" source="../assets/addfriends.png" />
        				<Text style={[styles.groups, styles.groupsLayout]}>Groups</Text>
        				<View style={[styles.rectangleView, styles.iphone16ChildBorder]} />
        				<Image3 style={styles.imageIcon3} width={67} height={67} />
        				<Ellipse5 style={[styles.ellipseIcon, styles.iphone16ChildLayout]} width={68} height={68} />
        				<Image style={[styles.image5Icon, styles.iconLayout2]} resizeMode="cover" source="../assets/house.png" />
        				<Text style={[styles.school, styles.schoolFlexBox]}>School</Text>
        				<Ellipse6 style={[styles.iphone16Pro38Child1, styles.iphone16ChildLayout]} width={68} height={68} />
        				<Ellipse7 style={[styles.iphone16Pro38Child2, styles.iphone16ChildLayout]} width={68} height={68} />
        				<Text style={[styles.coolGuys, styles.schoolFlexBox]}>Cool guys</Text>
        				<Image style={[styles.image6Icon, styles.iconLayout3]} resizeMode="cover" source="../assets/newfriends.png" />
        				<Text style={[styles.createNewGroup, styles.schoolFlexBox]}>Create new group</Text>
        				<Image style={[styles.image7Icon, styles.iconLayout2]} resizeMode="cover" source="../assets/group.png" />
        				<Text style={[styles.learnWithFriends1, styles.learnFlexBox]}>Learn with friends</Text>
        				<View style={[styles.iphone16Pro38Child3, styles.iphone16Position]} />
        				<Vuesaxlinearprofile style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} />
        				<Vuesaxlinearsetting2 style={[styles.vuesaxlinearsetting2Icon, styles.iconLayout]} />
        				<Lisearch style={[styles.lisearchIcon, styles.iconPosition]} width={45} height={41} />
        				<Vuesaxlinearhome style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]} />
        				<Vuesaxlinearheart style={[styles.vuesaxlinearheartIcon, styles.iconPosition]} width={45} height={45} />
        				<Text style={[styles.viewAll1, styles.viewTypo]}>View all</Text>
        				<Text style={styles.yourRankings}>Your Rankings</Text>
        				<View style={[styles.iphone16Pro38Child4, styles.iphone16ChildBorder]} />
        				<Text style={[styles.school1, styles.school1Typo]}>School</Text>
        				<Text style={[styles.thOf150Container, styles.containerTypo]}>
          					<Text style={styles.thOf150Container1}>
            						<Text style={styles.th}>9th</Text>
            						<Text style={styles.of150}> of 150</Text>
          					</Text>
        				</Text>
        				<Text style={[styles.text1, styles.textTypo]}>2</Text>
        				<View style={[styles.iphone16Pro38Child5, styles.iphone16ChildBorder]} />
        				<Text style={[styles.coolGuys1, styles.school1Typo]}>Cool guys</Text>
        				<Text style={[styles.thOf22Container, styles.containerTypo]}>
          					<Text style={styles.thOf150Container1}>
            						<Text style={styles.th}>4th</Text>
            						<Text style={styles.of150}> of 22</Text>
          					</Text>
        				</Text>
        				<Text style={[styles.text2, styles.textTypo]}>1</Text>
        				<Image style={styles.iconParkSolidupOne} resizeMode="cover" source="../assets/arrowdown.svg" />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	iphone16Position: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	friendsLayout: {
    		width: 260,
    		fontFamily: "DoHyeon-Regular"
  	},
  	learnFlexBox: {
    		fontSize: 32,
    		height: 45,
    		color: "#000",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	viewTypo: {
    		color: "#898787",
    		fontSize: 22,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	groupsLayout: {
    		width: 127,
    		fontSize: 25,
    		height: 45,
    		color: "#000",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	imageIconLayout: {
    		height: 64,
    		width: 64,
    		top: 226,
    		position: "absolute"
  	},
  	agzamTypo: {
    		fontSize: 16,
    		color: "#000",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iconLayout3: {
    		width: 35,
    		height: 39,
    		position: "absolute"
  	},
  	iphone16ChildBorder: {
    		width: 350,
    		left: 15,
    		borderColor: "#000",
    		borderRadius: 15,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	iphone16ChildLayout: {
    		height: 68,
    		width: 68,
    		top: 407,
    		position: "absolute"
  	},
  	iconLayout2: {
    		height: 47,
    		width: 47,
    		position: "absolute"
  	},
  	schoolFlexBox: {
    		height: 30,
    		top: 482,
    		color: "#000",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		width: "11.54%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconPosition: {
    		width: 45,
    		top: 790,
    		position: "absolute"
  	},
  	school1Typo: {
    		color: "#676767",
    		fontSize: 24,
    		left: 30,
    		textAlign: "left",
    		height: 30,
    		width: 102,
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	containerTypo: {
    		width: 119,
    		fontSize: 26,
    		left: 30,
    		textAlign: "left",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	textTypo: {
    		width: 23,
    		fontSize: 45,
    		textAlign: "left",
    		color: "#000",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone16Pro38Child: {
    		top: 95,
    		left: 45,
    		shadowColor: "rgba(0, 0, 0, 0)",
    		shadowOffset: {
      			width: 0,
      			height: 209
    		},
    		shadowRadius: 59,
    		elevation: 59,
    		borderRadius: 25,
    		borderColor: "#d6bdf4",
    		width: 300,
    		height: 41,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		shadowOpacity: 1,
    		position: "absolute"
  	},
  	searchFriends: {
    		top: 96,
    		color: "#5b5656",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		lineHeight: 38,
    		fontSize: 18,
    		width: 260,
    		fontFamily: "DoHyeon-Regular",
    		left: 26,
    		position: "absolute"
  	},
  	searchIcon: {
    		top: 105,
    		left: 61,
    		position: "absolute"
  	},
  	learnWithFriends: {
    		top: -261,
    		left: 202,
    		fontFamily: "JockeyOne-Regular",
    		width: 258,
    		height: 45,
    		color: "#000"
  	},
  	iphone16Pro38Item: {
    		top: 151,
    		left: 6,
    		width: 377,
    		height: 199,
    		borderColor: "#000",
    		borderRadius: 15,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	viewAll: {
    		left: 297,
    		top: 162,
    		color: "#898787",
    		fontSize: 22
  	},
  	friends: {
    		top: 159,
    		left: 4
  	},
  	imageIcon: {
    		left: 120
  	},
  	imageIcon1: {
    		left: 213
  	},
  	ayaulym: {
    		left: 195,
    		height: 39,
    		width: 102,
    		fontSize: 16,
    		top: 295,
    		color: "#000",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	agzam: {
    		left: 129,
    		top: 295,
    		fontSize: 16,
    		lineHeight: 38
  	},
  	text: {
    		left: 114,
    		fontSize: 25,
    		color: "#898787",
    		top: 162,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	imageIcon2: {
    		left: 26,
    		height: 64,
    		width: 64,
    		top: 226
  	},
  	daniyal: {
    		left: 33,
    		top: 295,
    		fontSize: 16,
    		lineHeight: 38
  	},
  	addNewFriends: {
    		top: 297,
    		left: 309,
    		lineHeight: 20
  	},
  	iphone16Pro38Inner: {
    		left: 306
  	},
  	image3Icon: {
    		top: 239,
    		left: 322
  	},
  	groups: {
    		top: 350,
    		left: -4
  	},
  	rectangleView: {
    		top: 390,
    		height: 139
  	},
  	imageIcon3: {
    		top: 414,
    		left: 31,
    		position: "absolute"
  	},
  	ellipseIcon: {
    		left: 37
  	},
  	image5Icon: {
    		top: 415,
    		left: 48
  	},
  	school: {
    		left: 20,
    		width: 102,
    		height: 30,
    		top: 482,
    		lineHeight: 38,
    		fontSize: 18
  	},
  	iphone16Pro38Child1: {
    		left: 156
  	},
  	iphone16Pro38Child2: {
    		left: 278
  	},
  	coolGuys: {
    		left: 140,
    		width: 102,
    		height: 30,
    		top: 482,
    		lineHeight: 38,
    		fontSize: 18
  	},
  	image6Icon: {
    		top: 423,
    		left: 296
  	},
  	createNewGroup: {
    		left: 252,
    		fontSize: 17,
    		width: 116,
    		lineHeight: 20
  	},
  	image7Icon: {
    		top: 418,
    		left: 167
  	},
  	learnWithFriends1: {
    		top: 43,
    		left: 65,
    		height: 45,
    		color: "#000",
    		width: 260,
    		fontFamily: "DoHyeon-Regular",
    		fontSize: 32
  	},
  	iphone16Pro38Child3: {
    		top: 779,
    		backgroundColor: "#ededed",
    		height: 65,
    		width: 390,
    		left: 0
  	},
  	vuesaxlinearprofileIcon: {
    		right: "23.29%",
    		left: "65.17%",
    		bottom: "1.38%",
    		top: "93.36%",
    		height: "5.26%",
    		maxWidth: "100%",
    		width: "11.54%"
  	},
  	vuesaxlinearsetting2Icon: {
    		right: "5.13%",
    		left: "83.33%",
    		bottom: "1.38%",
    		top: "93.36%",
    		height: "5.26%",
    		maxWidth: "100%",
    		width: "11.54%"
  	},
  	lisearchIcon: {
    		left: 20,
    		overflow: "hidden"
  	},
  	vuesaxlinearhomeIcon: {
    		height: "5.04%",
    		top: "93.59%",
    		right: "43.93%",
    		bottom: "1.37%",
    		left: "44.53%",
    		maxWidth: "100%",
    		width: "11.54%"
  	},
  	vuesaxlinearheartIcon: {
    		left: 92
  	},
  	viewAll1: {
    		top: 542,
    		left: 298
  	},
  	yourRankings: {
    		top: 532,
    		left: 16,
    		width: 181,
    		textAlign: "left",
    		fontSize: 25,
    		height: 45,
    		color: "#000",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone16Pro38Child4: {
    		top: 580,
    		height: 78
  	},
  	school1: {
    		top: 590
  	},
  	th: {
    		color: "#6637a1"
  	},
  	of150: {
    		color: "#000"
  	},
  	thOf150Container1: {
    		width: "100%"
  	},
  	thOf150Container: {
    		top: 619
  	},
  	text1: {
    		top: 612,
    		left: 324
  	},
  	iphone16Pro38Child5: {
    		top: 669,
    		height: 83
  	},
  	coolGuys1: {
    		top: 675
  	},
  	thOf22Container: {
    		top: 708
  	},
  	text2: {
    		top: 702,
    		left: 332
  	},
  	iconParkSolidupOne: {
    		top: 694,
    		width: 36,
    		height: 36,
    		left: 15,
    		position: "absolute"
  	},
  	iphone16Pro38: {
    		top: 0,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		backgroundColor: "#fdfcff",
    		shadowOpacity: 1,
    		width: 390,
    		left: 0,
    		overflow: "hidden",
    		height: 844
  	},
  	iphone13149: {
    		backgroundColor: "#fee2e2",
    		flex: 1,
    		overflow: "hidden",
    		height: 844,
    		width: "100%"
  	}
});

export default IPhone1314;