// SignupScreen.js
import React, { useState } from "react";
import {
  View,
  Alert,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function LoginScreens({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please Fill in all fields.");
      return;
    }
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Utibu Health App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginbuttonText}>Signup</Text>
      </TouchableOpacity>
      <View style={styles.bottomNavigation}>
        <Text style={styles.text}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}>SignUp</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "80%",
  },
  heading: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 30,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomNavigation: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  signupLink: {
    color: "green",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
