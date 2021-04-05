import React from 'react';
import {
    Dimensions,
    Linking,
    View,
    Text,
    Modal,
    Image,
    StyleSheet,
    Alert,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export function loading() {
    return (
        <Modal
            animationType='fade'
            visible={true}
            transparent={true}
        >
            <View style={styles.backgroundLoading}>
                <ActivityIndicator size='large' color='gray'/>
            </View>
        </Modal>
       
    );
}

export async function fetchToken() {
    try{
        const fetchToken = await AsyncStorage.getItem('token');
        const token_type = await AsyncStorage.getItem('token_type');
        const token = token_type + ' ' + fetchToken;
        return token;
    } catch(error) {
        console.log(error)
    }  
}

const styles = StyleSheet.create({
    backgroundLoading: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
})