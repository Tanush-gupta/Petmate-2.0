import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Avatar } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import CustomCarousel from '../components/Carousel';
import Card from '../components/Card';


const { width } = Dimensions.get('window');
const Home = () => {
    const user = auth().currentUser;
    const [category, setCategory] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.userName}>{user.displayName}</Text>
                </View>
                <Avatar.Image source={{ uri: user.photoURL }} size={50} />
            </View>

            <View style={styles.carouselContainer}>
                <CustomCarousel />
            </View>

            {/* //Category Container */}
            <View>
                <Text style={styles.categoryTitle}>Category</Text>
                <View style={styles.categoryContainer}>

                    <View style={styles.categoryItem}>
                        <TouchableOpacity style={[styles.categoryButton, { backgroundColor: '#82d1ff' }]}>
                            <Image source={require('../assets/dog.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text>Dogs</Text>
                    </View>

                    <View style={styles.categoryItem}>
                        <TouchableOpacity style={[styles.categoryButton, { backgroundColor: '#c7ffb8' }]}>
                            <Image source={require('../assets/cat.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text>Cats</Text>
                    </View>

                    <View style={styles.categoryItem}>
                        <TouchableOpacity style={[styles.categoryButton, { backgroundColor: '#eff296' }]}>
                            <Image source={require('../assets/bird.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text>Bird</Text>
                    </View>

                    <View style={styles.categoryItem}>
                        <TouchableOpacity style={[styles.categoryButton, { backgroundColor: '#cca6ff' }]}>
                            <Image source={require('../assets/fish.png')} style={styles.categoryImage} />
                        </TouchableOpacity>
                        <Text>Fish</Text>
                    </View>


                </View>
            </View>


            <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, justifyContent: 'space-around' }}>
                <View style={{ width: width / 2.3 }}>
                    <Card />
                </View>
                <View style={{ width: width / 2.3 }}>
                    <Card />
                </View>
                <View style={{ width: width / 2.3 }}>
                    <Card />
                </View>

            </View>



        </ScrollView >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ededed'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    },
    userName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    carouselContainer: {
        flex: 1,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: 'black',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    categoryItem: {
        alignItems: 'center',
    },
    categoryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.6,
        shadowColor: 'rgba(100, 100, 111, 0.2)',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 1,
        shadowRadius: 29,
        elevation: 5,
    },
    categoryImage: {
        height: 65,
        width: 65,
        resizeMode: 'contain',
    },
});

export default Home;
