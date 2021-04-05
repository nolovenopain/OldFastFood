import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text, ScrollView, SafeAreaView } from 'react-native';
import { loading } from '../../Helpers/Functions';
import { styles } from "./css";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class OrderDetails extends Component {
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

    goBackPreviouScreen = () => {
        this.props.navigation.goBack()
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
                                <Text style={styles.headerTitle}>Order Details</Text>
                            </View>
                            <View style={styles.headerRight}>
                                
                            </View>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.body}>
                                <View style={styles.headerBox}>
                                    <Text style={styles.headerBarTitle}>DETAIL</Text>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>OrderNumber</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>#0105</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>From</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>dsfsdfsdfsdf</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>To</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>#fdgdfgdfgdf</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>Status</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>delivery - ASAP</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>Time</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>07:00 AM</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>Date</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>Thu, 2020-08-05</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.paymentWrapper}>
                                    <View style={styles.paymentLeft}>
                                        <Text style={styles.paymentTitle}>METHOD PAYMENT</Text>
                                    </View>
                                    <View style={styles.paymentRight}>
                                        <Text style={styles.methodPayment}>Internet Banking</Text>
                                    </View>
                                </View>

                                <View style={styles.headerBox}>
                                    <Text style={styles.headerBarTitle}>ITEMS</Text>
                                </View>
                                <View style={styles.orderDetailBar}>
                                    <Text style={styles.orderDetailTitle}>ORDER DETAILS</Text>
                                </View>

                                <View style={styles.box}>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>Total Products</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>0</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>Discount</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.detail}>0%</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.title}>Shipping</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={[styles.detail, {fontWeight: 'bold'}]}>1.86</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.left}>
                                            <Text style={styles.totalTitle}>TOTAL</Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.totalNumber}>23.00</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            </SafeAreaView>
        )
    }
}

