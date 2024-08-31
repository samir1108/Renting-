import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegistrationScreen() {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleRegister = async () => {
        try {
            console.log("handle register hit");
            
            const response = await fetch('http://localhost:8000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, contactNumber, email, password }),
            });

            const data = await response.json();

            if (response.status === 201) {
                Alert.alert('Registration Successful', `Welcome, ${name}!`);
                router.push({ pathname: '/Login' });
            } else {
                Alert.alert('Registration Failed', data.message);
            }
        } catch (error) {
            Alert.alert('Registration Failed', 'An error occurred. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={contactNumber}
                onChangeText={setContactNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f7',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 32,
        textAlign: 'center',
        color: '#333',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-DemiBold' : 'sans-serif-medium',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'sans-serif',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    button: {
        backgroundColor: '#007aff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-DemiBold' : 'sans-serif-medium',
    },
});
