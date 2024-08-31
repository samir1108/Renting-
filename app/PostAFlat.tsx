import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

export default function PostAFlat() {
    const [selectedBHK, setSelectedBHK] = useState<number | null>(null);
    const [bedroomPhotos, setBedroomPhotos] = useState<string[]>([]);
    const [kitchenPhoto, setKitchenPhoto] = useState<string | null>(null);
    const [balconyPhoto, setBalconyPhoto] = useState<string | null>(null);
    const [bathroomPhoto, setBathroomPhoto] = useState<string | null>(null);
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

    const pickBedroomImage = async (index: number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const updatedPhotos = [...bedroomPhotos];
            updatedPhotos[index] = result.assets[0].uri;
            setBedroomPhotos(updatedPhotos);
        }
    };

    const renderBedroomUploads = () => {
        let bedroomUploaders = [];
        for (let i = 0; i < (selectedBHK || 0); i++) {
            bedroomUploaders.push(
                <View key={i} style={styles.bedroomUploadContainer}>
                    <TouchableOpacity style={styles.uploadButton} onPress={() => pickBedroomImage(i)}>
                        <Text style={styles.uploadButtonText}>Upload Bedroom {i + 1} Photo</Text>
                    </TouchableOpacity>
                    {bedroomPhotos[i] && <Image source={{ uri: bedroomPhotos[i] }} style={styles.image} />}
                </View>
            );
        }
        return bedroomUploaders;
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Post a Flat</Text>

            <Text style={styles.label}>Select BHK Type:</Text>
            <View style={styles.bhkSelector}>
                {[1, 2, 3].map((bhk) => (
                    <TouchableOpacity
                        key={bhk}
                        style={[
                            styles.bhkButton,
                            selectedBHK === bhk && styles.selectedBhkButton,
                        ]}
                        onPress={() => setSelectedBHK(bhk)}
                    >
                        <Text style={styles.bhkButtonText}>{bhk} BHK</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedBHK && (
                <>
                    {renderBedroomUploads()}

                    <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setKitchenPhoto)}>
                        <Text style={styles.uploadButtonText}>Upload Kitchen Photo</Text>
                    </TouchableOpacity>
                    {kitchenPhoto && <Image source={{ uri: kitchenPhoto }} style={styles.image} />}

                    <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setBalconyPhoto)}>
                        <Text style={styles.uploadButtonText}>Upload Balcony Photo</Text>
                    </TouchableOpacity>
                    {balconyPhoto && <Image source={{ uri: balconyPhoto }} style={styles.image} />}

                    <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage(setBathroomPhoto)}>
                        <Text style={styles.uploadButtonText}>Upload Bathroom Photo</Text>
                    </TouchableOpacity>
                    {bathroomPhoto && <Image source={{ uri: bathroomPhoto }} style={styles.image} />}

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
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    contentContainer: {
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 24,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        color: '#34495e',
        marginBottom: 8,
        textAlign: 'center',
    },
    bhkSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
    },
    bhkButton: {
        marginHorizontal: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#bdc3c7',
    },
    selectedBhkButton: {
        backgroundColor: '#3498db',
    },
    bhkButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    uploadButton: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 12,
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
        marginBottom: 12,
        alignSelf: 'center',
    },
    input: {
        height: 44,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    submitButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bedroomUploadContainer: {
        marginBottom: 20,
    },
});
