import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SignInScreen from "../screens/SignInScreen";
import DashboardScreen from "../screens/DashboardScreen";
import AddTransactionScreen from "../screens/AddTransactionScreen";
import TransactionDetailsScreen from "../screens/TransactionDetailsScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSignIn = () => {
    setIsAuthenticated(true);
  };

  const onSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerBackButtonDisplayMode: "minimal",
        headerStyle: {
          backgroundColor: "royalblue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="SignIn" options={{ title: "Sign In" }}>
          {(props) => <SignInScreen {...props} onSignIn={onSignIn} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              title: "Dashboard",
              headerRight: () => (
                <TouchableOpacity onPress={onSignOut}>
                  <FontAwesome5 name="sign-out-alt" size={24} color="white" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="AddTransaction" component={AddTransactionScreen} options={{ title: "Add Transaction" }} />
          <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} options={{ title: "Transaction Details" }} />
        </>
      )}
    </Stack.Navigator>
  );
}
