import React, { Component } from 'react';
import { View, TouchableHighlight, Alert, Text, SafeAreaView, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

var categoryList = [
    {name: 'juice hdsfgdsfgsdjhsgdfjhsdgfjsdhfgdfdfgfdkjgnkdjfngkjdfgndkfjgndfkjgndfkjgndfkgjng'},
    {name: 'KFC'},
    {name: 'taco'},
    {name: 'mc donal'},
    {name: 'stabuck'},
    {name: 'dingtea'},
    {name: 'phở'},
    {name: 'ăn vặt'},
]

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            categoryList: [],
            page: 1,
            itemLoading: false,
            handleLoadMore: false,
            refresh: true,
            token: ''
        };
    }

    componentDidMount() {
        this.getCatagoryList(
            this.state.token, 
            this.state.page, 
        );
        this.setState({ 
            itemLoading: true,
            handleLoadMore: true,
            refresh: false, 
        });
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 500);
    }

    async getCatagoryList(token, page) {

    }

    refresh = () => {
        this.setState({ 
            categoryList: [],
            page: 1,
            itemLoading: true, 
            handleLoadMore: true,
        },  () => {
                this.getCatagoryList(
                    this.state.token, 
                    this.state.page, 
                );
            }
        );
    }

    renderRow = ({item}) => {
        return(
            <TouchableHighlight
                underlayColor='silver'
                onPress={this.goToCategoryDetailsScreen}
                style={styles.elementWrapper}
            >
                <ImageBackground 
                    style={styles.element}
                    source={require('../../Assets/noImage.jpg')}
                >
                    <Text style={styles.elementTitle}>
                        {item.name.length > 40 ? item.name.toUpperCase().substr(0,40) + '...' : item.name.toUpperCase()}
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        )
    }

    renderFooter = () => {
        return( 
            this.state.itemLoading && this.state.handleLoadMore ? 
            <View style={styles.itemLoader}>
                <ActivityIndicator size='large'/>
            </View> : null
        )
    }

    scrollToTop() {
        if(this.state.categoryList.length > 0) {
            this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
        } 
    }

    goToCategoryDetailsScreen = () => {
        this.props.navigation.navigate('CategoryDetails')
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
                            <Text style={styles.headerTitle}>Menu</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <FlatList
                            ref={(ref) => { this.flatListRef = ref }}
                            data={categoryList}
                            refreshing={this.state.refresh}
                            onRefresh={this.refresh}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                            onEndReached={this.state.handleLoadMore ? this.handleLoadMore : null}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={this.state.itemLoading ? this.renderFooter : null}
                            disableVirtualization={true}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

