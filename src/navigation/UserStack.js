import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddPet from '../screen/addpet.js';
import Home from '../screen/Home.js';
import Inbox from '../screen/Inbox.js';
import Profile from '../screen/Profile.js';
import Favourite from '../screen/Favourite.js';

const Tab = createBottomTabNavigator();
export default function UserStack() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorite" component={Favourite} />
            <Tab.Screen name='AddPet' component={AddPet} />
            <Tab.Screen name='Inbox' component={Inbox} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    );


}

const styles = StyleSheet.create({});
