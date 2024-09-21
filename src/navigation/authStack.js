import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Welcome from '../screen/welcome.js'; // Fix path for Welcome component



export default function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});




