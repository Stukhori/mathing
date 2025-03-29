import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import Search from "../assets/search.svg"
import Rectangle176 from "../assets/rectangle-176.svg"
import Rectangle179 from "../assets/rectangle-179.svg"
import Vuesaxlinearprofile from "../assets/vuesaxlinearprofile.svg"
import Vuesaxlinearsetting2 from "../assets/vuesaxlinearsetting2.svg"
import Lisearch from "../assets/lisearch.svg"
import Vuesaxlinearhome from "../assets/vuesaxlinearhome.svg"
import Image5 from "../assets/image5.svg"
import Weuiaddfriendsoutlined from "../assets/weuiaddfriendsoutlined.svg"
import Weuiaddfriendsfilled from "../assets/weuiaddfriendsfilled.svg"
import Weuiaddfriendsfilled1 from "../assets/weuiaddfriendsfilled1.svg"
import Weuiaddfriendsfilled2 from "../assets/weuiaddfriendsfilled2.svg"
import Weuiaddfriendsfilled3 from "../assets/weuiaddfriendsfilled3.svg"
import Weuiaddfriendsfilled4 from "../assets/weuiaddfriendsfilled4.svg"
import Vuesaxlinearheart from "../assets/vuesaxlinearheart.svg"

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone131435}>
      			<View style={styles.iphone131435Child} />
      			<Search style={styles.searchIcon} width={22} height={21} />
      			<Text style={styles.learnWithFriends}>Learn with friends</Text>
      			<Rectangle176 style={styles.iphone131435Item} width={388} height={38} />
      			<Rectangle179 style={styles.iphone131435Inner} width={188} height={3} />
      			<Text style={[styles.friends, styles.groupsTypo]}>Friends</Text>
      			<Text style={[styles.groups, styles.groupsTypo]}>Groups</Text>
      			<Text style={styles.learnWithFriends1}>Learn with friends</Text>
      			<View style={styles.rectangleView} />
      			<Vuesaxlinearprofile style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} />
      			<Vuesaxlinearsetting2 style={[styles.vuesaxlinearsetting2Icon, styles.iconLayout]} />
      			<Lisearch style={styles.lisearchIcon} width={45} height={41} />
      			<Vuesaxlinearhome style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]} />
      			<Text style={styles.results5}>Results: 5</Text>
      			<Text style={styles.emma}>emma</Text>
      			<Image style={[styles.imageIcon, styles.imageIconLayout]} resizeMode="cover" source="image.png" />
      			<Image style={[styles.imageIcon1, styles.imageIconLayout]} resizeMode="cover" source="image.png" />
      			<Image style={[styles.imageIcon2, styles.imageIconLayout]} resizeMode="cover" source="image.png" />
      			<Image style={[styles.imageIcon3, styles.imageIconLayout]} resizeMode="cover" source="image.png" />
      			<Image style={[styles.imageIcon4, styles.imageIconLayout]} resizeMode="cover" source="image.png" />
      			<Image5 style={styles.imageIcon5} width={21} height={20} />
      			<Text style={styles.emma1}>Emma</Text>
      			<Text style={[styles.emmanuel, styles.emilyTypo]}>Emmanuel</Text>
      			<Text style={[styles.emmatrue, styles.emilyTypo]}>Emmatrue</Text>
      			<Text style={[styles.emily, styles.emilyTypo]}>Emily</Text>
      			<Text style={styles.karolina}>Karolina</Text>
      			<Text style={[styles.emmaSmith, styles.foxyTypo]}>@emma_smith</Text>
      			<Text style={[styles.manuSand, styles.foxyTypo]}>@manu_sand</Text>
      			<Text style={[styles.trueSun, styles.foxyTypo]}>@true_sun</Text>
      			<Text style={[styles.foxy, styles.foxyTypo]}>@foxy</Text>
      			<Text style={[styles.karolinLes, styles.foxyTypo]}>@karolin_les</Text>
      			<Weuiaddfriendsoutlined style={[styles.weuiaddFriendsOutlinedIcon, styles.weuiaddIconLayout]} width={29} height={29} />
      			<Weuiaddfriendsfilled style={[styles.weuiaddFriendsOutlinedIcon, styles.weuiaddIconLayout]} width={29} height={29} />
      			<Weuiaddfriendsfilled1 style={[styles.weuiaddFriendsFilledIcon1, styles.weuiaddIconLayout]} width={29} height={29} />
      			<Weuiaddfriendsfilled2 style={[styles.weuiaddFriendsFilledIcon2, styles.weuiaddIconLayout]} width={29} height={29} />
      			<Weuiaddfriendsfilled3 style={[styles.weuiaddFriendsFilledIcon3, styles.weuiaddIconLayout]} width={29} height={29} />
      			<Weuiaddfriendsfilled4 style={[styles.weuiaddFriendsFilledIcon4, styles.weuiaddIconLayout]} width={29} height={29} />
      			<Vuesaxlinearheart style={[styles.vuesaxlinearheartIcon, styles.iconLayout]} />
    		</View>);
};

