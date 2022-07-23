import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SigninScreen, SignupScreen, SplashScreen, WelcomeScreen } from '../screens';

const Stack = createStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default AppNavigator


