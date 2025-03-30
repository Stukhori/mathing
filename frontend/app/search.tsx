import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import Search from "../assets/friendspage/search.svg"
import Rectangle176 from "../assets/rectangle-173.svg"
import Rectangle179 from "../assets/rectangle-179.svg"
import Vuesaxlinearprofile from "../assets/profile.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Lisearch from "../assets/lisearch.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import Image1 from "../assets/rectanglebrb.svg"
import Vuesaxlinearheart from "../assets/heart.svg"
import { TextInput } from "react-native";
import { PrismaClient } from '@prisma/client';

const IPhone1314 = () => {
	const [searchText, setSearchText] = React.useState('');

  	return (
    		<View style={[styles.iphone131436, styles.iphone131436Border]}>
      			<View style={[styles.iphone131436Child, styles.lisearchIconLayout]} />
				  <View style={styles.searchContainer}>
        <Search style={styles.searchIcon} width={22} height={21} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search friends..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      			<Text style={[styles.learnWithFriends, styles.learnFlexBox]}>Learn with friends</Text>
      			<Rectangle176 style={styles.iphone131436Item} width={388} height={38} />
      			<Rectangle179 style={styles.iphone131436Inner} width={188} height={3} />
      			<Text style={[styles.friends, styles.groupsTypo]}>Friends</Text>
      			<Text style={[styles.groups, styles.groupsTypo]}>Groups</Text>
      			<Text style={[styles.learnWithFriends1, styles.resultsTypo]}>Learn with friends</Text>
      			<View style={styles.rectangleView} />
      			<Vuesaxlinearprofile style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} />
      			<Vuesaxlinearsetting2 style={[styles.vuesaxlinearsetting2Icon, styles.iconLayout]} />
      			<Lisearch style={[styles.lisearchIcon, styles.lisearchIconLayout]} width={45} height={41} />
      			<Vuesaxlinearhome style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]} />
      			<Text style={[styles.results, styles.resultsTypo]}>{`Results: `}</Text>
      			<Image1 style={styles.imageIcon} width={21} height={20} />
      			<Vuesaxlinearheart style={[styles.vuesaxlinearheartIcon, styles.iconLayout]} />
    		</View>);
};

const styles = StyleSheet.create({
  	iphone131436Border: {
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
	  // Add these new styles:
	  searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		top: 92,
		left: 40,
		borderRadius: 25,
		backgroundColor: "#fff",
		borderColor: "#d6bdf4",
		borderWidth: 1,
		borderStyle: "solid",
		width: 300,
		height: 41,
		paddingHorizontal: 15,
		shadowColor: "rgba(0, 0, 0, 0)",
		shadowOffset: { width: 0, height: 209 },
		shadowRadius: 59,
		elevation: 59,
		shadowOpacity: 1,
	  },
	  searchInput: {
		flex: 1,
		height: '100%',
		marginLeft: 10,
		fontFamily: "DoHyeon-Regular",
		fontSize: 16,
		color: '#000',
	  },
  	lisearchIconLayout: {
    		height: 41,
    		position: "absolute"
  	},
  	learnFlexBox: {
    		height: 45,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		fontSize: 32
  	},
  	groupsTypo: {
    		color: "#5b085b",
    		fontSize: 20,
    		top: 146,
    		fontFamily: "DoHyeon-Regular",
    		height: 45,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		lineHeight: 38,
    		position: "absolute"
  	},
  	resultsTypo: {
    		fontFamily: "DoHyeon-Regular",
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
  	iphone131436Child: {
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
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	searchIcon: {
    		top:0,
    		left: 0,
  	},
  	learnWithFriends: {
    		top: -261,
    		left: 202,
    		fontFamily: "JockeyOne-Regular",
    		width: 258,
    		textAlign: "center",
    		lineHeight: 38,
    		height: 45,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		fontSize: 32,
    		position: "absolute"
  	},
  	iphone131436Item: {
    		top: 149,
    		left: 2,
    		position: "absolute"
  	},
  	iphone131436Inner: {
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
    		height: 45,
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		color: "#000",
    		fontSize: 32,
    		fontFamily: "DoHyeon-Regular"
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
  	results: {
    		top: 187,
    		left: 38,
    		fontSize: 16,
    		color: "#898787"
  	},
  	imageIcon: {
    		top: 799,
    		left: 30,
    		position: "absolute"
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
  	iphone131436: {
    		backgroundColor: "#fdfcff",
    		borderColor: "#000",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default IPhone1314;