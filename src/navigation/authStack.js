import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import LoginScreen from '../screen/Login.js';
import SignupScreen from '../screen/SignUp.js';
import Welcome from '../screen/welcome.js'; // Fix path for Welcome component



export default function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});




