import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, Text, ScrollView, SafeAreaView } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import AsyncStorage from '@react-native-community/async-storage';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 500);
    }

    setValue = (name, value) => {
        this.setState({ [name]: value}, () => {})
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                { !this.state.loaded ? loading() : null }
                <ScrollView>
                    <View style={styles.container}>
                        <Text>This is ForgotPassword</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

