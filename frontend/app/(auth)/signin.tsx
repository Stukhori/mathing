import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../src/api/client";
import { useRouter } from "expo-router";
import Image32lww from "../../assets/image--32lww.svg";

const IPhone1314 = () => {
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await api.post(
        "/users/login",
        data
      );
      const { token } = response.data;
      if (token) {
        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userId", response.data.user.id);
      }
      router.push("/home");
      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.error || "Something went wrong");
    }
  };

  return (
    <View style={styles.iphone13145}>
      <Text style={[styles.signIn, styles.orFlexBox]}>Sign in</Text>
      <Text style={[styles.forgotYourPassword, styles.signIn1Typo]}>
        Forgot your password?
      </Text>

      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="EMAIL ADDRESS"
            style={[styles.frame7, styles.emailAddress]}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry
            placeholder="PASSWORD"
            style={[styles.password, styles.frame7, styles.passwordTypo]}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity style={styles.frame1} onPress={handleSubmit(onSubmit)}>
        <View style={[styles.frame2, styles.frameLayout]} />
        <View style={[styles.frame3, styles.framePosition]}>
          <Text style={[styles.signIn1, styles.signIn1Position]}>Sign in</Text>
        </View>
      </TouchableOpacity>

      <Text style={[styles.or, styles.orFlexBox]}>or</Text>
      <View style={styles.iphone13145Child} />
      <View style={styles.iphone13145Item} />

      <View style={[styles.frame4, styles.frameLayout]}>
        <Image32lww
          style={[styles.image32lwwIcon, styles.iconPosition]}
          width={34}
          height={34}
        />
        <View style={[styles.frame5, styles.frame5Position]}>
          <Text style={styles.signInWith}>Sign in with google</Text>
        </View>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.mathing, styles.frame5Position]}>Mathing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 5,
  },
  orFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  signIn1Typo: {
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
    left: "50%",
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  passwordTypo: {
    color: "#5e5555",
    lineHeight: 18,
    letterSpacing: 1,
    top: 438,
    fontSize: 15,
    position: "absolute",
  },
  frameLayout: {
    borderWidth: 2,
    width: 330,
    height: 48,
    borderStyle: "solid",
    borderRadius: 12,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    top: 14,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  signIn1Position: {
    color: "#f8f9fa",
    top: 2,
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    position: "absolute",
  },
  frame5Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iphone13145Position: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#514880",
    backgroundColor: "rgba(79, 69, 127, 0.99)",
    top: 679,
    borderStyle: "solid",
    position: "absolute",
  },
  signIn: {
    marginLeft: -163,
    top: 328,
    fontSize: 29,
    color: "#5d219c",
    width: 84,
    fontFamily: "DoHyeon-Regular",
    lineHeight: 38,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
    left: "50%",
  },
  forgotYourPassword: {
    marginLeft: -9,
    top: 344,
    color: "#1da1f2",
    width: 175,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  password: {
    paddingLeft: 15,
    position: "absolute",
    left: 31,
    fontFamily: "DoHyeon-Regular",
  },
  frame: {
    top: 438,
    backgroundColor: "rgba(255, 255, 255, 0.49)",
    borderColor: "#bca0de",
    width: 329,
    height: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    left: 31,
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    backgroundColor: "#6637a1",
    borderColor: "#6637a1",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#e5e5e5",
    borderWidth: 2,
    left: 0,
    top: 0,
  },
  signIn1: {
    marginLeft: -28.5,
    fontSize: 17,
    fontFamily: "DoHyeon-Regular",
    left: "50%",
  },
  frame3: {
    marginLeft: -65,
    width: 129,
    height: 21,
    left: "50%",
  },
  frame1: {
    top: 507,
    left: 32,
    height: 50,
    width: 330,
    borderRadius: 12,
    position: "absolute",
  },
  or: {
    marginLeft: -17,
    top: 664,
    fontSize: 20,
    fontFamily: "Dosis-Regular",
    color: "rgba(79, 69, 127, 0.99)",
    width: 32,
    height: 25,
    lineHeight: 28,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
    left: "50%",
  },
  image32lwwIcon: {
    top: 6,
    left: 9,
  },
  signInWith: {
    marginLeft: -76,
    color: "#010911",
    top: 0,
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: "DoHyeon-Regular",
    left: "50%",
    position: "absolute",
  },
  frame5: {
    marginTop: -7,
    marginLeft: -118,
    width: 236,
    height: 21,
    overflow: "hidden",
  },
  frame4: {
    top: 717,
    borderColor: "#d6bdf4",
    left: 31,
    backgroundColor: "#fff",
  },
  iphone13145Child: {
    left: 233,
    width: 122,
  },
  iphone13145Item: {
    width: 125,
    left: 31,
  },
  mathing: {
    marginTop: -257,
    marginLeft: -171,
    fontSize: 75,
    lineHeight: 65,
    color: "#b875ff",
    width: 342,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: "DoHyeon-Regular",
  },
  emailAddress: {
    left: 31,
    paddingLeft: 15,
    fontFamily: "DoHyeon-Regular",
  },
  frame9: {
    backgroundColor: "#007bff",
    borderColor: "#0726af",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#e5e5e5",
    borderWidth: 2,
    left: 0,
    top: 0,
  },
  frame10: {
    left: 55,
    width: 221,
    height: 21,
  },
  frame8: {
    top: -82,
    left: 0,
    height: 50,
    width: 330,
    borderRadius: 12,
    position: "absolute",
  },
  frame7: {
    top: 376,
    borderColor: "#a377da",
    width: 330,
    height: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  iphone13145: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  signupContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 780, // Adjust this value based on your layout needs
    left: '50%',
    marginLeft: -110, // Half of total width to center
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#514880',
    fontFamily: 'DoHyeon-Regular',
    fontSize: 16,
  },
  signupLink: {
    color: '#1da1f2',
    fontFamily: 'DoHyeon-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  }
});

export default IPhone1314;
