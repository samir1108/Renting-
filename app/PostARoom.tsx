import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

export default function PostARoom() {
    const [bedroomPhoto, setBedroomPhoto] = useState<string | null>(null);
    const [bathroomPhoto, setBathroomPhoto] = useState<string | null>(null);
    const [balconyPhoto, setBalconyPhoto] = useState<string | null>(null);
    const [otherPhoto, setOtherPhoto] = useState<string | null>(null);
    const [pgName, setPgName] = useState('');
    const [address, setAddress] = useState('');
    const [advance, setAdvance] = useState('');
    const [monthlyCharge, setMonthlyCharge] = useState('');
    const [electricity, setElectricity] = useState('');

    const pickImage = async (setImage: React.Dispatch<React.SetStateAction<string | null>>) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post a Room</Text>

            <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setBedroomPhoto)}>
                <Text style={styles.uploadButtonText}>Upload Bedroom Photo</Text>
            </TouchableOpacity>
            {bedroomPhoto && <Image source={{ uri: bedroomPhoto }} style={styles.image} />}

            <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setBathroomPhoto)}>
                <Text style={styles.uploadButtonText}>Upload Bathroom Photo</Text>
            </TouchableOpacity>
            {bathroomPhoto && <Image source={{ uri: bathroomPhoto }} style={styles.image} />}

            <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setBalconyPhoto)}>
                <Text style={styles.uploadButtonText}>Upload Balcony Photo</Text>
            </TouchableOpacity>
            {balconyPhoto && <Image source={{ uri: balconyPhoto }} style={styles.image} />}

            <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setOtherPhoto)}>
                <Text style={styles.uploadButtonText}>Upload Other Photo</Text>
            </TouchableOpacity>
            {otherPhoto && <Image source={{ uri: otherPhoto }} style={styles.image} />}

            <TextInput
                style={styles.input}
                placeholder="PG Name"
                value={pgName}
                onChangeText={setPgName}
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Advance (in Rupees)"
                keyboardType="numeric"
                value={advance}
                onChangeText={setAdvance}
            />
            <TextInput
                style={styles.input}
                placeholder="Monthly Charge (in Rupees)"
                keyboardType="numeric"
                value={monthlyCharge}
                onChangeText={setMonthlyCharge}
            />
            <TextInput
                style={styles.input}
                placeholder="Electricity (in Rupees)"
                keyboardType="numeric"
                value={electricity}
                onChangeText={setElectricity}
            />

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 24,
        textAlign: 'center',
    },
    uploadButton: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    uploadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: width - 32,
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        height: 44,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    submitButton: {
        backgroundColor: '#28a745',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
