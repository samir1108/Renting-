import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import HotelCard from '@/components/HotelCard';
import { useRouter } from 'expo-router';

const hotelData = [
    {
        image: 'https://example.com/hotel-image1.jpg',
        title: 'Elegant Hotel in Downtown',
        location: '123 Main St, Downtown',
        description: 'Experience luxury and comfort at the Elegant Hotel, with modern amenities and a central location.',
        pricePerMonth: '3600'
    },
    {
        image: 'https://example.com/hotel-image2.jpg',
        title: 'Cozy Inn in the Suburbs',
        location: '456 Elm St, Suburbs',
        description: 'Enjoy a cozy stay with excellent amenities in a quiet suburban setting.',
        pricePerMonth: '2700'
    },
    // Add more hotel data as needed
];

const App: React.FC = () => {
    const router = useRouter();

    const handleCardPress = (hotel) => {
        router.push({
            pathname: 'PgDetails',
            params: { hotel },
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {hotelData.map((hotel, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCardPress(hotel)}>
                        <HotelCard
                            image={hotel.image}
                            title={hotel.title}
                            location={hotel.location}
                            pricePerMonth={hotel.pricePerMonth}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
