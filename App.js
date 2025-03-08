import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TransactionProvider } from "./src/context/TransactionContext";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </TransactionProvider>
  );
}
