import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, Text, FlatList, SafeAreaView, TouchableHighlight, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import { orange } from '../../Components/Colors/Color';
import AsyncStorage from '@react-native-community/async-storage';

var list = [
    {id:1, name: 'juice hdsfgdsfgsdjhsgdfjhsdgfjsdhfgdfdfgfdkjgnkdjfngkjdfgndkfjgndfkjgndfkjgndfkgjng', price: 1.5345454544344, quantity: 1},
    {id:2, name: 'KFC', price: 2.53, quantity: 1},
    {id:3, name: 'taco', price: 3.23, quantity: 1},
    {id:4, name: 'mc donal', price: 5.13, quantity: 1},
    {id:5, name: 'stabuck', price: 3, quantity: 1},
    {id:6, name: 'dingtea', price: 2.54, quantity: 1},
    {id:7, name: 'phở', price: 1.6, quantity: 1},
    {id:8, name: 'ăn vặt', price: 4.08, quantity: 1},
]

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            cartList: [],
            page: 1,
            itemLoading: false,
            handleLoadMore: false,
            refresh: true,
            token: '',
            totalPrice: 0,
            totalQuantity: 0,
            list: [
                {id:1, name: 'juice hdsfgdsfgsdjhsgdfjhsdgfjsdhfgdfdfgfdkjgnkdjfngkjdfgndkfjgndfkjgndfkjgndfkgjng', price: 1.5345454544344, quantity: 1},
                {id:2, name: 'KFC', price: 2.53, quantity: 1},
                {id:3, name: 'taco', price: 3.23, quantity: 1},
                {id:4, name: 'mc donal', price: 5.13, quantity: 1},
                {id:5, name: 'stabuck', price: 3, quantity: 1},
                {id:6, name: 'dingtea', price: 2.54, quantity: 1},
                {id:7, name: 'phở', price: 1.6, quantity: 1},
                {id:8, name: 'ăn vặt', price: 4.08, quantity: 1},
            ]
        };
    }

    componentDidMount() {
        this.getCartList(
            this.state.token, 
            this.state.page, 
        )
        var total = 0;
        var totalQuantity = 0;
        this.state.list.map((value, key) => {
            total = total + value.price * value.quantity
            totalQuantity = totalQuantity + value.quantity 
        })
        setTimeout(() => {
            this.setState({ 
                itemLoading: true,
                handleLoadMore: true,
                refresh: false,
                loaded: true,
                total,
                totalQuantity 
            });
        }, 500);
    }

    async getCartList(token, page) {

    }

    refresh = () => {
        this.setState({ 
            cartList: [],
            page: 1,
            itemLoading: true, 
            handleLoadMore: true,
        },  () => {
                this.getCartList(
                    this.state.token, 
                    this.state.page, 
                );
            }
        );
    }

    renderRow = ({item}) => {
        return(
            <View style={styles.element}>
                <View style={styles.deleteElementBtn}>
                    <TouchableWithoutFeedback onPress={() => this.deleteFoodinCart(item)}>
                        <Icon
                            name='close-circle'
                            size={20}
                            color='tomato'
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.elementContentGroup}>
                    <View style={styles.orderFoodTitleWrapper}>
                        <Text
                            numberOfLines={1}
                            style={styles.orderFoodTitle}
                        >
                            {item.name}
                        </Text>
                    </View>
                    <View style={styles.orderFoodPriceWrapper}>
                        <Text
                            numberOfLines={1}
                            style={styles.price}
                        >
                            {item.price}
                        </Text>
                    </View>
                    <View style={styles.quantityGroupWrapper}>
                        <TouchableHighlight
                            underlayColor='silver'
                            style={styles.plus}
                            onPress={() => this.plusOrder(item)}
                        >
                            <Icon
                                name='add'
                                color='tomato'
                                size={25}
                                style={styles.plusIcon}
                            />
                        </TouchableHighlight>
                        <View style={styles.boxQuantity}>
                            <Text style={styles.quantity}>
                                {item.quantity}
                            </Text>
                        </View>
                        <TouchableHighlight
                            underlayColor='silver'
                            style={styles.minus}
                            onPress={() => this.minusOrder(item)}
                        >
                            <Icon
                                name='remove'
                                color='tomato'
                                size={25}
                                style={styles.minusIcon}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }

    renderFooter = () => {
        return( 
            this.state.itemLoading && this.state.handleLoadMore? 
            <View style={styles.itemLoader}>
                <ActivityIndicator size='large'/>
            </View> : null
        )
    }

    deleteAllOrder = () => {
        Alert.alert(
            'Alert',
            'Are you sure want to clear all item?',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => this.setState({ list: [], total: 0, totalQuantity: 0 })}
            ],
            {cancelable: true}
        )
    }

    minusOrder = (item) => {
        var list = [];
        this.state.list.map((value, key) => {
            if(value.id == item.id && value.quantity > 1) {
                value.quantity = value.quantity - 1
                list.push(value)
            }
            else if(value.id == item.id && value.quantity == 1) {
                var indexItem = this.state.list.indexOf(value)
                list = this.state.list;
                list.splice(indexItem, 1)
            }
        }) 
        var total = 0
        var totalQuantity = 0
        list.map((value, key) => {
            total = total + value.price * value.quantity
            totalQuantity = totalQuantity + value.quantity
        })
        this.setState({ list, total, totalQuantity })
    }

    plusOrder = (item) => {
        var list = []
        this.state.list.map((value, key) => {
            if(value.id == item.id) {
                value.quantity = value.quantity + 1
            }
            list.push(value)
        })
        var total = 0;
        var totalQuantity = 0
        list.map((value, key) => {
            total = total + value.price * value.quantity
            totalQuantity = totalQuantity + value.quantity
        })
        this.setState({ list, total, totalQuantity })
    }

    deleteFoodinCart = (item) => {
        Alert.alert(
            'Alert',
            'Are you sure want to remove this item?',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => {
                    var list = [];
                    this.state.list.map((value, key) => {
                        if(value.id == item.id) {
                            var indexItem = this.state.list.indexOf(value)
                            list = this.state.list;
                            list.splice(indexItem, 1)
                        }
                    })
                    var total = 0
                    var totalQuantity = 0
                    list.map((value, key) => {
                        total = total + value.price * value.quantity
                        totalQuantity = totalQuantity + value.quantity
                    }) 
                    this.setState({ list, total, totalQuantity })
                }}
            ],
            {cancelable: true}
        )
    }

    order = () => {

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
                            <Text style={styles.headerTitle}>Order</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.bodyHeader}>
                            <View style={styles.bodyHeaderLeft}>
                                <Text style={styles.bodyHeaderTitle}>YOUR CART</Text>
                            </View>
                            <View style={styles.bodyHeaderRight}>
                                <TouchableWithoutFeedback onPress={this.deleteAllOrder}>
                                    <Icon
                                        name='trash-outline'
                                        color='tomato'
                                        size={20}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <FlatList
                            contentContainerStyle={styles.cartList}
                            data={this.state.list}
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
                        <View style={styles.totalOrder}>
                            <View style={styles.topTotalOrder}>
                                <View style={styles.totalOrderLeft}>
                                    <Text style={styles.totalOrderTitle}>PROMO CODE(APPLE)</Text>
                                </View>
                                <View style={styles.totalOrderRight}>
                                    <Text style={styles.discountCode}>P3DFF4D</Text>
                                    <Text style={styles.discountPercent}>Sale 90%</Text>
                                </View>
                            </View>
                            <View style={styles.bottomTotalOrder}>
                                <View style={styles.totalOrderLeftBottom}>
                                    <Text style={styles.totalTitle}>Total</Text>
                                    <Text 
                                        style={styles.totalNumber}
                                        numberOfLines={1}
                                    >
                                        {this.state.total}
                                    </Text>
                                </View>
                                <View style={styles.totalOrderRight}>
                                    <TouchableHighlight
                                        style={styles.orderButton}
                                        underlayColor='silver'
                                        onPress={this.order}
                                    >
                                        <View style={styles.orderButtonWrapper}>
                                            <Text style={styles.orderTitle}>PLACE ORDER</Text>
                                            <Icon
                                                name='arrow-forward'
                                                color='#fff'
                                                size={25}
                                                style={{ marginLeft: 5 }}
                                            />
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