const styles = StyleSheet.create({
  	groupsTypo: {
    		color: "#5b085b",
    		fontFamily: "DoHyeon-Regular",
    		fontSize: 20,
    		top: 146,
    		height: 45,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		width: "11.54%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	imageIconLayout: {
    		height: 57,
    		width: 57,
    		left: 31,
    		position: "absolute"
  	},
  	emilyTypo: {
    		left: 127,
    		fontSize: 22,
    		fontFamily: "DoHyeon-Regular",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	foxyTypo: {
    		color: "#727272",
    		width: 133,
    		fontSize: 18,
    		fontFamily: "DoHyeon-Regular",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	weuiaddIconLayout: {
    		height: 29,
    		width: 29,
    		left: 333,
    		position: "absolute"
  	},
  	iphone131435Child: {
    		top: 92,
    		left: 40,
    		shadowColor: "rgba(0, 0, 0, 0)",
    		shadowOffset: {
      			width: 0,
      			height: 209
    		},
    		shadowRadius: 59,
    		elevation: 59,
    		shadowOpacity: 1,
    		borderRadius: 25,
    		backgroundColor: "#fff",
    		borderColor: "#d6bdf4",
    		width: 300,
    		height: 41,
    		position: "absolute",
    		borderWidth: 1,
    		borderStyle: "solid"
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
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontSize: 32,
    		position: "absolute"
  	},
  	iphone131435Item: {
    		top: 149,
    		left: 2,
    		position: "absolute"
  	},
  	iphone131435Inner: {
    		top: 184,
    		left: 1,
    		position: "absolute"
  	},
  	friends: {
    		width: 188,
    		left: 2
  	},
  	groups: {
    		left: 188,
    		width: 202
  	},
  	learnWithFriends1: {
    		top: 43,
    		left: 65,
    		width: 260,
    		fontFamily: "DoHyeon-Regular",
    		height: 45,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		fontSize: 32,
    		position: "absolute"
  	},
  	rectangleView: {
    		top: 779,
    		left: 0,
    		backgroundColor: "#ededed",
    		width: 390,
    		height: 65,
    		position: "absolute"
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
    		top: 790,
    		left: 20,
    		position: "absolute",
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
  	results5: {
    		top: 187,
    		fontSize: 16,
    		color: "#898787",
    		left: 31,
    		fontFamily: "DoHyeon-Regular",
    		textAlign: "center",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	emma: {
    		top: 95,
    		color: "#0c0c0c",
    		fontSize: 18,
    		left: 20,
    		width: 260,
    		fontFamily: "DoHyeon-Regular",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	imageIcon: {
    		top: 238
  	},
  	imageIcon1: {
    		top: 327
  	},
  	imageIcon2: {
    		top: 416
  	},
  	imageIcon3: {
    		top: 505
  	},
  	imageIcon4: {
    		top: 594
  	},
  	imageIcon5: {
    		top: 799,
    		left: 30,
    		position: "absolute"
  	},
  	emma1: {
    		top: 235,
    		left: 91,
    		height: 39,
    		width: 133,
    		fontSize: 22,
    		fontFamily: "DoHyeon-Regular",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	emmanuel: {
    		top: 324
  	},
  	emmatrue: {
    		top: 413
  	},
  	emily: {
    		top: 502
  	},
  	karolina: {
    		top: 591,
    		left: 131,
    		fontSize: 22,
    		fontFamily: "DoHyeon-Regular",
    		textAlign: "center",
    		color: "#000",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	emmaSmith: {
    		top: 258,
    		left: 108,
    		height: 39
  	},
  	manuSand: {
    		top: 347,
    		left: 103
  	},
  	trueSun: {
    		top: 436,
    		left: 97,
    		height: 39
  	},
  	foxy: {
    		top: 525,
    		left: 81,
    		height: 39
  	},
  	karolinLes: {
    		top: 615,
    		left: 101,
    		height: 39
  	},
  	weuiaddFriendsOutlinedIcon: {
    		top: 251
  	},
  	weuiaddFriendsFilledIcon1: {
    		top: 337
  	},
  	weuiaddFriendsFilledIcon2: {
    		top: 422
  	},
  	weuiaddFriendsFilledIcon3: {
    		top: 508
  	},
  	weuiaddFriendsFilledIcon4: {
    		top: 601
  	},
  	vuesaxlinearheartIcon: {
    		height: "5.21%",
    		top: "93.48%",
    		right: "64.87%",
    		bottom: "1.3%",
    		left: "23.59%",
    		maxWidth: "100%",
    		width: "11.54%"
  	},
  	iphone131435: {
    		backgroundColor: "#fdfcff",
    		borderColor: "#000",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden",
    		borderWidth: 1,
    		borderStyle: "solid"
  	}
});

export default IPhone1314;
