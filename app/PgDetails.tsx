import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HotelDetails: React.FC = () => {
    // Hardcoded hotel details
    const hotel = {
        images: [
            'https://example.com/hotel-image1.jpg',
            'https://example.com/hotel-image2.jpg',
            'https://example.com/hotel-image3.jpg',
        ],
        title: 'Elegant Hotel in Downtown',
        location: '123 Main St, Downtown',
        description: 'Experience luxury and comfort at the Elegant Hotel, with modern amenities and a central location. Enjoy spacious rooms, high-speed WiFi, and exceptional service in the heart of the city.',
        pricePerMonth: '3600',
        amenities: ['Free WiFi', 'Pool', 'Gym', 'Breakfast included', '24/7 Room Service'],
        contact: {
            phone: '+1234567890',
            email: 'info@eleganthotel.com',
            whatsapp: '+1234567890',
        },
        coordinates: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
    };

    const handleCall = () => {
        Linking.openURL(`tel:${hotel.contact.phone}`);
    };

    const handleEmail = () => {
        Linking.openURL(`mailto:${hotel.contact.email}`);
    };

    const handleWhatsApp = () => {
        Linking.openURL(`https://wa.me/${hotel.contact.whatsapp}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FlatList
                data={hotel.images}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )}
                keyExtractor={(item) => item}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{hotel.title}</Text>
                <Text style={styles.location}>{hotel.location}</Text>
                <Text style={styles.description}>{hotel.description}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹{hotel.pricePerMonth}</Text>
                    <Text style={styles.perMonth}>/month</Text>
                </View>
                <Text style={styles.amenitiesTitle}>Amenities</Text>
                <View style={styles.amenitiesContainer}>
                    {hotel.amenities.map((amenity, index) => (
                        <Text key={index} style={styles.amenity}>• {amenity}</Text>
                    ))}
                </View>
                <Text style={styles.contactTitle}>Contact Us</Text>
                <View style={styles.contactContainer}>
                    <TouchableOpacity onPress={handleCall} style={styles.contactItem}>
                        <Text style={styles.contactText}>Call: {hotel.contact.phone}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEmail} style={styles.contactItem}>
                        <Text style={styles.contactText}>Email: {hotel.contact.email}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleWhatsApp} style={styles.contactItem}>
                        <View style={styles.whatsappContainer}>
                            <FontAwesome name="whatsapp" size={20} color="#25D366" />
                            <Text style={styles.contactText}> WhatsApp</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: hotel.coordinates.latitude,
                        longitude: hotel.coordinates.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                    <Marker
                        coordinate={hotel.coordinates}
                        title={hotel.title}
                        description={hotel.location}
                    />
                </MapView>
               
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
    },
    image: {
        width,
        height: 280,
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    location: {
        fontSize: 18,
        color: '#777',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
        lineHeight: 22,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 16,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    perMonth: {
        fontSize: 16,
        color: '#777',
        marginLeft: 4,
    },
    amenitiesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    amenitiesContainer: {
        marginBottom: 16,
    },
    amenity: {
        fontSize: 16,
        color: '#555',
        marginVertical: 2,
    },
    contactTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contactContainer: {
        marginBottom: 16,
    },
    contactItem: {
        paddingVertical: 10,
    },
    contactText: {
        fontSize: 16,
        color: '#007bff',
    },
    whatsappContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 10,
    },
    bookButton: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HotelDetails;
