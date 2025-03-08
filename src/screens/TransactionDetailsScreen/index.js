import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

export default function TransactionDetailsScreen({ route }) {
  const { transaction } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{transaction.date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>${transaction.amount}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{transaction.description}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{transaction.location}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Transaction Type:</Text>
          <Text style={styles.value}>{transaction.type}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.value}>{transaction.category}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
