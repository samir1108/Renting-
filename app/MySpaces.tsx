import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { router, useRouter } from 'expo-router';

// Sample data for demonstration
const sampleSpaces = [
    {
        id: '1',
        type: 'Room',
        image: 'https://via.placeholder.com/150',
        name: 'Cozy Room',
        address: '123 Main St',
        price: '₹5000',
        bedroomPhoto: 'https://via.placeholder.com/150',
        bathroomPhoto: 'https://via.placeholder.com/150',
        balconyPhoto: 'https://via.placeholder.com/150',
        otherPhoto: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        type: 'Flat',
        image: 'https://via.placeholder.com/150',
        name: 'Spacious 2 BHK',
        address: '456 Elm St',
        price: '₹15000',
        bedroomPhotos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        kitchenPhoto: 'https://via.placeholder.com/150',
        balconyPhoto: 'https://via.placeholder.com/150',
        bathroomPhoto: 'https://via.placeholder.com/150',
    },
];

export default function MySpaces() {
    const router = useRouter();

    const handlePress = (item) => {
        console.log(item, "item");
        
        // Pass the item as a parameter
        router.push({
            pathname: '/SpaceDetails',
            params: { space: JSON.stringify(item) },
        });
    };

    const handleUploadSpace = () => {
        router.push('/PostASpace'); // Navigate to the UploadSpace page
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePress(item)}
            activeOpacity={0.8}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Spaces</Text>
            <FlatList
                data={sampleSpaces}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleUploadSpace}
            >
                <Text style={styles.uploadButtonText}>Upload a Space</Text>
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
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        overflow: 'hidden',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 12,
        marginRight: 16,
    },
    details: {
        flex: 1,
        paddingVertical: 12,
    },
    type: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    address: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#28a745',
    },
    uploadButton: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 16,
    },
    uploadButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
