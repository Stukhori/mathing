import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import Rectangle179 from "../assets/rectangle-179.svg"
import Group86 from "../assets/group-86.svg"
import Vuesaxlinearheart from "../assets/vuesaxlinearheart.svg"

const IPhone1314 = () => {
  	
  	return (
    		<View style={styles.iphone131428}>
      			<View style={[styles.iphone16Pro45, styles.groupIconPosition]}>
        				<View style={styles.iphone16Pro45Child} />
        				<Text style={[styles.challengeOfThe, styles.diagramsLayout]}>Challenge of the day</Text>
        				<Text style={[styles.categories, styles.searchTypo]}>Categories</Text>
        				<View style={styles.iphone16Pro45Item} />
        				<View style={[styles.iphone16Pro45Inner, styles.rectangleViewLayout]} />
        				<Text style={styles.treeDiagram}>{`Tree
          					diagram`}</Text>
        				<Text style={[styles.barChart, styles.barChartTypo]}>{`Bar
chart
`}</Text>
                <Text style={[styles.search, styles.searchTypo]}>Search</Text>
                <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
                <View style={[styles.iphone16Pro45Child1, styles.iphone16ChildLayout1]} />
                <View style={[styles.iphone16Pro45Child2, styles.iphone16ChildLayout]} />
                <View style={[styles.iphone16Pro45Child3, styles.iphone16ChildShadowBox]} />
                <Text style={[styles.viewAll, styles.viewAllFlexBox]}>View all</Text>
        				<Text style={[styles.vennDiagram, styles.barChartTypo]}>{`Venn
        				diagram`}</Text>
                <Image style={styles.image2Icon} resizeMode="cover" source="image 2.png" />
                <Text style={[styles.advanced, styles.masterTypo]}>Advanced</Text>
                <Text style={[styles.master, styles.masterTypo]}>Master</Text>
                <Text style={[styles.beginner, styles.beginnerTypo]}>Beginner</Text>
                <Image style={[styles.image4Icon, styles.image4IconLayout]} resizeMode="cover" source="image 4.png" />
                <Text style={[styles.minutes, styles.minutesTypo1]}>12 minutes</Text>
                <Image style={[styles.image4Icon1, styles.image4IconLayout]} resizeMode="cover" source="image 4.png" />
                <Text style={[styles.minutes1, styles.minutesTypo1]}>10 minutes</Text>
                <View style={[styles.iphone16Pro45Child4, styles.iphone16ChildShadowBox]} />
                <Image style={[styles.image4Icon2, styles.image4IconPosition]} resizeMode="cover" source="image 4.png" />
                <Text style={[styles.minutes2, styles.minutesTypo]}>8 minutes</Text>
                <Text style={[styles.intermediate, styles.beginnerTypo]}>Intermediate</Text>
                <Image style={[styles.image4Icon3, styles.image4IconPosition]} resizeMode="cover" source="image 4.png" />
                <Text style={[styles.minutes3, styles.minutesTypo]}>10 minutes</Text>
                <Rectangle179 style={styles.rectangleIcon} width={401} height={97} />
                <Text style={[styles.diagrams, styles.textFlexBox]}>Diagrams</Text>
                <Text style={[styles.text, styles.textFlexBox]}>←</Text>
                <Image style={styles.image10Icon} resizeMode="cover" source="image 10.png" />
                <Image style={styles.image10Icon1} resizeMode="cover" source="image 10.png" />
                <Group86 style={[styles.groupIcon, styles.groupIconPosition]} width={390} height={65} />
                <Vuesaxlinearheart style={styles.vuesaxlinearheartIcon} />
            </View>
        </View>);
};

