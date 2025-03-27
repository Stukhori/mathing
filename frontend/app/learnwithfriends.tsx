import * as React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import Search from "../assets/friendspage/search.svg"
import Ellipse4 from "../assets/friendspage/ellipsefriends1.svg"
import Ellipse5 from "../assets/friendspage/ellipsefriends2.svg"
import Ellipse6 from "../assets/friendspage/ellipsefriends3.svg"
import Ellipse7 from "../assets/friendspage/ellipsefriends4.svg"
import Vuesaxlinearprofile from "../assets/profile.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Lisearch from "../assets/lisearch.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import Vuesaxlinearheart from "../assets/friendspage/heartbold.svg"
import { useRouter } from "expo-router";

const IPhone1314 = () => {
	const router = useRouter();

  	return (
    		<View style={styles.iphone13149}>
      			<View style={[styles.iphone16Pro38, styles.iphone16Position]}>
        				<View style={styles.searchrectangle} />
        				<Text style={[styles.searchFriends, styles.friendsLayout]}>Search friends...</Text>
        				<Search style={styles.searchIcon} width={22} height={21} />
        				<View style={styles.friendsrectangle} />
        				<Text style={[styles.viewAll, styles.viewTypo]}>View all</Text>
        				<Text style={[styles.friends, styles.groupsLayout]}>Friends</Text>
        				<Image style={[styles.friendsimageIcon2, styles.imageIconLayout]} resizeMode="cover" source={require("../assets/friendspage/foxprofile.png")} />
        				<Image style={[styles.friendsimageIcon3, styles.imageIconLayout]} resizeMode="cover" source={require("../assets/friendspage/menprofile.png")} />
        				<Text style={styles.friendstext3}>Ayaulym</Text>
        				<Text style={[styles.friendstext2, styles.agzamTypo]}>Agzam</Text>
        				<Text style={styles.friendsnumber}>(12)</Text>
        				<Image style={[styles.friendsimageIcon1, styles.imageIconLayout]} resizeMode="cover" source={require("../assets/friendspage/womenprofile.png")} />
        				<Text style={[styles.friendstext1, styles.agzamTypo]}>Daniyal</Text>
        				<Text style={[styles.friendstext4, styles.agzamTypo]}>{`Add new 
friends`}</Text>
        				<Ellipse4 style={[styles.newfriendsellipse, styles.imageIconLayout]} width={64} height={64} />
        				<Image style={[styles.newfriendsicon, styles.iconLayout3]} resizeMode="cover" source={require("../assets/friendspage/addfriends.png")} />
        				<Text style={[styles.groups, styles.groupsLayout]}>Groups</Text>
        				<Ellipse5 style={[styles.group1ellipse, styles.groupellipses]} width={68} height={68} />
        				<Image style={[styles.group1icon, styles.groupsicons]} resizeMode="cover" source={require("../assets/friendspage/schoolgroup.png")} />
        				<Text style={[styles.group1text, styles.newgrouptext]}>School</Text>
        				<Ellipse6 style={[styles.group2ellipse, styles.groupellipses]} width={68} height={68} />
        				<Ellipse7 style={[styles.group3ellipse, styles.groupellipses]} width={68} height={68} />
        				<Text style={[styles.group2text, styles.newgrouptext]}>Cool guys</Text>
        				<Image style={[styles.group3icon, styles.iconLayout3]} resizeMode="cover" source={require("../assets/friendspage/newfriends.png")} />
        				<Text style={[styles.group3text, styles.newgrouptext]}>Create new group</Text>
        				<Image style={[styles.group2icon, styles.groupsicons]} resizeMode="cover" source={require("../assets/friendspage/coolguysgroup.png")} />
        				<Text style={[styles.toptext, styles.learnFlexBox]}>Learn with friends</Text>
        				<View style={[styles.menurectangle, styles.iphone16Position]} />
        				<Text style={[styles.viewAlltextrankings, styles.viewTypo]}>View all</Text>
        				<Text style={styles.yourRankings}>Your Rankings</Text>
        				<Text style={[styles.rankgroup1name, styles.rankingsgroupname]}>School</Text>
        				<Text style={[styles.group1rank, styles.rankplace]}>
          					<Text style={styles.thOf150Container1}>
            						<Text style={styles.th}>9th</Text>
            						<Text style={styles.of150}> of 150</Text>
          					</Text>
        				</Text>
        				<Text style={[styles.text1, styles.groupnumber]}>2</Text>
        				<Text style={[styles.rankgroup2name, styles.rankingsgroupname]}>Cool guys</Text>
        				<Text style={[styles.group2rank, styles.rankplace]}>
          					<Text style={styles.thOf150Container1}>
            						<Text style={styles.th}>4th</Text>
            						<Text style={styles.of150}> of 22</Text>
          					</Text>
        				</Text>
        				<Text style={[styles.text2, styles.groupnumber]}>1</Text>
        				<Image style={styles.iconParkSolidupOne} resizeMode="cover" source={require("../assets/friendspage/arrowdown.png")} />
						<TouchableOpacity 
          style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} 
          onPress={() => router.push("/profile")} // Navigate to profile
        >
          <Vuesaxlinearprofile />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.vuesaxlinearsetting2Icon, styles.iconLayout]} 
          onPress={() => router.push("/settingspage")} // Navigate to settings
        >
          <Vuesaxlinearsetting2 />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.lisearchIcon, styles.searchandheart]} 
          onPress={() => router.push("/home")} // Navigate to home
        >
          <Lisearch width={45} height={41} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]} 
          onPress={() => router.push("/home")} // Navigate to home
        >
          <Vuesaxlinearhome />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.vuesaxlinearheartIcon, styles.searchandheart]} 
          onPress={() => {}} // Stay on current page (friends page)
        >
          <Vuesaxlinearheart width={45} height={45} />
        </TouchableOpacity>
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
  	groupellipses: {
    		height: 68,
    		width: 68,
    		top: 407,
    		position: "absolute"
  	},
  	groupsicons: {
    		height: 47,
    		width: 47,
    		position: "absolute"
  	},
  	newgrouptext: {
    		height: 40,
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
  	searchandheart: {
    		width: 35,
    		top: 790,
    		position: "absolute"
  	},
  	rankingsgroupname: {
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
  	rankplace: {
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
  	groupnumber: {
    		width: 23,
    		fontSize: 45,
    		textAlign: "left",
    		color: "#000",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 43,
    		position: "absolute"
  	},
  	searchrectangle: {
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
  	friendsrectangle: {
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
  	friendsimageIcon2: {
    		left: 120
  	},
  	friendsimageIcon3: {
    		left: 213
  	},
  	friendstext3: {
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
  	friendstext2: {
    		left: 129,
    		top: 295,
    		fontSize: 16,
    		lineHeight: 38
  	},
  	friendsnumber: {
    		left: 114,
    		fontSize: 25,
    		color: "#898787",
    		top: 162,
    		textAlign: "center",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	friendsimageIcon1: {
    		left: 26,
    		height: 64,
    		width: 64,
    		top: 226
  	},
  	friendstext1: {
    		left: 33,
    		top: 295,
    		fontSize: 16,
    		lineHeight: 38
  	},
  	friendstext4: {
    		top: 295,
    		left: 303,
    		lineHeight: 20
  	},
  	newfriendsellipse: {
    		left: 306
  	},
  	newfriendsicon: {
    		top: 239,
    		left: 322
  	},
  	groups: {
    		top: 350,
    		left: -4
  	},
  	group1ellipse: {
    		left: 37
  	},
  	group1icon: {
    		top: 415,
    		left: 48
  	},
  	group1text: {
    		left: 20,
    		width: 102,
    		height: 30,
    		top: 482,
    		lineHeight: 38,
    		fontSize: 18
  	},
  	group2ellipse: {
    		left: 156
  	},
  	group3ellipse: {
    		left: 278
  	},
  	group2text: {
    		left: 140,
    		width: 102,
    		height: 30,
    		top: 482,
    		lineHeight: 38,
    		fontSize: 18
  	},
  	group3icon: {
    		top: 423,
    		left: 296
  	},
  	group3text: {
    		left: 252,
    		fontSize: 17,
    		width: 116,
    		lineHeight: 20
  	},
  	group2icon: {
    		top: 418,
    		left: 167
  	},
  	toptext: {
    		top: 43,
    		left: 65,
    		height: 45,
    		color: "#000",
    		width: 260,
    		fontFamily: "DoHyeon-Regular",
    		fontSize: 32
  	},
  	menurectangle: {
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
  	viewAlltextrankings: {
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
  	rankgroup1name: {
    		top: 580
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
  	group1rank: {
    		top: 619
  	},
  	text1: {
    		top: 612,
    		left: 324
  	},
  	rankgroup2name: {
    		top: 675
  	},
  	group2rank: {
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