import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddPet from '../screen/addpet.js';



export default function UserStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="addPet">
            <Stack.Screen name="AddPet" component={AddPet} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
