import React, { useState } from "react";
import {
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTransactions } from "../../context/TransactionContext";
import styles from "./styles";

const isEmpty = (value) => !value || !value.toString().trim();

const isValidDateFormat = (date) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) return false;

  const parsedDate = new Date(date);
  return !isNaN(parsedDate) && parsedDate.toISOString().split("T")[0] === date;
};

const isNumeric = (value) => {
  return !isNaN(value) && parseFloat(value).toString() === value.trim();
};

export default function AddTransactionScreen({ navigation }) {
  const { addTransaction } = useTransactions();

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Other");
  const [category, setCategory] = useState("Other");

  const handleSubmit = () => {
    // Check if all fields are filled
    if (
      isEmpty(date) ||
      isEmpty(amount) ||
      isEmpty(description) ||
      isEmpty(location) ||
      isEmpty(type) ||
      isEmpty(category)
    ) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    }

    // Validate amount is numeric
    if (!isNumeric(amount)) {
      Alert.alert("Validation Error", "Amount must be a valid number.");
      return;
    }

    // Validate date format
    if (!isValidDateFormat(date)) {
      Alert.alert("Validation Error", "Date must be in YYYY-MM-DD format.");
      return;
    }

    // Create a new transaction
    const newTransaction = {
      date,
      amount: parseFloat(amount),
      description,
      location,
      type,
      category,
    };

    addTransaction(newTransaction);
    navigation.goBack(); // Navigate back to Dashboard
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Amount (9.99)"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Description"
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Transaction Type:</Text>
        <Picker selectedValue={type} onValueChange={setType}>
          <Picker.Item label="Credit" value="Credit" />
          <Picker.Item label="Debit" value="Debit" />
          <Picker.Item label="Refund" value="Refund" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <Text style={styles.label}>Category:</Text>
        <Picker selectedValue={category} onValueChange={setCategory}>
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Utility" value="Utility" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
