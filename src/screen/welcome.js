import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function Welcome({ navigation }) {

    GoogleSignin.configure({
        webClientId: '871038621890-f9v7ovlcjft4qb2l908djrqttmthek26.apps.googleusercontent.com',
    });
    const signIn = async () => {
        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

            // Get the user's ID token
            const userInfo = await GoogleSignin.signIn();
           const idToken = userInfo.data.idToken;
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            console.log("Signed in Successfully")
            // Sign-in the user with the credential
            const userCredential = await auth().signInWithCredential(googleCredential);

            console.log('User signed in!', userCredential);
            // Navigate to next screen if sign-in is successful
            // navigation.navigate('Home'); // Change 'Home' to your desired screen

        } catch (error) {
            console.error('Google Sign-In error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/login.png')} style={styles.image} />
            <View style={styles.headerContainer}>
                <Text style={styles.title}>
                    Ready to make a new friend?
                </Text>
                <Text style={styles.subtitle}>
                    Until one has loved an animal, a part of one's soul remains unawakened
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.btn_txt}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        height: '60%',
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
    headerContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    subtitle: {
        fontWeight: '700',
        fontSize: 17,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        borderRadius: 10,
        height: 50,
        marginBottom: 55
    },
    btn_txt: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    }
});
