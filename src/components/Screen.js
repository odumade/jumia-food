import React from "react";
import {
    StyleSheet, SafeAreaView, View, StatusBar, KeyboardAvoidingView, ScrollView
} from "react-native";
import { Display } from '../utils';


function Screen({ children, style }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <View>{children}</View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Constants.statusBarHeight,
        //flex: 1,
    },
});

export default Screen;