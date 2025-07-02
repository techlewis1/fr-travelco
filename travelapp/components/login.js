import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "./layout/ThemeProvider";

export default function Login() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    // Add actual login logic here
    Alert.alert("Success", "Logged in successfully!");
    navigation.navigate("Home");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Welcome Back</Text>

      <TextInput
        style={[
          styles.input,
          {
            borderColor: theme.buttonColor,
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          },
        ]}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[
          styles.input,
          {
            borderColor: theme.buttonColor,
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          },
        ]}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: theme.buttonColor }]}
        onPress={handleLogin}
      >
        <Text style={[styles.loginButtonText, { color: theme.buttonTextColor }]}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={[styles.link, { color: theme.buttonColor }]}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
        <Text style={[styles.link, { color: theme.buttonColor }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  loginButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    fontSize: 14,
    textAlign: "center",
    marginVertical: 6,
  },
});