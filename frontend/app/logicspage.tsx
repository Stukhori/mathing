import * as React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import Vuesaxlinearprofile from "../assets/profile.svg"
import Vuesaxlinearsetting2 from "../assets/setting-2.svg"
import Lisearch from "../assets/lisearch.svg"
import Vuesaxlinearhome from "../assets/homecommon.svg"
import Vuesaxlinearheart from "../assets/friendspage/heartbold.svg"
import { useRouter } from "expo-router";

const IPhone1314 = () => {
    const router = useRouter();

  	return (
    		<View style={styles.iphone131412}>
      			<View style={[styles.iphone16Pro44, styles.iphone16Position]}>
        				<View style={[styles.iphone16Pro44Child, styles.iphone16ChildLayout]} />
        				<View style={[styles.iphone16Pro44Item, styles.imageIcon4Layout]} />
        				<Text style={[styles.lessons, styles.lessonsTypo]}>
          					<Text style={styles.text}>{`15
`}</Text>
                    <Text style={styles.lessons1}>Lessons</Text>
                </Text>
                <Text style={[styles.diagrams, styles.riddlesTypo]}>Diagrams</Text>
                <View style={styles.iphone16Pro44Inner} />
                <View style={[styles.rectangleView, styles.imageIcon3Position]} />
                <Text style={[styles.lessons2, styles.lessonsTypo]}>
          					<Text style={styles.text1}>{`15
`}</Text>
                    <Text style={styles.lessons3}>Lessons</Text>
                </Text>
                <View style={[styles.iphone16Pro44Child1, styles.iphone16ChildPosition1]} />
                <Image style={[styles.imageIcon, styles.imageIconLayout]} resizeMode="cover" source={require("../src/img/logics/truthtable.png")} />
                <View style={[styles.iphone16Pro44Child2, styles.iphone16ChildPosition]} />
                <Text style={[styles.lessons4, styles.lessonsTypo]}>
          					<Text style={styles.text1}>{`18
`}</Text>
                    <Text style={styles.lessons3}>Lessons</Text>
                </Text>
                <Text style={[styles.puzzles, styles.puzzlesTypo]}>Puzzles</Text>
                <View style={[styles.iphone16Pro44Child3, styles.iphone16ChildPosition1]} />
                <Image style={[styles.imageIcon1, styles.imageIcon1Position]} resizeMode="cover" source={require("../src/img/logics/riddle.png")} />
                <View style={[styles.iphone16Pro44Child4, styles.imageIcon1Position]} />
                <Text style={[styles.lessons6, styles.lessonsPosition]}>
          					<Text style={styles.text1}>{`20
`}</Text>
                    <Text style={styles.lessons3}>Lessons</Text>
                </Text>
                <Text style={[styles.puzzles1, styles.puzzlesTypo]}>Puzzles</Text>
                <View style={[styles.iphone16Pro44Child5, styles.iphone16ChildPosition1]} />
                <Image style={[styles.imageIcon2, styles.imageIcon2Position]} resizeMode="cover" source={require("../src/img/logics/paradox.png")} />
                <View style={[styles.iphone16Pro44Child6, styles.imageIcon2Position]} />
                <Text style={[styles.lessons8, styles.lessonsPosition]}>
          					<Text style={styles.text1}>{`15
`}</Text>
                    <Text style={styles.lessons3}>Lessons</Text>
                </Text>
                <Text style={[styles.puzzles2, styles.puzzlesTypo]}>Puzzles</Text>
                <Text style={[styles.puzzles3, styles.riddlesTypo]}>Puzzles</Text>
                <Text style={[styles.truthTables, styles.riddlesTypo]}>Truth Tables</Text>
                <Text style={[styles.riddles, styles.riddlesTypo]}>Riddles</Text>
                <Text style={[styles.paradoxes, styles.riddlesTypo]}>Paradoxes</Text>
                <Image style={[styles.imageIcon3, styles.imageIconLayout]} resizeMode="cover" source={require("../src/img/logics/puzzle.png")} />
                <Image style={[styles.imageIcon4, styles.imageIconLayout]} resizeMode="cover" source={require("../src/img/logics/diagram.png")} />
                <View style={[styles.iphone16Pro44Child7, styles.iphone16ChildPosition1]} />
                <Text style={[styles.text5, styles.textFlexBox]}>←</Text>
                <View style={styles.iphone16Pro44Child8} />
                <Text style={[styles.logics, styles.textFlexBox]}>LOGICS</Text>
                <Text style={[styles.text6, styles.textFlexBox]}>←</Text>
                <View style={[styles.iphone16Pro44Child9, styles.iphone16Position]} />
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
        </View>);
};

