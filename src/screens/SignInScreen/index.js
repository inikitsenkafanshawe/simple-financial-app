import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function SignInScreen({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (username === "admin" && password === "admin") {
      onSignIn();
    } else {
      Alert.alert("Authentication Error", "Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
