import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ActivityIndicator, Text, SafeAreaView, FlatList, TouchableHighlight } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

var orderList = [
    {orderNumber: '0105', payment: 23, status: 0},
    {orderNumber: '0125', payment: 230, status: 1},
    {orderNumber: '0235', payment: 46, status: 0},
    {orderNumber: '0906', payment: 53, status: 2},
    {orderNumber: '0107', payment: 82, status: 2},
    {orderNumber: '0325', payment: 79, status: 1}
]

export default class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            orderList: [],
            page: 1,
            itemLoading: false,
            handleLoadMore: false,
            refresh: true,
            token: ''
        };
    }

    componentDidMount() {
        this.getOrderList(
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

    async getOrderList(token, page) {

    }

    refresh = () => {
        this.setState({ 
            orderList: [],
            page: 1,
            itemLoading: true, 
            handleLoadMore: true,
        },  () => {
                this.getOrderList(
                    this.state.token, 
                    this.state.page, 
                );
            }
        );
    }

    renderRow = ({item}) => {
        return(
            <View style={styles.elementWrapper}>
                <Text style={styles.statusTitle}>
                    {
                        item.status == 0 ? 'PENDING' : item.status == 1 ? 'DELIVERING' : 'DELIVERED'
                    }
                </Text>
                <TouchableHighlight
                    underlayColor='silver'
                    style={styles.elementBox}
                    onPress={() => this.goToOrderDetailScreen(item)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.elementLeft}>
                            <Text style={styles.status}>
                                {
                                    item.status == 0 ? 'PENDING' : item.status == 1 ? 'DELIVERING' : 'DELIVERED'
                                }
                            </Text>
                            <Text style={styles.orderNumber}>{item.orderNumber}</Text>
                        </View>
                        <View style={styles.elementRight}>
                            <View style={styles.paymentWrapper}> 
                                <Text 
                                    style={styles.payment}
                                    numberOfLines={1}
                                >
                                    {item.payment}
                                </Text>
                            </View>
                            <View style={styles.forwardWrapper}> 
                                <Icon
                                    name='chevron-forward'
                                    color='tomato'
                                    size={25}
                                    style={styles.forwardIcon}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
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
        if(this.state.orderList.length > 0) {
            this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
        } 
    }

    goBackPreviouScreen = () => {
        this.props.navigation.goBack()
    }

    goToOrderDetailScreen = (item) => {
        this.props.navigation.navigate('OrderDetails', {
            order: item
        })
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                { !this.state.loaded ? loading() : null }
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <TouchableWithoutFeedback onPress={this.goBackPreviouScreen}>
                                    <Icon
                                        name='arrow-back-circle-outline'
                                        color='#fff'
                                        size={29}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.headerCenter}>
                                <Text style={styles.headerTitle}>My Orders</Text>
                            </View>
                            <View style={styles.headerRight}>
                                
                            </View>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.headerBar}>
                                <Text style={styles.headerBarTitle}>HISTORY</Text>
                            </View>
                            <FlatList
                                ref={(ref) => { this.flatListRef = ref }}
                                data={orderList}
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

