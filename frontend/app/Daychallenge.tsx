import * as React from "react";
import { Modal, ActivityIndicator } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { getCurrentUserId } from "../src/utils/auth";
import api from "../src/api/client";

const IPhone1314 = () => {
  const dailyQuestion = `Agzam wants to go on a vacation to Vietnam, the trip costs $1,200. She plans to save money every month for a year. In the first month, she saves $50, and each subsequent month, she increases her savings by $10. Will she have enough money by the end of the year to afford the trip?`;
  const router = useRouter();
  const [answerText, setAnswerText] = React.useState(""); // State to store the answer
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const taskId = 1;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [result, setResult] = React.useState<{
    isCorrect: boolean;
    feedback: string;
  } | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setModalVisible(true); // Show modal when submitting

    const userId = await getCurrentUserId(); // Get the user ID from AsyncStorage
    if (!userId) {
      Alert.alert("Error", "You need to be logged in to submit answers");
      router.push("/signin"); // Redirect to login if userId is not found
      return;
    }

    console.log("Submitting answer:", answerText);

    const data = {
      submittedAnswer: answerText,
      userId: userId,
      taskId: taskId,
    };

    try {
      const response = await api.post("/tasks/submit-task", data);
      const { result } = response.data;
      if (result) {
        console.log(result);
      } else {
        console.log("No result found");
      }

      console.log(response.data.result.isCorrect);
      console.log(response.data.result.feedback);

      setResult({
        isCorrect: response.data.result.isCorrect,
        feedback: response.data.result.feedback,
      });
    } catch (error) {
      console.log(error);

      setResult({
        isCorrect: false,
        feedback: error.response?.data?.message || "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.iphone131413}>
      <View style={[styles.purpleback, styles.toppurple]} />
      <View style={[styles.iphone131413Item, styles.toppurple]} />
      <Text style={[styles.challengeOfThe, styles.textFlexBox]}>
        Challenge of the day
      </Text>

      <TouchableOpacity
        style={[styles.arrowButton, styles.textFlexBox]}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.arrowtext}>←</Text>
      </TouchableOpacity>

      <Text style={[styles.questiontext, styles.continueClr]}>
        {dailyQuestion}
      </Text>

      {/* Replaced View with TextInput */}
      <TextInput
        style={[styles.answerInput, styles.rectangleViewPosition]}
        multiline={true}
        numberOfLines={8}
        placeholder="Type your answer here..."
        placeholderTextColor="#999"
        value={answerText}
        onChangeText={setAnswerText}
      />

      <Text style={[styles.yourAnswer, styles.continueClr]}>Your answer:</Text>

      <TouchableOpacity
        style={[styles.continuebutton, styles.continuePosition]}
        onPress={handleSubmit}
      >
        <Text style={styles.continue}>Continue</Text>
      </TouchableOpacity>

      <View style={[styles.hintbutton, styles.hintandhelpbuttons]} />
      <Text style={[styles.hint, styles.hintTypo]}>Hint!</Text>
      <Image
        style={[styles.roboticon, styles.continuePosition]}
        resizeMode="cover"
        source={require("../src/img/robot.png")}
      />
      <View style={[styles.helpbutton, styles.hintandhelpbuttons]} />
      <Text style={[styles.needHelp, styles.hintTypo]}>Need help?</Text>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {isSubmitting ? (
              <>
                <ActivityIndicator size="large" color="#6637a1" />
                <Text style={styles.modalText}>Checking your answer...</Text>
              </>
            ) : result ? (
              <>
                <Text
                  style={[
                    styles.resultTitle,
                    { color: result.isCorrect ? "#4CAF50" : "#F44336" },
                  ]}
                >
                  {result.isCorrect ? "Correct! 🎉" : "Incorrect 😕"}
                </Text>
                <Text style={styles.feedbackText}>{result.feedback}</Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    setModalVisible(false);
                    setResult(null);
                    if (result.isCorrect) {
                      router.push("/home"); // Navigate on success if desired
                    }
                  }}
                >
                  <Text style={styles.modalButtonText}>
                    {result.isCorrect ? "Continue" : "Try Again"}
                  </Text>
                </TouchableOpacity>
              </>
            ) : null}
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#999",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  feedbackText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  modalButton: {
    backgroundColor: "#6637a1",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 2,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  arrowButton: {
    top: -4,
    left: 7,
    width: 53,
    height: 38,
    position: "absolute",
  },
  toppurple: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  rectangleViewPosition: {
    left: "50%",
    position: "absolute",
  },
  continueClr: {
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
  },
  continuePosition: {
    top: 700,
    position: "absolute",
  },
  hintandhelpbuttons: {
    height: 42,
    width: 120,
    backgroundColor: "#6637a1",
    borderRadius: 20,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 774,
    position: "absolute",
  },
  hintTypo: {
    top: 775,
    fontSize: 17,
    textAlign: "center",
    color: "#fff",
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
    position: "absolute",
  },
  purpleback: {
    backgroundColor: "#552d8e",
    height: 379,
  },
  iphone131413Item: {
    backgroundColor: "#875fc0",
    height: 116,
  },
  challengeOfThe: {
    marginLeft: -129,
    top: 57,
    fontSize: 23,
    width: 271,
    height: 60,
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    display: "flex",
    lineHeight: 38,
    position: "absolute",
    fontFamily: "DoHyeon-Regular",
    left: "50%",
  },
  arrowtext: {
    top: 64,
    left: 7,
    fontSize: 50,
    fontFamily: "Inconsolata-Regular",
    width: 53,
    height: 38,
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    display: "flex",
    lineHeight: 48,
    position: "absolute",
  },
  questionrectangle: {
    marginLeft: -164,
    top: 134,
    borderRadius: 20, // Optional: rounder corners
    width: 280, // Increased size
    height: 90, // Increased height
    position: "absolute",
    backgroundColor: "#fff", // Ensure it's visible
    zIndex: 0, // Make sure it stays behind the text
  },
  questiontext: {
    marginLeft: -145,
    top: 156,
    lineHeight: 20,
    textAlign: "left",
    width: 291,
    height: 186,
    fontSize: 20,
    color: "#fff",
    alignItems: "center",
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  answerrectangle: {
    marginLeft: -166,
    top: 461,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b786f1",
    borderWidth: 2,
    width: 333,
    height: 188,
    borderRadius: 15,
  },
  yourAnswer: {
    top: 422,
    left: 40,
    fontSize: 21,
    lineHeight: 17,
    width: 143,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: "#000",
    position: "absolute",
  },
  // Replace answerrectangle with answerInput
  answerInput: {
    marginLeft: -166,
    top: 461,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b786f1",
    borderWidth: 2,
    width: 333,
    height: 188,
    borderRadius: 15,
    padding: 15,
    textAlignVertical: "top", // Align text to top (like textarea)
    fontSize: 16,
    color: "#000",
  },

  continuebutton: {
    backgroundColor: "#efb22e",
    width: 193,
    height: 41,
    left: 31,
    borderRadius: 15,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    top: 700,
    position: "absolute",
  },
  continue: {
    fontSize: 20,
    color: "#000",
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    lineHeight: 38,
  },
  hintbutton: {
    left: 31,
  },
  hint: {
    left: 69,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  roboticon: {
    left: 287,
    width: 66,
    height: 62,
  },
  helpbutton: {
    left: 227,
  },
  needHelp: {
    left: 249,
  },
  iphone131413: {
    backgroundColor: "#fdfcff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;
