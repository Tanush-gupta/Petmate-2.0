import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {

    // const [name, picture, breed, age] = { Pet };


    const Pet = {
        picture: 'https://citizenshipper.com/blog/wp-content/uploads/2021/11/questions-to-ask-a-puppy-breeder-scaled.jpg',
        name: 'Daisy',
        breed: 'Poodle',
        age: 3
    }

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image source={{ uri: Pet.picture }} style={styles.image}></Image>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 19 }}>{Pet.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14 }}>{Pet.breed}</Text>
                    <View style={{ backgroundColor: '#ffefba', borderRadius: 10, padding: 1, }}>
                        <Text style={{ color: '#e8b131', fontSize: 13 }}>`{Pet.age} YRS `</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
        borderRadius: 10,
        margin: 0,
    },
    container: {
        backgroundColor: 'white',
        padding: 6,
        alignContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
    }
})