const styles = StyleSheet.create({
    iphone16Position: {
        width: 390,
        left: 0,
        position: "absolute"
    },
    iphone16ChildLayout: {
        height: 85,
        width: 338,
        borderColor: "#d6bdf4",
        borderRadius: 12,
        elevation: 65,
        shadowRadius: 65,
        shadowOpacity: 1
    },
    imageIcon4Layout: {
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    lessonsTypo: {
        textAlign: "center",
        lineHeight: 27,
        fontFamily: "DoHyeon-Regular",
        position: "absolute"
    },
    riddlesTypo: {
        fontSize: 22,
        color: "#000",
        textAlign: "center",
        fontFamily: "DoHyeon-Regular",
        lineHeight: 27,
        position: "absolute"
    },
    imageIcon3Position: {
        top: 273,
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    iphone16ChildPosition1: {
        left: 29,
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: "#fff",
        position: "absolute"
    },
    imageIconLayout: {
        width: 68,
        left: 40
    },
    iphone16ChildPosition: {
        left: 279,
        width: 76,
        backgroundColor: "#efeeee"
    },
    puzzlesTypo: {
        fontFamily: "Rubik-Bold",
        fontWeight: "700",
        left: 116,
        color: "#fff",
        fontSize: 22,
        textAlign: "center",
        lineHeight: 27,
        position: "absolute"
    },
    imageIcon1Position: {
        top: 547,
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    lessonsPosition: {
        left: 291,
        color: "#000",
        textAlign: "center",
        fontFamily: "DoHyeon-Regular",
        lineHeight: 27,
        position: "absolute"
    },
    imageIcon2Position: {
        top: 677,
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    textFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        lineHeight: 38,
        textAlign: "center",
        position: "absolute"
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        bottom: "1.37%",
        width: "11.54%",
        position: "absolute",
        overflow: "hidden"
    },
    iconPosition: {
        width: 45,
        top: 791,
        position: "absolute"
    },
    iphone16Pro44Child: {
        top: 125,
        shadowColor: "rgba(40, 21, 51, 0)",
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: "#fff",
        left: 32,
        height: 85,
        width: 338,
        borderColor: "#d6bdf4",
        borderRadius: 12,
        elevation: 65,
        shadowRadius: 65,
        shadowOffset: {
            width: 0,
            height: 233
        },
        position: "absolute"
    },
    iphone16Pro44Item: {
        top: 135,
        width: 76,
        backgroundColor: "#efeeee",
        left: 282
    },
    text: {
        color: "#121212",
        fontSize: 21
    },
    lessons1: {
        color: "#000",
        fontSize: 15
    },
    lessons: {
        top: 140,
        left: 293,
        textAlign: "center",
        lineHeight: 27
    },
    diagrams: {
        top: 154,
        left: 129,
        fontSize: 22
    },
    iphone16Pro44Inner: {
        top: 265,
        shadowColor: "rgba(33, 21, 41, 0)",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
        borderWidth: 1,
        height: 85,
        width: 338,
        borderColor: "#d6bdf4",
        borderStyle: "solid",
        borderRadius: 12,
        elevation: 65,
        shadowRadius: 65,
        shadowOffset: {
            width: 0,
            height: 233
        },
        left: 32,
        shadowOpacity: 1,
        position: "absolute"
    },
    rectangleView: {
        width: 76,
        backgroundColor: "#efeeee",
        left: 282
    },
    text1: {
        fontSize: 21
    },
    lessons3: {
        fontSize: 15
    },
    lessons2: {
        top: 278,
        color: "#000",
        left: 293,
        textAlign: "center",
        lineHeight: 27
    },
    iphone16Pro44Child1: {
        top: 405,
        shadowColor: "rgba(65, 36, 71, 0)",
        height: 85,
        width: 338,
        borderColor: "#d6bdf4",
        borderRadius: 12,
        elevation: 65,
        shadowRadius: 65,
        shadowOpacity: 1,
        left: 29,
        shadowOffset: {
            width: 0,
            height: 233
        }
    },
    imageIcon: {
        top: 413,
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    iphone16Pro44Child2: {
        top: 413,
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    lessons4: {
        top: 418,
        left: 290,
        color: "#000"
    },
    puzzles: {
        top: 448,
        color: "#fff"
    },
    iphone16Pro44Child3: {
        top: 539,
        shadowColor: "rgba(37, 22, 39, 0)",
        height: 85,
        width: 338,
        borderColor: "#d6bdf4",
        borderRadius: 12,
        elevation: 65,
        shadowRadius: 65,
        shadowOpacity: 1,
        left: 29,
        shadowOffset: {
            width: 0,
            height: 233
        }
    },
    imageIcon1: {
        width: 68,
        left: 40
    },
    iphone16Pro44Child4: {
        left: 279,
        width: 76,
        backgroundColor: "#efeeee"
    },
    lessons6: {
        top: 554
    },
    puzzles1: {
        top: 574,
        color: "#fff"
    },
    iphone16Pro44Child5: {
        top: 669,
        shadowColor: "rgba(0, 0, 0, 0)",
        height: 85,
        width: 338,
        borderColor: "#d6bdf4",
        borderRadius: 12,
        elevation: 65,
        shadowRadius: 65,
        shadowOpacity: 1,
        left: 29
    },
    imageIcon2: {
        width: 68,
        left: 40
    },
    iphone16Pro44Child6: {
        left: 279,
        width: 76,
        backgroundColor: "#efeeee"
    },
    lessons8: {
        top: 687
    },
    puzzles2: {
        top: 702,
        color: "#fff"
    },
    puzzles3: {
        top: 291,
        left: 130
    },
    truthTables: {
        top: 431,
        left: 129,
        fontSize: 22
    },
    riddles: {
        top: 568,
        left: 129,
        fontSize: 22
    },
    paradoxes: {
        top: 698,
        left: 129,
        fontSize: 22
    },
    imageIcon3: {
        top: 273,
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    imageIcon4: {
        top: 134,
        height: 68,
        borderRadius: 16,
        position: "absolute"
    },
    iphone16Pro44Child7: {
        top: 34,
        borderRadius: 13,
        borderColor: "#000",
        width: 74,
        height: 38
    },
    text5: {
        top: -27,
        left: 17,
        fontSize: 65,
        fontWeight: "900",
        fontFamily: "Roboto-Black",
        width: 94,
        height: 161,
        color: "#000"
    },
    iphone16Pro44Child8: {
        top: 1,
        left: -2,
        backgroundColor: "#482678",
        width: 403,
        height: 83,
        position: "absolute"
    },
    logics: {
        marginLeft: -136,
        top: 35,
        left: "50%",
        fontSize: 25,
        width: 271,
        height: 37,
        color: "#fff",
        fontFamily: "DoHyeon-Regular",
        alignItems: "center",
        display: "flex",
        lineHeight: 38
    },
    text6: {
        top: 32,
        left: 5,
        fontSize: 50,
        fontFamily: "Inconsolata-Regular",
        width: 53,
        height: 38,
        color: "#fff"
    },
    iphone16Pro44Child9: {
        top: 780,
        backgroundColor: "#ededed",
        height: 65,
        width: 390,
        left: 0
    },
    vuesaxlinearprofileIcon: {
        right: "23.29%",
        left: "65.17%",
        top: "93.37%",
        height: "5.25%",
        maxWidth: "100%",
        bottom: "1.37%",
        width: "11.54%"
    },
    vuesaxlinearsetting2Icon: {
        right: "5.13%",
        left: "83.33%",
        top: "93.37%",
        height: "5.25%",
        maxWidth: "100%",
        bottom: "1.37%",
        width: "11.54%"
    },
    lisearchIcon: {
        left: 20,
        overflow: "hidden"
    },
    vuesaxlinearhomeIcon: {
        height: "5.03%",
        top: "93.6%",
        right: "43.93%",
        left: "44.53%",
        maxWidth: "100%",
        bottom: "1.37%",
        width: "11.54%"
    },
    vuesaxlinearheartIcon: {
        left: 92
    },
    iphone16Pro44: {
        top: -1,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: "#fdfcff",
        height: 845,
        shadowOpacity: 1,
        width: 390,
        left: 0,
        overflow: "hidden"
    },
    iphone131412: {
        backgroundColor: "#ffd6d6",
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden"
    }
});

export default IPhone1314;
