import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';


export default function AddPet() {
    // Define a generic state for all inputs
    const [formState, setFormState] = useState({
        petName: '',
        category: '',
        breed: '',
        age: '',
        gender: '',
        address: '',
        about: '',
    });

    // Function to handle input changes
    const handleInputChange = (name, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.fieldContainer}>
                <Text style={styles.header}>Add New Pet for adoption</Text>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 16,
                    shadowColor: 'rgba(0, 0, 0, 0.25)',
                    shadowOffset: { width: 0, height: 54 },
                    shadowOpacity: 0.25,
                    shadowRadius: 55,
                    elevation: 10,
                    width: 170,
                    height: 170,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../assets/placeholder.png')} style={styles.image}></Image>
                </View>
            </View>


            {/* Pet Name Field */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Pet Name *</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter pet name"
                    value={formState.petName}
                    onChangeText={(text) => handleInputChange('petName', text)}
                />
            </View>

            {/* Category Picker */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Category *</Text>
                <Picker
                    selectedValue={formState.category}
                    onValueChange={(itemValue) => handleInputChange('category', itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Dog" value="Dog" />
                    <Picker.Item label="Cat" value="Cat" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>
            </View>

            {/* Breed Field */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Breed *</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter breed"
                    value={formState.breed}
                    onChangeText={(text) => handleInputChange('breed', text)}
                />
            </View>

            {/* Age Field */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Age *</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    placeholder="Enter age"
                    value={formState.age}
                    onChangeText={(text) => handleInputChange('age', text)}
                />
            </View>

            {/* Gender Picker */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Gender *</Text>
                <Picker
                    selectedValue={formState.gender}
                    onValueChange={(itemValue) => handleInputChange('gender', itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                </Picker>
            </View>

            {/* Address Field */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Address *</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter address"
                    value={formState.address}
                    onChangeText={(text) => handleInputChange('address', text)}
                />
            </View>

            {/* About Field */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>About *</Text>
                <TextInput
                    style={[styles.textInput, styles.textArea]}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Describe the pet"
                    value={formState.about}
                    onChangeText={(text) => handleInputChange('about', text)}
                />
            </View>

            {/* Submit Button */}
            <Button
                mode="contained"
                onPress={() => console.log('Form Submitted:', formState)}
                buttonColor="orange"
                style={styles.submitButton}
            >
                <Text style={{ fontWeight: '600', fontSize: 20 }}>Submit</Text>
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3e3e3',
        padding: 15,
    },
    fieldContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
        marginBottom: 5,
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    picker: {
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        shadowColor: 'rgba(99, 99, 99, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 2, // for Android shadow
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 40,
        padding: 5
    },
    image: {
        height: 100,
        width: 100,
    },
    header: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black',
        marginBottom: 12
    }
});

