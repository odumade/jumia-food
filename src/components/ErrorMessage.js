import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

    return <AppText style={{ color: 'red', marginHorizontal: 12, padding: 10 }}>{error}</AppText>;
}

const styles = StyleSheet.create({
    // error: { color: "red" },

});

export default ErrorMessage;