import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginComponent() {
    const [emailOrNumber, setEmailOrNumber] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleLogin = () => {
        console.log('Email/Number:', emailOrNumber);
        console.log('Password:', password);
        router.push('/MySpaces');
    };

    const handleRegister = () => {
        router.push('/Registration');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#888"
                keyboardType= 'phone-pad'
                autoCapitalize="none"
                value={emailOrNumber}
                onChangeText={setEmailOrNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Register?</Text>
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
        marginBottom: 16,
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
    registerButton: {
        alignItems: 'center',
        marginTop: 16,
    },
    registerButtonText: {
        color: '#007aff',
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'sans-serif',
    },
});
