import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Rectangle23 from "../assets/Rectangle-23.svg";
import Fluentemojiflatfire from "../assets/fluentemojiflatfire.svg";
import Rectangle232 from "../assets/Rectangle-232.svg";
import Rectangle234 from "../assets/Rectangle-234.svg";
import Group from "../assets/brain.svg";
import Vuesaxlinearprofile from "../assets/profile.svg";
import Vuesaxlinearsetting2 from "../assets/setting-2.svg";
import Lisearch from "../assets/lisearch.svg";
import Vuesaxboldhome from "../assets/homebold.svg";
import Vector from "../assets/vector.svg";
import Heart from "../assets/heart.svg";
import { useRouter } from "expo-router";

const IPhone1314 = () => { 
  const router = useRouter();
  
  return (
<View style={styles.iphone131417}>
      <View style={styles.iphone16Pro45}>
        <Text style={styles.welcomeAgzam}>Welcome, Agzam!</Text>

        {/* White Rectangle - Math Intermediate Section */}
        <TouchableOpacity 
          style={[styles.iphone16Pro45Child, styles.iphone16ShadowBox]}
          onPress={() => router.push("/courses")}
        />

        {/* Purple Rectangle - Challenge of the Day */}
        <TouchableOpacity 
          style={[styles.iphone16Pro45Item, styles.rectangleViewPosition]}
          onPress={() => router.push("/Daychallenge")}
        />

        {/* Continue Button */}
        <TouchableOpacity 
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          onPress={() => router.push("/courses")}
        >
          <Rectangle23 width={106} height={31} />
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>

        {/* Start Button */}
        <TouchableOpacity 
          style={[styles.iphone16Pro45Child4, styles.iphone16Pro45Child4Layout]}
          onPress={() => router.push("/logicspage")}
        >
          <Rectangle234 width={89} height={31} />
          <Text style={[styles.start, styles.tryTypo]}>Start</Text>
        </TouchableOpacity>

        {/* Try Button */}
        <TouchableOpacity 
          style={[styles.iphone16Pro45Child6, styles.tryPosition]}
          onPress={() => router.push("/Daychallenge")}
        >
          <Text style={[styles.try, styles.tryPosition]}>Try!</Text>
        </TouchableOpacity>

        {/* Rest of the components remain unchanged */}
        <Image
          style={styles.iphone16Pro45Inner}
          resizeMode="cover"
          source={require("../src/img/Group1.png")}
        />
        <Text style={styles.mathIntermediate}>Math Intermediate</Text>
        <Text style={styles.challengeOfThe}>{`Challenge of the day`}</Text>
        <Text style={styles.text}>59%</Text>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Fluentemojiflatfire
          style={[
            styles.fluentEmojiFlatfireIcon,
            styles.iphone16Pro45Child4Layout,
          ]}
          width={89}
          height={89}
        />
        <View style={styles.iphone16Pro45Child1} />
        <Text style={styles.streak14Days}>Streak: 14 days</Text>
        <Text style={styles.keepGoing}>Keep going!</Text>
        <Text style={[styles.rewardsAvailable, styles.rewardsAvailableTypo]}>
          Rewards available
        </Text>
        <Text style={[styles.numericalNinja, styles.mathWizardTypo]}>
          Num Ninja
        </Text>
        <Text style={[styles.mathWizard, styles.mathWizardTypo]}>
          Math Wizard
        </Text>
        <Text style={[styles.text1, styles.textLayout]}>50</Text>
        <Text style={[styles.text2, styles.textLayout]}>150</Text>
        <Image
          style={[styles.image19Icon, styles.image19IconLayout]}
          resizeMode="cover"
          source={require("../src/img/image 19.png")}
        />
        <Image
          style={styles.image20Icon}
          resizeMode="cover"
          source={require("../src/img/image 20.png")}
        />
        <Image
          style={styles.image21Icon}
          resizeMode="cover"
          source={require("../src/img/image 21.png")}
        />
        <Image
          style={styles.image22Icon}
          resizeMode="cover"
          source={require("../src/img/image 22.png")}
        />
        <Rectangle232
          style={[styles.iphone16Pro45Child2, styles.rectangleViewLayout]}
          width={163}
          height={186}
        />
        <View style={[styles.iphone16Pro45Child3, styles.image19IconLayout]} />
        <Text style={[styles.brainstorm, styles.minutesLayout]}>
          Brainstorm
        </Text>
        <Text style={[styles.minutes, styles.minutesLayout]}>5 minutes</Text>
        <Rectangle234
          style={[styles.iphone16Pro45Child4, styles.iphone16Pro45Child4Layout]}
          width={89}
          height={31}
        />
        <Text style={[styles.start, styles.tryTypo]}>Start</Text>
        <View
          style={[styles.iphone16Pro45Child5, styles.iphone16ChildLayout]}
        />
        <Text style={[styles.more, styles.tryTypo]}>More</Text>
        <Group style={[styles.groupIcon, styles.iconLayout1]} />
        <View style={[styles.iphone16Pro45Child6, styles.tryPosition]} />
        <Text style={[styles.try, styles.tryPosition]}>Try!</Text>
        <Text
          style={[styles.testYourLogicRiddles, styles.rewardsAvailableTypo]}
        >{`Test your logic!Riddles, puzzles, paradoxes and more`}</Text>
        <View style={styles.iphone16Pro45Child7} />
        <TouchableOpacity 
        style={styles.heartIcon} 
        onPress={() => router.push("/learnwithfriends")}
      >
        <Heart width={47} height={48}/>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.vuesaxboldhomeIcon} 
        onPress={() => {}}
      >
        <Vuesaxboldhome width={47} height={48} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.lisearchIcon} 
        onPress={() => router.push("/settingspage")}
      >
        <Lisearch width={45} height={41} />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.vuesaxlinearsetting2Icon, styles.iconLayout]} 
        onPress={() => router.push("/settingspage")}
      >
        <Vuesaxlinearsetting2 />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.vuesaxlinearprofileIcon, styles.iconLayout]} 
        onPress={() => router.push("/profile")}
      >
        <Vuesaxlinearprofile />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone16ShadowBox: {
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    borderColor: "#debbff",
    elevation: 23,
    shadowRadius: 23,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 26,
    shadowOpacity: 1,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 380,
    left: "50%",
    marginLeft: -189.5,
  },
  rectangleIconLayout: {
    height: 31,
    borderRadius: 17,
  },
  rectangleViewLayout: {
    borderRadius: 15,
    position: "absolute",
  },
  iphone16Pro45Child4Layout: {
    width: 89,
    position: "absolute",
  },
  rewardsAvailableTypo: {
    lineHeight: 20,
    fontSize: 20,
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  mathWizardTypo: {
    height: 17,
    fontSize: 18,
    left: 222,
    lineHeight: 15,
    color: "#fff",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  textLayout: {
    width: 32,
    height: 17,
    lineHeight: 15,
    color: "#fff",
    fontSize: 15,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  image19IconLayout: {
    height: 47,
    position: "absolute",
  },
  minutesLayout: {
    width: 116,
    fontSize: 20,
    height: 26,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: "#272727",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
    position: "absolute",
  },
  tryTypo: {
    textAlign: "center",
    color: "#000",
    fontSize: 15,
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
  },
  iphone16ChildLayout: {
    height: 35,
    width: 89,
    borderRadius: 17,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tryPosition: {
    top: 340,
    position: "absolute",
  },
  iconLayout: {
    bottom: "1.38%",
    top: "93.36%",
    height: "5.26%",
    width: "11.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  welcomeAgzam: {
    top: 53,
    left: 23,
    fontSize: 29,
    width: 281,
    height: 40,
    lineHeight: 38,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: "#272727",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  iphone16Pro45Child: {
    top: 106,
    width: 378,
    height: 123,
    left: "50%",
    marginLeft: -189.5,
    borderColor: "#debbff",
    elevation: 23,
    shadowRadius: 23,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  iphone16Pro45Item: {
    top: 252,
    backgroundColor: "#5a6fe4",
    height: 136,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    borderColor: "#debbff",
    elevation: 23,
    shadowRadius: 23,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 26,
    shadowOpacity: 1,
    position: "absolute",
  },
  iphone16Pro45Inner: {
    top: 111,
    left: 260,
    width: 110,
    height: 109,
    position: "absolute",
  },
  rectangleIcon: {
    top: 177,
    left: 50,
    position: "absolute",
  },
  continue: {
    top: 169,
    left: 68,
    width: 69,
    height: 55,
    justifyContent: "center",
    textAlign: "center",
    color: "#000",
    fontSize: 15,
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 45,
    position: "absolute",
  },
  mathIntermediate: {
    top: 134,
    left: 42,
    fontSize: 25,
    lineHeight: 28,
    width: 263,
    height: 50,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: "#272727",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  challengeOfThe: {
    top: 269,
    left: 28,
    width: 151,
    height: 77,
    lineHeight: 31,
    color: "#fff",
    fontSize: 30,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  text: {
    top: 145,
    left: 289,
    width: 60,
    height: 72,
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    color: "#000",
    alignItems: "center",
    display: "flex",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
    position: "absolute",
  },
  rectangleView: {
    top: 410,
    backgroundColor: "#ffe8b7",
    height: 90,
    width: 380,
    left: "50%",
    marginLeft: -189.5,
  },
  fluentEmojiFlatfireIcon: {
    top: 397,
    left: 295,
  },
  iphone16Pro45Child1: {
    top: 552,
    left: 208,
    backgroundColor: "#339624",
    width: 175,
    height: 192,
    borderRadius: 26,
    position: "absolute",
  },
  streak14Days: {
    top: 406,
    fontSize: 35,
    width: 291,
    left: 34,
    height: 77,
    lineHeight: 71,
    color: "#000",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  keepGoing: {
    top: 436,
    color: "#725d2f",
    fontSize: 20,
    width: 291,
    left: 34,
    height: 77,
    lineHeight: 81,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: "DoHyeon-Regular",
    position: "absolute",
  },
  rewardsAvailable: {
    top: 531,
    left: 198,
    color: "#010101",
    textAlign: "right",
    width: 176,
    height: 56,
  },
  numericalNinja: {
    top: 600,
    width: 92,
  },
  mathWizard: {
    top: 663,
    width: 99,
  },
  text1: {
    top: 642,
    left: 244,
  },
  text2: {
    top: 572,
    left: 246,
  },
  image19Icon: {
    top: 573,
    left: 326,
    width: 45,
  },
  image20Icon: {
    top: 568,
    left: 223,
    width: 19,
    height: 19,
    position: "absolute",
  },
  image21Icon: {
    top: 641,
    left: 224,
    width: 12,
    height: 18,
    position: "absolute",
  },
  image22Icon: {
    top: 637,
    left: 321,
    width: 50,
    height: 51,
    position: "absolute",
  },
  iphone16Pro45Child2: {
    top: 556,
    left: 18,
  },
  iphone16Pro45Child3: {
    top: 551,
    left: 17,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: "#ffdbc9",
    width: 164,
    borderWidth: 1,
    borderStyle: "solid",
    height: 47,
    backgroundColor: "#fff",
  },
  brainstorm: {
    top: 517,
    left: 25,
  },
  minutes: {
    top: 563,
    left: 34,
    width: 116,
  },
  iphone16Pro45Child4: {
    top: 696,
    left: 32,
    borderRadius: 17,
  },
  start: {
    top: 692,
    left: 60,
    position: "absolute",
  },
  iphone16Pro45Child5: {
    top: 693,
    backgroundColor: "#b4fea9",
    left: 222,
    height: 35,
    position: "absolute",
  },
  more: {
    top: 691,
    left: 250,
    position: "absolute",
  },
  groupIcon: {
    height: "12.65%",
    width: "29%",
    top: "31.52%",
    right: "10.38%",
    bottom: "55.83%",
    left: "60.61%",
  },
  iphone16Pro45Child6: {
    backgroundColor: "#ffe168",
    height: 35,
    width: 89,
    borderRadius: 17,
    left: 32,
  },
  try: {
    left: 64,
    textAlign: "center",
    color: "#000",
    fontSize: 15,
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
  },
  testYourLogicRiddles: {
    top: 613,
    width: 146,
    height: 127,
    left: 32,
    color: "#fff",
    textAlign: "left",
    flexWrap: "wrap",
  },
  iphone16Pro45Child7: {
    top: 779,
    backgroundColor: "#ededed",
    width: 390,
    height: 65,
    left: 0,
    position: "absolute",
  },
  heartIcon: {
    height: "5.21%",
    top: "93.48%",
    right: "64.19%",
    bottom: "1.3%",
    left: "24.3%",
    width: "11.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
  vuesaxboldhomeIcon: {
    top: 786,
    left: 172,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
  },
  lisearchIcon: {
    top: 790,
    left: 20,
    position: "absolute",
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
  vuesaxlinearprofileIcon: {
    right: "23.48%",
    left: "65.01%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  vuesaxlinearsetting2Icon: {
    right: "5.37%",
    left: "83.12%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  vectorIcon: {
    height: "0.71%",
    width: "0.95%",
    top: "96.68%",
    right: "49.06%",
    bottom: "2.61%",
    left: "49.99%",
  },
  iphone16Pro45: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    width: 391,
    backgroundColor: "#fff",
    shadowOpacity: 1,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    height: 844,
  },
  iphone131417: {
    backgroundColor: "#f6f4f4",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default IPhone1314;