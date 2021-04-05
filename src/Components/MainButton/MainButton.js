import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './css';

export default class MainButton extends Component {
    render() {
        return (
            <View
                underlayColor="#2882D8"
                style={styles.btn}                   
            >
                <Icon 
                    name="document-text-outline" 
                    size={35} 
                    color={this.props.focused ? '#fff' : "gray"}
                />
            </View>
        );
    }
}