import * as React from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import Rectangle1stroke from "../assets/settingspage/rectangle-email.svg"
import Rectangle194 from "../assets/settingspage/rectangle-lang.svg"
import Rectangle1stroke1 from "../assets/settingspage/rectangle-phone.svg"
import Rectangle1stroke2 from "../assets/settingspage/rectangle-username.svg"
import Rectangle1 from "../assets/settingspage/rectangle-contact.svg"
import Uilpen from "../assets/settingspage/uilpen.svg"
import Uilpen1 from "../assets/settingspage/uilpen1.svg"
import Uilpen2 from "../assets/settingspage/uilpen2.svg"
import Iontoggleoutline from "../assets/settingspage/switchbutton.svg"
import Iontoggleoutline1 from "../assets/settingspage/switchbutton1.svg"
import Vuesaxlinearprofile from "../assets/profile.svg"
import Lisearch from "../assets/lisearch.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import Vuesaxboldsetting2 from "../assets/settingspage/boldsetting2.svg"
import Vuesaxlinearheart from "../assets/heart.svg"

const IPhone1314 = () => {
	const router = useRouter();

  	return (
    		<View style={[styles.iphone131411, styles.iphone131411Bg]}>
      			<View style={[styles.iphone16Pro44, styles.iphone16Position]}>
        				<View style={[styles.iphone16Pro44Child, styles.iphone16Position]} />
        				<Rectangle1stroke style={[styles.rectangle1Stroke, styles.rectangle1Layout]} width={145} height={24} />
        				<Rectangle194 style={[styles.iphone16Pro44Item, styles.iphone16Pro44ItemLayout]} width={150} height={24} />
        				<Rectangle1stroke1 style={[styles.rectangle1Stroke1, styles.iphone16Pro44ItemLayout]} width={150} height={24} />
        				<Rectangle1stroke2 style={[styles.rectangle1Stroke2, styles.rectangle1Layout]} width={145} height={24} />
        				<Text style={[styles.notifications, styles.faqTypo]}>Notifications</Text>
        				<Text style={[styles.vibrations, styles.faqTypo]}>Vibrations</Text>
        				<Text style={[styles.faq, styles.faqTypo]}>FAQ</Text>
        				<Rectangle1 style={[styles.iphone16Pro44Inner, styles.contactSupportPosition]} width={159} height={38} />
        				<Text style={[styles.contactSupport, styles.contactSupportPosition]}>Contact support</Text>
        				<Image style={[styles.image4Icon, styles.rectangle1Layout]} resizeMode="cover" source={require("../src/img/contact.png")} />
        				<Text style={styles.personalInformation}>Personal information</Text>
        				<Text style={[styles.changeLanguage, styles.settingsPosition]}>Change language</Text>
        				<Text style={[styles.english, styles.englishTypo]}>English</Text>
        				<Text style={[styles.settings, styles.settingsPosition]}>Settings</Text>
        				<Text style={[styles.username, styles.emailPosition]}>Username</Text>
        				<Text style={[styles.email, styles.emailPosition]}>Email</Text>
        				<Text style={[styles.phoneNumber, styles.englishTypo]}>Phone number</Text>
        				<Image style={styles.image3Icon} resizeMode="cover" source={require("../src/img/faq.png")} />
        				<Image style={styles.globe1Icon} resizeMode="cover" source={require("../src/img/lang.png")} />
        				<Image style={styles.imageIcon} resizeMode="cover" source={require("../src/img/profilepic.png")} />
        				<Uilpen style={[styles.uilpenIcon, styles.uilpenIconLayout]} width={17} height={17} />
        				<Uilpen1 style={[styles.uilpenIcon1, styles.uilpenIconLayout]} width={17} height={17} />
        				<Uilpen2 style={[styles.uilpenIcon2, styles.uilpenIconLayout]} width={17} height={17} />
        				<Iontoggleoutline style={[styles.iontoggleOutlineIcon, styles.iontoggleIconLayout]} width={39} height={39} />
        				<Iontoggleoutline1 style={[styles.iontoggleOutlineIcon1, styles.iontoggleIconLayout]} width={39} height={39} />
        				<View style={[styles.rectangleView, styles.iphone16Position]} />
		<TouchableOpacity 
          style={[styles.vuesaxlinearheartIcon, styles.iconLayout]} 
          onPress={() => router.push("/learnwithfriends")}
        >
          <Vuesaxlinearheart />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.vuesaxlinearhomeIcon} 
          onPress={() => router.push("/home")}
        >
          <Vuesaxlinearhome />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.lisearchIcon} 
          onPress={() => router.push("/home")}
        >
          <Lisearch width={45} height={41} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} 
          onPress={() => router.push("/profile")}
        >
          <Vuesaxlinearprofile />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.vuesaxboldsetting2Icon} 
          onPress={() => {}}
        >
          <Vuesaxboldsetting2 width={47} height={48} />
        </TouchableOpacity>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	iphone131411Bg: {
    		backgroundColor: "#fff",
    		overflow: "hidden"
  	},
  	iphone16Position: {
    		left: 0,
    		position: "absolute"
  	},
  	rectangle1Layout: {
    		height: 24,
    		position: "absolute"
  	},
  	iphone16Pro44ItemLayout: {
    		width: 150,
    		left: 209,
    		height: 24,
    		position: "absolute"
  	},
  	faqTypo: {
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38
  	},
  	contactSupportPosition: {
    		height: 38,
    		top: 700,
    		position: "absolute"
  	},
  	settingsPosition: {
    		marginLeft: -170.5,
    		left: "50%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	englishTypo: {
    		fontSize: 18,
    		left: "50%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	emailPosition: {
    		top: 292,
    		fontSize: 18,
    		left: "50%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	uilpenIconLayout: {
    		height: 17,
    		width: 17,
    		position: "absolute"
  	},
  	iontoggleIconLayout: {
    		height: 39,
    		width: 39,
    		left: 146,
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		width: "11.45%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iphone16Pro44Child: {
    		backgroundColor: "#86c0fa",
    		width: 401,
    		height: 166,
    		top: 0,
    		left: 0
  	},
  	rectangle1Stroke: {
    		top: 324,
    		left: 27
  	},
  	iphone16Pro44Item: {
    		top: 511
  	},
  	rectangle1Stroke1: {
    		top: 325
  	},
  	rectangle1Stroke2: {
    		top: 393,
    		left: 129
  	},
  	notifications: {
    		left: 28,
    		fontSize: 19,
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute",
    		top: 574
  	},
  	vibrations: {
    		left: 30,
    		top: 609,
    		fontSize: 19,
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	faq: {
    		top: 650,
    		left: 309,
    		fontSize: 19,
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	iphone16Pro44Inner: {
    		left: 209,
    		top: 700
  	},
  	contactSupport: {
    		left: 250,
    		fontSize: 15,
    		display: "flex",
    		alignItems: "center",
    		justifyContent: "center",
    		width: 109,
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38
  	},
  	image4Icon: {
    		top: 709,
    		left: 223,
    		width: 22
  	},
  	personalInformation: {
    		marginLeft: -172.5,
    		top: 241,
    		fontSize: 24,
    		left: "50%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "DoHyeon-Regular",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	changeLanguage: {
    		top: 503,
    		fontSize: 20
  	},
  	english: {
    		marginLeft: 55.5,
    		top: 504
  	},
  	settings: {
    		top: 462,
    		fontSize: 24
  	},
  	username: {
    		marginLeft: -166.5
  	},
  	email: {
    		marginLeft: 11.5
  	},
  	phoneNumber: {
    		marginLeft: -50.5,
    		top: 359,
    		textShadowColor: "rgba(25, 14, 27, 0)",
    		textShadowOffset: {
      			width: 0,
      			height: 76
    		},
    		textShadowRadius: 21
  	},
  	image3Icon: {
    		top: 582,
    		left: 247,
    		width: 78,
    		height: 78,
    		position: "absolute"
  	},
  	globe1Icon: {
    		top: 515,
    		left: 227,
    		width: 14,
    		height: 15,
    		position: "absolute"
  	},
  	imageIcon: {
    		top: 115,
    		left: 23,
    		width: 103,
    		height: 103,
    		position: "absolute"
  	},
  	uilpenIcon: {
    		left: 154,
    		top: 303
  	},
  	uilpenIcon1: {
    		left: 342,
    		top: 303
  	},
  	uilpenIcon2: {
    		top: 370,
    		left: 262
  	},
  	iontoggleOutlineIcon: {
    		top: 574
  	},
  	iontoggleOutlineIcon1: {
    		top: 609
  	},
  	rectangleView: {
    		top: 781,
    		backgroundColor: "#ededed",
    		width: 390,
    		height: 65
  	},
	  vuesaxlinearheartIcon: {
		height: "5.21%",
		top: "93.73%",
		right: "64.89%",
		bottom: "1.07%",
		left: "23.66%",
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  vuesaxlinearhomeIcon: {
		height: "4.53%",
		top: "93.72%",
		right: "44.36%",
		bottom: "1.25%",
		left: "0.19%",
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  lisearchIcon: {
		top: 792,
		left: 20,
		position: "absolute",
		overflow: "hidden",
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  vuesaxlinearprofileIcon: {
		height: "5.25%",
		top: "93.49%",
		right: "23.87%",
		bottom: "1.26%",
		left: "64.68%",
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  vuesaxboldsetting2Icon: {
		top: 789,
		left: 324,
		position: "absolute",
		justifyContent: 'center',
		alignItems: 'center',
	  },
  	iphone16Pro44: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		width: 393,
    		height: 845,
    		top: 0,
    		left: 0,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	},
  	iphone131411: {
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default IPhone1314;