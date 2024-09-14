import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import UserStack from './UserStack';

import Welcome from '../screen/welcome';



export default function index() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    // if (initializing) return null; // Return null or a loading indicator while initializing

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                {user ? <UserStack /> : <AuthStack />}
            </NavigationContainer>
        </View>


    )
}

const styles = StyleSheet.create({})
