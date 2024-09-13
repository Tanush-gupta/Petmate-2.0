import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


export default function Welcome({ navigation }) {

    GoogleSignin.configure({
        webClientId: '473208483707-j9u3o69qvuhh87gie8ilo29p94l7mp5i.apps.googleusercontent.com',
    });
    const signIn = async () => {
        try {

            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the user's ID token
            const { idToken } = await GoogleSignin.signIn();
            console.log(idToken);
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.error(error);
        }
    }

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
