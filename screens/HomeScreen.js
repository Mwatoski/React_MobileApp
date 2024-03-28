// HomeScreen.js
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const handleNavigateToOrder = () => {
    // Navigate to the Order screen
    navigation.navigate("Order");
  };

  const handleNavigateToStatement = () => {
    // Navigate to the Statement screen
    navigation.navigate("Statement");
  };
  const handleNavigateToHome = () => {
    // Navigate to the Statement screen
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      {/* Main content of the home screen */}
      {/* Add your main content here */}

      {/* Bottom navigation icons */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          onPress={handleNavigateToHome}
          style={styles.iconContainer}
        >
          <AntDesign name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigateToOrder}
          style={styles.iconContainer}
        >
          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigateToStatement}
          style={styles.iconContainer}
        >
          <AntDesign name="filetext1" size={30} color="black" />
        </TouchableOpacity>
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
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff", // Change the background color as needed
    elevation: 8, // Add elevation for Android shadow effect
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
});
