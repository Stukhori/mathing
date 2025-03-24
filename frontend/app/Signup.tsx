import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Animated } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";


const Signup = () => {
  const { control, handleSubmit, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const shakeAnimation = new Animated.Value(0);
  const router = useRouter();

  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const onSubmit = async (data) => {
    if (!data.email.includes("@")) {
      setErrorMessage("Invalid email format");
      shake();
      return;
    }
    if (data.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      shake();
      return;
    }
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:4000/api/users/signup", data);
      const {token} = response.data;
      if (token) {
        await AsyncStorage.setItem("authToken", token);
      }
      router.push("/level-identifier");
      reset(); // Reset form fields after successful submission
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong");
      shake();
    }
  };

  return (
    <View style={[styles.iphone13143, styles.iphone13143ShadowBox]}>
      <View style={[styles.iphone16Pro37, styles.frame3Position]}>
        <Text style={[styles.mathing, styles.mathingFlexBox]}>Mathing</Text>

        <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="EMAIL ADDRESS"
                style={[styles.frame9, styles.emailAddress]}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </Animated.View>

        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="USERNAME"
              style={[styles.frame17, styles.frameBorder, styles.emailAddress]}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                secureTextEntry
                placeholder="PASSWORD"
                style={[styles.frame21, styles.frameBorder, styles.emailAddress]}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </Animated.View>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.createAccountButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={[styles.byContinuingYou, styles.mathingFlexBox]}>
          By continuing, you agree to our terms of service and privacy policy
        </Text>

        <Text style={[styles.alreadyHaveAnContainer, styles.alreadyText]}>
          <Text style={styles.alreadyHaveAn1}>ALREADY HAVE AN ACCOUNT? </Text>
          <Text style={styles.logIn}>LOG IN</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 5,
  },
  createAccountButton: {
    backgroundColor: "#6637a1",
    borderRadius: 12,
    paddingVertical: 15,
    width: 330,
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: 556,
    left: "50%",
    marginLeft: -165,
  },
  createAccountText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  iphone13143ShadowBox: {
    height: 844,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frame3Position: {
    top: 0,
    overflow: "hidden",
  },
  alreadyText: {
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    position: "absolute",
  },
  frameLayout1: {
    width: 330,
    position: "absolute",
  },
  createAccountText1: {
    color: "#f8f9fa",
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    position: "absolute",
  },
  firstNamePosition: {
    left: 15,
    top: 15,

    position: "absolute",
  },
  frameLayout: {
    width: 221,
    position: "absolute",
    overflow: "hidden",
  },
  mathingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  frameBorder: {
    borderColor: "#a377da",
    left: 30,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    width: 330,
    borderRadius: 12,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  alreadyHaveAn: {
    top: 24,
    left: 39,
    color: "#000",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 15,
  },
  frame: {
    top: 703,
    left: 159,
    width: 100,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    backgroundColor: "#6637a1",
    borderColor: "#6337a1",
    height: 48,
    borderWidth: 2,
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    width: 330,
    borderRadius: 12,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  createAccount: {
    marginTop: -9,
    marginLeft: -69,
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
    top: "50%",
    left: "50%",
  },
  frame3: {
    height: 48,
    left: "50%",
    marginLeft: -165,
    top: 0,
    overflow: "hidden",
  },
  frame1: {
    top: 606,
    height: 61,
    borderRadius: 12,
    width: 330,
    left: "50%",
    marginLeft: -165,
  },
  firstName: {
    color: "rgba(124, 129, 135, 0.49)",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
  frameBorder1: {
    backgroundColor: "#007bff",
    borderColor: "#0726af",
    height: 48,
    borderWidth: 2,
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    width: 330,
    borderRadius: 12,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  startLearning: {
    top: 2,
    left: 43,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 15,
  },
  frame7: {
    top: 14,
    left: 55,
    height: 21,
  },
  frame5: {
    top: -82,
    height: 50,
    borderRadius: 12,
    width: 330,
    left: 0,
  },
  frame4: {
    top: -198,
    left: 146,
    backgroundColor: "rgba(0, 123, 255, 0.2)",
    width: 370,
    borderColor: "#0726af",
    height: 48,
    borderWidth: 2,
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    borderRadius: 12,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  frame8: {
    top: -304,
    left: 229,
    height: 20,
  },
  creationOfProfile: {
    marginLeft: -62,
    top: -265,
    fontSize: 32,
    fontFamily: "JockeyOne-Regular",
    color: "#09090a",
    height: 23,
    width: 370,
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  alreadyHaveAn1: {
    color: "#000",
  },
  logIn: {
    color: "#007bff",
  },
  alreadyHaveAnContainer: {
    marginLeft: -167,
    top: 775,
    fontSize: 20,
    fontFamily: "DoHyeon-Regular",
    left: "50%",
  },
  byContinuingYou: {
    marginLeft: -158,
    top: 622,
    lineHeight: 22,
    fontFamily: "Roboto",
    width: 306,
    height: 49,
    color: "#000",
    fontSize: 15,
  },
  mathing: {
    top: 100, // Ensures it's in view
    left: "50%",
    transform: [{ translateX: -171 }], // Centers it properly
    fontSize: 75,
    lineHeight: 80, // Ensures proper spacing
    color: "#b875ff",
    width: 342, // Matches the width to ensure proper centering
    height: 80, // Adjusted for full visibility
    fontFamily: "DoHyeon-Regular",
    textAlign: "center",
    position: "absolute",
  },
  emailAddress: {
    color: "#5e5555",
    fontFamily: "DoHyeon-Regular",
    textAlign: "left",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 15,
    paddingLeft: 15,
  },
  frame9: {
    top: 285,
    borderColor: "#ae88de",
    borderWidth: 1,
    backgroundColor: "#fff",
    height: 48,
    borderStyle: "solid",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#e5e5e5",
    width: 330,
    borderRadius: 12,
    left: "50%",
    marginLeft: -165,
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
  },
  frame13: {
    top: 351,
    height: 44,
  },
  frame17: {
    top: 351,
    height: 48,
  },
  icon: {
    height: "38.13%",
    width: "6.7%",
    top: "31.25%",
    right: "7.36%",
    bottom: "30.63%",
    left: "85.95%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame21: {
    top: 413,
    height: 48,
  },
  iphone16Pro37: {
    backgroundColor: "#fdfcff",
    width: 390,
    left: 0,
    position: "absolute",
    height: 844,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iphone13143: {
    backgroundColor: "#ef8e8e",
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default Signup;
