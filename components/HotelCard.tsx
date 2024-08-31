import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HotelCardProps {
    image: string;
    title: string;
    location: string;
    pricePerMonth: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
    image,
    title,
    location,
    pricePerMonth,
}) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.location}>{location}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceMonthly}>₹{pricePerMonth}</Text>
                    <Text style={styles.perMonth}>/month</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        marginVertical: 12,
        marginHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 220,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    info: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    location: {
        fontSize: 16,
        color: '#777',
        marginBottom: 12,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    priceMonthly: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#27ae60',
    },
    perMonth: {
        fontSize: 16,
        color: '#777',
        marginLeft: 4,
    },
});

export default HotelCard;