const styles = StyleSheet.create({
    groupIconPosition: {
        width: 390,
        left: 0,
        position: "absolute"
    },
    diagramsLayout: {
        height: 60,
        width: 271
    },
    searchTypo: {
        fontSize: 28,
        fontFamily: "DoHyeon-Regular",
        left: 29,
        textAlign: "center",
        color: "#000",
        lineHeight: 38,
        position: "absolute"
    },
    rectangleViewLayout: {
        width: 107,
        height: 70,
        borderRadius: 20,
        top: 186,
        position: "absolute"
    },
    barChartTypo: {
        width: 105,
        top: 208,
        textAlign: "left",
        lineHeight: 15,
        fontSize: 16,
        fontFamily: "DoHyeon-Regular",
        alignItems: "center",
        display: "flex",
        position: "absolute"
    },
    iphone16ChildLayout1: {
        height: 170,
        shadowOffset: {
            width: 0,
            height: 117
        },
        top: 353
    },
    iphone16ChildLayout: {
        height: 169,
        top: 557
    },
    iphone16ChildShadowBox: {
        left: 218,
        width: 151,
        elevation: 33,
        shadowRadius: 33,
        shadowColor: "rgba(0, 0, 0, 0)",
        borderRadius: 15,
        shadowOpacity: 1,
        position: "absolute"
    },
    viewAllFlexBox: {
        textAlign: "center",
        lineHeight: 38,
        color: "#000",
        position: "absolute"
    },
    masterTypo: {
        fontSize: 20,
        fontFamily: "DoHyeon-Regular",
        textAlign: "center",
        color: "#000",
        lineHeight: 38,
        position: "absolute"
    },
    beginnerTypo: {
        top: 377,
        fontSize: 20,
        fontFamily: "DoHyeon-Regular",
        textAlign: "center",
        color: "#000",
        lineHeight: 38,
        position: "absolute"
    },
    image4IconLayout: {
        width: 38,
        height: 38,
        position: "absolute"
    },
    minutesTypo1: {
        fontSize: 16,
        fontFamily: "DoHyeon-Regular",
        textAlign: "center",
        color: "#000",
        lineHeight: 38,
        position: "absolute"
    },
    image4IconPosition: {
        top: 421,
        height: 38,
        width: 38,
        position: "absolute"
    },
    minutesTypo: {
        top: 457,
        fontSize: 16,
        fontFamily: "DoHyeon-Regular",
        textAlign: "center",
        color: "#000",
        lineHeight: 38,
        position: "absolute"
    },
    textFlexBox: {
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        lineHeight: 38,
        position: "absolute"
    },
    iphone16Pro45Child: {
        top: 181,
        left: 467,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        width: 229,
        height: 45,
        borderRadius: 15,
        position: "absolute"
    },
    challengeOfThe: {
        top: 127,
        left: 454,
        fontSize: 19,
        fontFamily: "Jomolhari-Regular",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        lineHeight: 38,
        color: "#000",
        position: "absolute"
    },
    categories: {
        top: 292,
        fontFamily: "DoHyeon-Regular"
    },
    iphone16Pro45Item: {
        left: 146,
        backgroundColor: "rgba(239, 238, 238, 0.93)",
        width: 106,
        height: 70,
        borderRadius: 20,
        top: 186,
        position: "absolute"
    },
    iphone16Pro45Inner: {
        left: 262,
        backgroundColor: "#efeeee"
    },
    treeDiagram: {
        top: 211,
        left: 155,
        width: 100,
        height: 22,
        textAlign: "left",
        lineHeight: 15,
        fontSize: 16,
        fontFamily: "DoHyeon-Regular",
        alignItems: "center",
        display: "flex",
        color: "#000",
        position: "absolute"
    },
    barChart: {
        left: 272,
        color: "#000",
        width: 105,
        top: 208
    },
    search: {
        top: 135,
        fontFamily: "DoHyeon-Regular"
    },
    rectangleView: {
        backgroundColor: "#f9d4b7",
        left: 29
    },
    iphone16Pro45Child1: {
        backgroundColor: "#d0e7f9",
        width: 151,
        elevation: 33,
        shadowRadius: 33,
        shadowColor: "rgba(0, 0, 0, 0)",
        borderRadius: 15,
        shadowOpacity: 1,
        position: "absolute",
        left: 29
    },
    iphone16Pro45Child2: {
        left: 31,
        backgroundColor: "#fd9bff",
        width: 151,
        elevation: 33,
        shadowRadius: 33,
        shadowColor: "rgba(0, 0, 0, 0)",
        borderRadius: 15,
        shadowOpacity: 1,
        position: "absolute"
    },
    iphone16Pro45Child3: {
        backgroundColor: "#f7ce77",
        height: 169,
        top: 557
    },
    viewAll: {
        top: 150,
        left: 301,
        fontSize: 21,
        fontFamily: "DoHyeon-Regular"
    },
    vennDiagram: {
        left: 39,
        color: "#060505"
    },
    image2Icon: {
        top: 199,
        left: 322,
        width: 43,
        height: 43,
        position: "absolute"
    },
    advanced: {
        top: 561,
        left: 52,
        width: 109,
        height: 76,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    master: {
        top: 584,
        left: 266
    },
    beginner: {
        left: 66
    },
    image4Icon: {
        top: 626,
        height: 38,
        left: 272
    },
    minutes: {
        top: 664,
        left: 255
    },
    image4Icon1: {
        top: 624,
        left: 86,
        height: 38
    },
    minutes1: {
        top: 660,
        left: 69
    },
    iphone16Pro45Child4: {
        backgroundColor: "#71e060",
        height: 170,
        shadowOffset: {
            width: 0,
            height: 117
        },
        top: 353
    },
    image4Icon2: {
        left: 85
    },
    minutes2: {
        left: 69
    },
    intermediate: {
        left: 241
    },
    image4Icon3: {
        left: 276
    },
    minutes3: {
        left: 257
    },
    rectangleIcon: {
        left: 0,
        top: 0,
        position: "absolute"
    },
    diagrams: {
        marginLeft: -138,
        top: 47,
        left: "50%",
        fontSize: 25,
        fontFamily: "DoHyeon-Regular",
        height: 60,
        width: 271
    },
    text: {
        top: 54,
        left: 4,
        fontSize: 50,
        fontFamily: "Inconsolata-Regular",
        width: 53,
        height: 38
    },
    image10Icon: {
        left: 87,
        width: 39,
        height: 39,
        top: 186,
        position: "absolute"
    },
    image10Icon1: {
        top: 204,
        left: 214,
        width: 30,
        height: 30,
        position: "absolute"
    },
    groupIcon: {
        top: 783
    },
    vuesaxlinearheartIcon: {
        height: "5.19%",
        width: "11.54%",
        top: "93.63%",
        right: "63.59%",
        bottom: "1.18%",
        left: "24.87%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    iphone16Pro45: {
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: "#fdfcff",
        height: 848,
        shadowOpacity: 1,
        width: 390,
        top: 0,
        overflow: "hidden"
    },
    iphone131428: {
        backgroundColor: "#f1aeae",
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden"
    }
});

export default IPhone1314;