// HotelCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HotelCardProps {
    image: string;
    title: string;
    location: string;
    description: string;
 
    pricePerMonth: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
    image,
    title,
    location,
    description,
    
    pricePerMonth,
}) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.location}>{location}</Text>
                <Text style={styles.description}>{description}</Text>
                
                <Text style={styles.priceMonthly}>₹{pricePerMonth}/month</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        margin: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    info: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    location: {
        color: '#888',
        marginBottom: 8,
    },
    description: {
        color: '#555',
        marginVertical: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    priceMonthly: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginTop: 8,
    },
});

export default HotelCard;
