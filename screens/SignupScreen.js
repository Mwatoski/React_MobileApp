import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleSignup = async () => {
    if (!username || !password || !verifyPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== verifyPassword) {
      Alert.alert("Error", "Password and Verify Password must match.");
      return;
    }

    try {
      const response = await fetch("YOUR_SIGNUP_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      // Signup successful, navigate to login screen
      navigation.navigate("Login");
    } catch (error) {
      console.error("Signup error:", error);
      Alert.alert("Error", "Signup failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Utibu Health App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email or Phone Number"
          style={styles.input}
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
        <TextInput
          style={styles.input}
          placeholder="Verify Password"
          value={verifyPassword}
          onChangeText={setVerifyPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>
      <View style={styles.bottomNavigation}>
        <Text style={styles.text}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login</Text>
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
  heading: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 30,
    marginBottom: 40,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    width: "100%",
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  signupButton: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  signupButtonText: {
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
  loginLink: {
    color: "green",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
