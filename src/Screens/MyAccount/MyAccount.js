import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Text, SafeAreaView } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class MyAccount extends Component {
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

    goToProfileScreen = () => {
        this.props.navigation.navigate('Profile')
    }

    goToMyOrdersScreen = () => {
        this.props.navigation.navigate('MyOrders')
    }

    goToAboutScreen = () => {
        this.props.navigation.navigate('About')
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                { !this.state.loaded ? loading() : null }
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <Icon
                                    name='arrow-back-circle-outline'
                                    color='#fff'
                                    size={29}
                                />
                            </View>
                            <View style={styles.headerRight}>
                                <Text style={styles.headerTitle}>My Account</Text>
                            </View>
                        </View>
                        <View style={styles.body}>
                            <Image
                                style={styles.avatar}
                                source={require('../../Assets/noAvatar.png')}
                            />
                            <Text style={styles.wellcome}>WELLCOME!</Text>
                            <TouchableHighlight
                                style={styles.btn}
                                underlayColor='rgba(0,0,0,0.2)'
                                onPress={this.goToProfileScreen}
                            >
                                <Text style={styles.btnTitle}>PROFILE</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.btn}
                                underlayColor='rgba(0,0,0,0.2)'
                                onPress={this.goToMyOrdersScreen}
                            >
                                <Text style={styles.btnTitle}>MY ORDERS</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.btn}
                                underlayColor='rgba(0,0,0,0.2)'
                                onPress={this.goToAboutScreen}
                            >
                                <Text style={styles.btnTitle}>ABOUT</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
            </SafeAreaView>
        )
    }
}

