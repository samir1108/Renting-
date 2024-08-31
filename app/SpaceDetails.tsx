import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, ScrollView, TextInput, Button, Alert } from 'react-native';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');

const PropertyDetails = () => {
    const [images, setImages] = useState([
        'https://via.placeholder.com/350',
        'https://via.placeholder.com/350',
        'https://via.placeholder.com/350',
    ]);

    const [propertyDetails, setPropertyDetails] = useState({
        name: 'Elegant PG/Flat in Downtown',
        type: 'Flat', 
        bhk: '2 BHK', 
        description: 'A luxurious 2 BHK flat with all modern amenities...',
        amenities: ['Free WiFi', 'Gym', 'Pool', '24/7 Room Service'],
        contact: {
            phone: '+1234567890',
            whatsapp: '+1234567890',
            email: 'contact@example.com',
            coordinates: {
                lat: '37.7749',
                lng: '-122.4194',
            }
        }
    });

    const [newImage, setNewImage] = useState('');
    const [newDetails, setNewDetails] = useState({
        name: propertyDetails.name,
        type: propertyDetails.type,
        bhk: propertyDetails.bhk,
        description: propertyDetails.description,
        amenities: '',
        phone: propertyDetails.contact.phone,
        whatsapp: propertyDetails.contact.whatsapp,
        email: propertyDetails.contact.email,
        lat: propertyDetails.contact.coordinates.lat,
        lng: propertyDetails.contact.coordinates.lng,
    });

    const updateImage = () => {
        if (newImage) {
            setImages([...images, newImage]);
            setNewImage('');
        }
    };

    const updateAllFields = () => {
        setPropertyDetails({
            ...propertyDetails,
            name: newDetails.name,
            type: newDetails.type,
            bhk: newDetails.bhk,
            description: newDetails.description,
            contact: {
                phone: newDetails.phone,
                whatsapp: newDetails.whatsapp,
                email: newDetails.email,
                coordinates: {
                    lat: newDetails.lat,
                    lng: newDetails.lng,
                }
            }
        });

        if (newDetails.amenities) {
            setPropertyDetails(prevDetails => ({
                ...prevDetails,
                amenities: [...prevDetails.amenities, newDetails.amenities],
            }));
            setNewDetails({ ...newDetails, amenities: '' });
        }
    };

    const renderImageItem = ({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
    );

    const useCurrentLocation = async () => {
        try {
            // Request permission to access location
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
                return;
            }

            // Get the current location
            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            // Update the coordinates with the current GPS location
            setNewDetails({
                ...newDetails,
                lat: latitude.toString(),
                lng: longitude.toString(),
            });

        } catch (error) {
            console.error("Error fetching location: ", error);
            Alert.alert('Error', 'Could not get location. Please try again later.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Image Carousel */}
            <FlatList
                data={images}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                renderItem={renderImageItem}
                showsHorizontalScrollIndicator={false}
                style={styles.imageCarousel}
            />
            <TextInput
                style={styles.input}
                placeholder="Add Image URL"
                value={newImage}
                onChangeText={setNewImage}
            />
            <Button title="Add Image" onPress={updateImage} />

            {/* Property Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Property Name</Text>
                <TextInput
                    style={styles.input}
                    value={newDetails.name}
                    onChangeText={(value) => setNewDetails({ ...newDetails, name: value })}
                />

                <Text style={styles.title}>Type</Text>
                <TextInput
                    style={styles.input}
                    value={newDetails.type}
                    onChangeText={(value) => setNewDetails({ ...newDetails, type: value })}
                />

                {newDetails.type === 'Flat' && (
                    <>
                        <Text style={styles.title}>BHK</Text>
                        <TextInput
                            style={styles.input}
                            value={newDetails.bhk}
                            onChangeText={(value) => setNewDetails({ ...newDetails, bhk: value })}
                        />
                    </>
                )}

                <Text style={styles.title}>Description</Text>
                <TextInput
                    style={styles.input}
                    value={newDetails.description}
                    onChangeText={(value) => setNewDetails({ ...newDetails, description: value })}
                />

                <Text style={styles.title}>Amenities</Text>
                {propertyDetails.amenities.map((amenity, index) => (
                    <Text key={index} style={styles.amenityText}>• {amenity}</Text>
                ))}
                <TextInput
                    style={styles.input}
                    placeholder="Add Amenity"
                    value={newDetails.amenities}
                    onChangeText={(value) => setNewDetails({ ...newDetails, amenities: value })}
                />

                <Text style={styles.title}>Contact Us</Text>
                <View style={styles.contactContainer}>
                    <Text>Phone</Text>
                    <TextInput
                        style={styles.input}
                        value={newDetails.phone}
                        onChangeText={(value) => setNewDetails({ ...newDetails, phone: value })}
                    />

                    <Text>WhatsApp</Text>
                    <TextInput
                        style={styles.input}
                        value={newDetails.whatsapp}
                        onChangeText={(value) => setNewDetails({ ...newDetails, whatsapp: value })}
                    />

                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={newDetails.email}
                        onChangeText={(value) => setNewDetails({ ...newDetails, email: value })}
                    />
                </View>

                <Text style={styles.title}>Location</Text>
                <TextInput
                    style={styles.input}
                    value={newDetails.lat}
                    onChangeText={(value) => setNewDetails({ ...newDetails, lat: value })}
                    placeholder="Latitude"
                />
                <TextInput
                    style={styles.input}
                    value={newDetails.lng}
                    onChangeText={(value) => setNewDetails({ ...newDetails, lng: value })}
                    placeholder="Longitude"
                />
                <Button title="Use Current Location" onPress={useCurrentLocation} />
            </View>

            {/* Save Changes Button */}
            <Button title="Save Changes" onPress={updateAllFields} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    imageCarousel: {
        marginBottom: 16,
    },
    image: {
        width: width,
        height: 200,
        resizeMode: 'cover',
    },
    detailsContainer: {
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    contactContainer: {
        marginBottom: 16,
    },
    amenityText: {
        fontSize: 16,
        color: '#34495e',
        marginBottom: 4,
    },
});

export default PropertyDetails;
