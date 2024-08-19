import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, Button, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for WhatsApp icon

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
            whatsapp: '+1234567890' // WhatsApp number should be the same as phone for this example
        }
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
                data={hotel.images} // Assumes 'images' is an array of image URLs
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
                    <Text style={styles.price}>₹{hotel.pricePerMonth}/month</Text>
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
                            <Text style={styles.contactText}> {hotel.contact.whatsapp}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Button title="Book Now" onPress={() => {/* Handle booking */}} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    image: {
        width,
        height: 250,
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    location: {
        fontSize: 18,
        color: '#888',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    priceContainer: {
        marginBottom: 16,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: 8,
    },
    amenitiesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    amenitiesContainer: {
        marginBottom: 16,
    },
    amenity: {
        fontSize: 16,
        color: '#555',
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contactContainer: {
        marginBottom: 16,
    },
    contactItem: {
        paddingVertical: 8,
    },
    contactText: {
        fontSize: 16,
        color: '#007bff',
    },
    whatsappContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default HotelDetails;
