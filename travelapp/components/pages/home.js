import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import landingImage from "../../assets/landing.jpg"; // Ensure path is correct

const Home = () => {
    const navigation = useNavigation();

    const handleGetStarted = () => {
        navigation.navigate("Login");
    };

    return (
        <ImageBackground source={landingImage} style={styles.background}>
            <View style={styles.overlay}>
                <Text style={styles.title}>Welcome to TravelMate</Text>
                <Text style={styles.subtitle}>Explore. Discover. Enjoy.</Text>

                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 30,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Home;
