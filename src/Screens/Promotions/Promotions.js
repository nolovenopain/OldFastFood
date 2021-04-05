import React, { Component } from 'react';
import { View, TouchableHighlight, Alert, Text, SafeAreaView, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

var promotionList = [
    {name: 'free bottle of prosecco', content: 'when u spend more then 50USD on a menu', like: 30, comment: 70, date: '14/09/2007'},
    {name: '10', content: '10% of for every order online', like: 4, comment: 7, date: '14/09/2007'},
    {name: 'sadasdasdasd', content: 'when u spend more then 100USD on a menu', like: 350, comment: 170, date: '14/09/2007'},
    {name: 'mc donal ui3899jfkdsfnksdfsdf', content: 'mc donal free discount for student', like: 3, comment: 10, date: '14/09/2007'},
    {name: '123123123 435stabuck', content: 'stabuck with new menu', like: 310, comment: 700, date: '14/09/2007'},
]

export default class Promotions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            promotionList: [],
            page: 1,
            itemLoading: false,
            handleLoadMore: false,
            refresh: true,
            token: ''
        };
    }

    componentDidMount() {
        this.getPromotionList(
            this.state.token, 
            this.state.page, 
        );
        setTimeout(() => {
            this.setState({ 
                itemLoading: true,
                handleLoadMore: true,
                refresh: false,
                loaded: true 
            });
        }, 500);
    }

    async getPromotionList(token, page) {

    }

    refresh = () => {
        this.setState({ 
            promotionList: [],
            page: 1,
            itemLoading: true, 
            handleLoadMore: true,
        },  () => {
                this.getPromotionList(
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
                onPress={this.goToPromotionDetailsScreen}
            >
                <ImageBackground 
                    style={styles.element}
                    source={require('../../Assets/noImage.jpg')}
                >
                    <View style={styles.content}>
                        <Text 
                            style={styles.elementTitle}
                            numberOfLines={1}
                        >
                            {item.name.toUpperCase()}
                        </Text>
                        <Text 
                            style={styles.elementContent}
                            numberOfLines={1}
                        >
                            {item.content}
                        </Text>
                        <View style={styles.elementBottom}>
                            <Icon
                                name='heart-outline'
                                size={19}
                                color='#fff'
                            />
                            <Text style={styles.elementText}>{item.like}</Text>
                            <Icon
                                name='chatbubbles-outline'
                                size={19}
                                color='#fff'
                                style={{ marginLeft: 5 }}
                            />
                            <Text style={styles.elementText}>{item.comment}</Text>
                            <Icon
                                name='time-outline'
                                size={19}
                                color='#fff'
                                style={{ marginLeft: 5 }}
                            />
                            <Text style={styles.elementText}>{item.date}</Text>
                        </View>
                    </View>
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
        if(this.state.promotionList.length > 0) {
            this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
        } 
    }

    goToPromotionDetailsScreen = () => {
        this.props.navigation.navigate('PromotionDetails')
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
                            <Text style={styles.headerTitle}>Promotions</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <FlatList
                            ref={(ref) => { this.flatListRef = ref }}
                            data={promotionList}
                            refreshing={this.state.refresh}
                            onRefresh={this.refresh}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                            onEndReached={this.state.handleLoadMore ? this.handleLoadMore : null}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={this.state.itemLoading ? this.renderFooter : null}
                            disableVirtualization={true}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

