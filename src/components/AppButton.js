import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity
            //style={[styles.button, { backgroundColor: colors[color] }]}
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 25,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "90%",
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});



export default AppButton;