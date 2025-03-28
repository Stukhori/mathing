import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import Twemoji1stplacemedal from "../assets/1stplacemedal.svg";
import Twemoji3rdplacemedal from "../assets/3rdplacemedal.svg";
import Twemoji2ndplacemedal from "../assets/2ndplacemedal.svg";
import Vuesaxlinearprofile from "../assets/profile.svg";
import Vuesaxlinearsetting2 from "../assets/setting-2.svg";
import Lisearch from "../assets/lisearch.svg";
import Vuesaxlinearhome from "../assets/homecommon.svg";
import Vuesaxlinearheart from "../assets/heart.svg";
import { useRouter } from "expo-router";


const IPhone1314 = () => {
	const router = useRouter();

  return (
    <View style={styles.iphone131427}>
      <View style={[styles.iphone16Pro19, styles.iphone16Position]}>
        <View style={[styles.iphone16Pro19Child, styles.iphone16Layout]} />
        <View style={[styles.iphone16Pro19Item, styles.iphone16Layout]} />
        <View style={[styles.iphone16Pro19Item, styles.iphone16Layout]} />
        <View style={[styles.rectangleView, styles.iphone16ChildLayout]} />
        <View style={[styles.rectangleView, styles.iphone16ChildLayout]} />
        <View
          style={[styles.iphone16Pro19Child2, styles.iphone16ChildLayout]}
        />
        <View
          style={[styles.iphone16Pro19Child2, styles.iphone16ChildLayout]}
        />
        <View
          style={[styles.iphone16Pro19Child4, styles.iphone16ChildLayout]}
        />
        <View
          style={[styles.iphone16Pro19Child4, styles.iphone16ChildLayout]}
        />
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/friendspage/foxprofile.png")}
        />
        <Image
          style={[styles.imageIcon1, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/friendspage/menprofile.png")}
        />
        <Image
          style={[styles.imageIcon2, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/friendspage/womenprofile.png")}
        />
        <Image
          style={[styles.imageIcon3, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../src/img/girl.png")}
        />
        <Image
          style={[styles.imageIcon4, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../src/img/monkey.png")}
        />
        <Image
          style={[styles.imageIcon5, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../src/img/lion.png")}
        />
        <Text style={styles.text}>———</Text>
        <Text style={[styles.emma, styles.emmaFlexBox]}>Emma</Text>
        <Text style={[styles.agzam, styles.agzamTypo]}>Agzam</Text>
        <Text style={[styles.alena, styles.alenaTypo]}>Alena</Text>
        <Text style={[styles.christoph, styles.agzamTypo]}>Christoph</Text>
        <Text style={[styles.karolina, styles.alenaTypo]}>Karolina</Text>
        <Text style={[styles.valeriy, styles.agzamTypo]}>Valeriy</Text>
        <Text style={[styles.you, styles.youFlexBox]}>You</Text>
        <Text style={[styles.text1, styles.textLayout]}>150</Text>
        <Text style={[styles.text2, styles.textLayout]}>270</Text>
        <Text style={[styles.text3, styles.textLayout]}>315</Text>
        <Text style={[styles.text4, styles.textLayout]}>220</Text>
        <Text style={[styles.text5, styles.textLayout]}>235</Text>
        <Text style={[styles.text6, styles.textLayout]}>170</Text>
        <Text style={[styles.text7, styles.textLayout]}>200</Text>
        <Text style={[styles.text8, styles.textTypo1]}>9</Text>
        <Text style={[styles.text9, styles.textTypo]}>5</Text>
        <Text style={[styles.text10, styles.textTypo1]}>6</Text>
        <Text style={[styles.text11, styles.textTypo]}>4</Text>
        <View
          style={[styles.iphone16Pro19Child6, styles.iphone16ChildPosition]}
        />
        <View
          style={[styles.iphone16Pro19Child7, styles.iphone16ChildPosition]}
        />
        <Text style={styles.schoolLeaderboard}>School Leaderboard</Text>
        <Text style={[styles.text12, styles.emmaFlexBox]}>←</Text>
        <Twemoji1stplacemedal
          style={[styles.twemoji1stPlaceMedalIcon, styles.placeIconLayout]}
          width={44}
          height={44}
        />
        <Twemoji3rdplacemedal
          style={[styles.twemoji3rdPlaceMedalIcon, styles.placeIconLayout]}
          width={44}
          height={44}
        />
        <Twemoji2ndplacemedal
          style={[styles.twemoji2ndPlaceMedalIcon, styles.placeIconLayout]}
          width={44}
          height={44}
        />
        <Image
          style={[styles.imageIcon6, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../src/img/profilepic.png")}
        />
        <View style={[styles.iphone16Pro19Child8, styles.iphone16Position]} />
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
          style={[styles.vuesaxlinearhomeIcon, styles.iconLayout]}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone16Position: {
    width: 390,
    position: "absolute",
    left: 0,
  },
  iphone16Layout: {
    height: 73,
    width: 402,
    position: "absolute",
  },
  iphone16ChildLayout: {
    backgroundColor: "#fdfcff",
    height: 73,
    width: 402,
    left: 0,
    position: "absolute",
  },
  imageIconLayout: {
    height: 57,
    width: 57,
    position: "absolute",
  },
  emmaFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  agzamTypo: {
    left: 192,
    fontFamily: "DoHyeon-Regular",
    fontSize: 25,
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  alenaTypo: {
    left: 193,
    fontFamily: "DoHyeon-Regular",
    fontSize: 25,
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  youFlexBox: {
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  textLayout: {
    left: 316,
    height: 49,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: "Rubik-SemiBold",
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  textTypo: {
    left: 33,
    fontFamily: "Rubik-SemiBold",
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  iphone16ChildPosition: {
    backgroundColor: "#71e060",
    top: 0,
    width: 402,
    left: 0,
    position: "absolute",
  },
  placeIconLayout: {
    height: 44,
    width: 44,
    left: 20,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "11.54%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone16Pro19Child: {
    top: 674,
    backgroundColor: "#d0e7f9",
    left: 7,
  },
  iphone16Pro19Item: {
    top: 580,
    backgroundColor: "#fff",
    left: 0,
    width: 402,
  },
  rectangleView: {
    top: 492,
  },
  iphone16Pro19Child2: {
    top: 313,
  },
  iphone16Pro19Child4: {
    top: 138,
  },
  imageIcon: {
    top: 100,
    left: 98,
    height: 57,
    width: 57,
  },
  imageIcon1: {
    top: 189,
    left: 98,
    height: 57,
    width: 57,
  },
  imageIcon2: {
    top: 278,
    left: 98,
    height: 57,
    width: 57,
  },
  imageIcon3: {
    top: 367,
    left: 98,
    height: 57,
    width: 57,
  },
  imageIcon4: {
    top: 456,
    left: 98,
    height: 57,
    width: 57,
  },
  imageIcon5: {
    top: 545,
    left: 95,
  },
  text: {
    top: 627,
    left: 174,
    fontSize: 35,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  emma: {
    top: 112,
    left: 158,
    width: 133,
    height: 39,
    fontFamily: "DoHyeon-Regular",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: 25,
  },
  agzam: {
    top: 201,
  },
  alena: {
    top: 290,
  },
  christoph: {
    top: 379,
  },
  karolina: {
    top: 468,
  },
  valeriy: {
    top: 557,
  },
  you: {
    top: 688,
    width: 55,
    height: 49,
    fontSize: 30,
    left: 192,
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    color: "#000",
    lineHeight: 38,
    position: "absolute",
  },
  text1: {
    top: 687,
    fontSize: 30,
  },
  text2: {
    top: 199,
    fontSize: 25,
  },
  text3: {
    top: 107,
    fontSize: 25,
  },
  text4: {
    top: 375,
    fontSize: 25,
  },
  text5: {
    top: 285,
    fontSize: 25,
  },
  text6: {
    top: 551,
    fontSize: 25,
  },
  text7: {
    top: 464,
    fontSize: 25,
  },
  text8: {
    left: 32,
    width: 20,
    top: 687,
    fontSize: 30,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  text9: {
    top: 463,
  },
  text10: {
    top: 552,
    left: 34,
    fontSize: 25,
  },
  text11: {
    top: 374,
  },
  iphone16Pro19Child6: {
    height: 76,
  },
  iphone16Pro19Child7: {
    height: 72,
  },
  schoolLeaderboard: {
    marginLeft: -232,
    top: 39,
    left: "50%",
    width: 475,
    height: 60,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    color: "#000",
    lineHeight: 28,
    position: "absolute",
  },
  text12: {
    top: 38,
    fontSize: 50,
    fontFamily: "Inconsolata-Regular",
    width: 53,
    height: 58,
    left: 7,
  },
  twemoji1stPlaceMedalIcon: {
    top: 109,
  },
  twemoji3rdPlaceMedalIcon: {
    top: 284,
  },
  twemoji2ndPlaceMedalIcon: {
    top: 198,
  },
  imageIcon6: {
    top: 682,
    left: 98,
    height: 57,
    width: 57,
  },
  iphone16Pro19Child8: {
    top: 780,
    backgroundColor: "#ededed",
    height: 65,
  },
  vuesaxlinearprofileIcon: {
    right: "23.29%",
    left: "65.17%",
    bottom: "1.37%",
    maxWidth: "100%",
    width: "11.54%",
    top: "93.37%",
    height: "5.25%",
  },
  vuesaxlinearsetting2Icon: {
    right: "5.13%",
    left: "83.33%",
    bottom: "1.37%",
    maxWidth: "100%",
    width: "11.54%",
    top: "93.37%",
    height: "5.25%",
  },
  lisearchIcon: {
    top: 791,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  vuesaxlinearhomeIcon: {
    height: "5.03%",
    top: "93.6%",
    right: "43.93%",
    left: "44.53%",
    bottom: "1.37%",
    maxWidth: "100%",
    width: "11.54%",
  },
  vuesaxlinearheartIcon: {
    height: "5.21%",
    top: "93.61%",
    right: "63.33%",
    bottom: "1.18%",
    left: "25.13%",
    maxWidth: "100%",
    width: "11.54%",
  },
  iphone16Pro19: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 845,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  iphone131427: {
    backgroundColor: "#fee0e0",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;
