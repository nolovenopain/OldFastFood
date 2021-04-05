import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Order from '../Screens/Order/Order';

const OrderStack = createStackNavigator();

function OrderNavigation() {
    return(
        <OrderStack.Navigator
            initialRouteName='Order'
            screenOptions={{ headerShown: false }}
        >
            <OrderStack.Screen
                name='Order'
                component={Order}
            />
        </OrderStack.Navigator>
    )
}

export default OrderNavigation;