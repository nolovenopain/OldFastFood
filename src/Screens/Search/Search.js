import React, { Component } from 'react';
import { View, Alert, Text, SafeAreaView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            isFocused: false,
            searchKey: '',
            searchKeyWithDots: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 500);
    }

    handleFocus = () => 
        this.setState({ 
            isFocused: true, 
            searchKeyWithDots: this.state.searchKey
        });

    handleBlur = () =>  
        this.setState({ 
            isFocused: false,
            searchKeyWithDots: this.state.searchKey.length > 40 ? this.state.searchKey.substr(0,40) + '...' : this.state.searchKey 
        });

    search = () => {

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
                                <Text style={styles.headerTitle}>Search</Text>
                            </View>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.searchWrapper}>
                                <TextInput
                                    style={styles.searchBar}
                                    placeholder='ENTER KEY WORD'
                                    placeholderTextColor='#fff'
                                    onChangeText={(searchKey) => this.setState({ searchKey, searchKeyWithDots: searchKey })}
                                    value={this.state.searchKeyWithDots}
                                    onFocus={this.handleFocus}
                                    onBlur={this.handleBlur}
                                    autoCapitalize='none'
                                    underlineColorAndroid='transparent'
                                />
                                <View style={styles.btnDeleteWrapper}>
                                    {this.state.searchKeyWithDots != '' && 
                                        this.state.searchKeyWithDots != null && 
                                            this.state.searchKeyWithDots != undefined ? 
                                        <TouchableOpacity
                                            style={styles.btnDelete}
                                            onPress={() => this.setState({ searchKeyWithDots: '', searchKey: '' })}
                                        >
                                            <Icon
                                                name='close-circle'
                                                size={20}
                                                color='#fff'
                                            />
                                        </TouchableOpacity> : null
                                    }
                                </View>
                                <View style={styles.separate}></View>
                                <TouchableHighlight 
                                    style={styles.searchIconWrapper}
                                    underlayColor='green'
                                    onPress={this.search}
                                >
                                    <Icon
                                        name='search'
                                        color='#fff'
                                        size={25}
                                    />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
            </SafeAreaView>
        )
    }
}

