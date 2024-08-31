import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function PostASpace() {
    const router = useRouter();

    const handlePostRoom = () => {
        // Navigate to the PostARoom page
        router.push('/PostARoom');
    };

    const handlePostFlat = () => {
        // Navigate to the PostAFlat page
        router.push('/PostAFlat');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post a Space</Text>
            <Text style={styles.subtitle}>Choose what type of space you want to post:</Text>
            <TouchableOpacity style={styles.button} onPress={handlePostRoom}>
                <Text style={styles.buttonText}>Post a Room</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePostFlat}>
                <Text style={styles.buttonText}>Post a Flat</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 32,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        width: width * 0.8, // Button width relative to screen width
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
