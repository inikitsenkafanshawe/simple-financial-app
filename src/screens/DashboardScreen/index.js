import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useTransactions } from "../../context/TransactionContext";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import styles from "./styles";

export default function DashboardScreen({ navigation }) {
  const { transactions } = useTransactions();

  const handleTransactionDetails = (transaction) => {
    navigation.navigate("TransactionDetails", { transaction });
  };

  const handleAddTransaction = () => {
    navigation.navigate("AddTransaction");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleTransactionDetails(item)}
            style={styles.transactionContainer}
          >
            <View style={styles.transactionHeader}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.amount}>
                ${parseFloat(item.amount).toFixed(2)}
              </Text>
            </View>

            <View style={styles.transactionMeta}>
              <Text style={styles.metaText}>
                {item.category} • {item.location}
              </Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text
            style={{ fontSize: 16, fontStyle: "italic", textAlign: "center" }}
          >
            Start to add transactions
          </Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={<View style={{ marginBottom: 80 }} />}
      />
      <TouchableOpacity style={styles.fab} onPress={handleAddTransaction}>
        <FontAwesome5 name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
