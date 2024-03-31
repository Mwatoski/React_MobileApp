import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
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

  // No need for handleNavigateToHome as it navigates to the current screen

  return (
    <View style={styles.container}>
      {/* Main content of the home screen */}
      <Text style={styles.heading}>Utibu Health</Text>
      {/* Add your main content here */}
      {/* For demonstration, let's add a welcome message */}
      <Text style={styles.welcomeMessage}>Welcome to Utibu Health!</Text>

      {/* Bottom navigation icons */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.iconContainer}
        >
          <AntDesign name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Order")}
          style={styles.iconContainer}
        >
          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Statement")}
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    marginBottom: 40,
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0, // Ensure it starts from the left edge
    right: 0, // Ensure it ends at the right edge
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between", // Space out the icons evenly
    alignItems: "center",
    elevation: 8,
    paddingHorizontal: 20, // Add horizontal padding for space around icons
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    fontSize: 12,
    marginTop: 5,
  },
});
