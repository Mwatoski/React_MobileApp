import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function OrderMedicationScreen({ navigation }) {
  const [medication, setMedication] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");

  const handleOrder = () => {
    // Logic to handle the order submission
    // You can implement this based on your requirements
    // This function will navigate to the confirmation screen after order submission
    navigation.navigate("OrderConfirmation");
  };

  return (
    <View style={styles.container}>
      {/* Medication Selection */}
      <Text style={styles.label}>Medication:</Text>
      <TextInput
        style={styles.input}
        value={medication}
        onChangeText={(text) => setMedication(text)}
        placeholder="Enter medication name"
      />

      {/* Quantity */}
      <Text style={styles.label}>Quantity:</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        placeholder="Enter quantity"
        keyboardType="numeric"
      />

      {/* Additional Notes */}
      <Text style={styles.label}>Additional Notes:</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={notes}
        onChangeText={(text) => setNotes(text)}
        placeholder="Enter any additional notes"
        multiline
      />

      {/* Order Button */}
      <Button title="Place Order" onPress={handleOrder} />

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
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
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
});
