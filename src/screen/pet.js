import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';

export default function Pet(props) {
    // Destructure props if needed
    // const { petName, category, breed, age, gender, address, about, image, weight } = props;
    const [like, setLike] = useState(false);

    const pet = {
        petName: 'Avenger',
        category: 'dog',
        breed: 'German Shepherd',
        gender: 'male',
        age: 5,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
        weight: 13,
        address: '245 N Tryon Street, NC',
        owner: 'Rahul Sanap',
        image: 'https://e7.pngegg.com/pngimages/90/669/png-clipart-do-not-catch-the-tongue-of-the-dog-pet-dog-thumbnail.png',
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {/* <Image source={{ uri: pet.image } } style={styles.petImage} /> */}
                <Image source={require('../assets/dog.jpg')} style={styles.petImage} />
            </View>

            <View style={styles.innerContainer}>
                <View style={styles.detailsContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.petName}>{pet.petName}</Text>
                        <Text style={styles.petAddress}>{pet.address}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setLike(!like)} style={styles.likeContainer}>
                        {like ? <Icon name="heart" size={30} color="red" /> : <Icon name="heart-o" size={30} />}
                    </TouchableOpacity>
                </View>

                <View style={styles.attributesContainer}>
                    {/** Attribute 1 */}
                    <View style={styles.attribute}>
                        <Image source={require('../assets/calendar.png')} style={styles.icon} />

                        <View style={styles.attributeText}>
                            <Text style={styles.attributeTitle}>Age</Text>
                            <Text style={styles.attributeValue}>{pet.age} Years</Text>
                        </View>
                    </View>
                    {/** Attribute 2 */}
                    <View style={styles.attribute}>
                        <Image source={require('../assets/bone.png')} style={styles.icon} />
                        <View style={styles.attributeText}>
                            <Text style={styles.attributeTitle}>Breed</Text>
                            <Text style={styles.attributeValue}>{pet.breed}</Text>
                        </View>
                    </View>
                    {/** Attribute 3 */}
                    <View style={styles.attribute}>
                        <Image source={require('../assets/sex.png')} style={styles.icon} />
                        <View style={styles.attributeText}>
                            <Text style={styles.attributeTitle}>Sex</Text>
                            <Text style={styles.attributeValue}>{pet.gender}</Text>
                        </View>
                    </View>
                    {/** Attribute 4 */}
                    <View style={styles.attribute}>
                        <Image source={require('../assets/weight.png')} style={styles.icon} />
                        <View style={styles.attributeText}>
                            <Text style={styles.attributeTitle}>Weight</Text>
                            <Text style={styles.attributeValue}>{pet.weight} kg</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.aboutHeading}>About {pet.petName}</Text>
                    <Text style={styles.aboutText}>{pet.about}</Text>
                </View>

                <View style={styles.ownerContainer}>
                    <View style={styles.owner}>
                        <Avatar.Image size={48} source={require('../assets/avatar.png')} />
                        <View style={styles.ownerDetail}>
                            <Text style={styles.ownerName}>{pet.owner}</Text>
                            <Text style={styles.ownerRole}>Pet Owner</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Icon name="send" size={30} style={styles.sendIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Adopt Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    imageContainer: {
        height: '40%',
    },
    petImage: {
        width: '100%',
        height: '100%',
    },
    innerContainer: {
        padding: 15,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    infoContainer: {
        flex: 1,
    },
    petName: {
        fontWeight: '900',
        color: 'black',
        fontSize: 26,
    },
    petAddress: {
        fontSize: 16,
        color: '#555',
    },
    likeContainer: {
        padding: 8,
    },
    attributesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    attribute: {
        width: '47%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 8,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 8,
    },
    attributeText: {
        flexDirection: 'column',
    },
    attributeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    attributeValue: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    aboutHeading: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
    },
    aboutText: {
        fontSize: 17,
    },
    ownerContainer: {
        marginTop: 18,
        borderColor: 'orange',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    owner: {
        padding: 7,
        flexDirection: 'row',
    },
    ownerDetail: {
        marginLeft: 14,
    },
    ownerName: {
        fontWeight: '600',
        color: 'black',
        fontSize: 18,
    },
    ownerRole: {
        color: '#555',
    },
    sendIcon: {
        marginRight: 12,
    },
    btn: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        bottom: 0,
    },
    btnText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 18,
    },
});
