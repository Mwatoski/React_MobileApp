import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function StatementScreen({ navigation }) {
  // Dummy data for demonstration
  const orders = [
    { id: 1, medication: "Medication A", quantity: 2, date: "2024-03-01" },
    { id: 2, medication: "Medication B", quantity: 3, date: "2024-03-05" },
    { id: 3, medication: "Medication C", quantity: 1, date: "2024-03-10" },
  ];

  const handleNavigateToOrder = () => {
    navigation.navigate("Order");
  };

  const handleNavigateToStatement = () => {
    navigation.navigate("Statement");
  };

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* Statement Header */}
      <Text style={styles.heading}>Order History</Text>

      {/* List of Orders */}
      <View style={styles.orderList}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderItem}>
            <Text style={styles.orderItemText}>
              {order.medication} - Qty: {order.quantity}
            </Text>
            <Text style={styles.orderItemText}>Date: {order.date}</Text>
          </View>
        ))}
      </View>

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
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderList: {
    marginBottom: 20,
  },
  orderItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  orderItemText: {
    fontSize: 16,
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
