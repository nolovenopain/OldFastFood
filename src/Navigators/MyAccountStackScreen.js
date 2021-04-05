import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MyAccount from '../Screens/MyAccount/MyAccount';
import Profile from '../Screens/Profile/Profile';
import MyOrders from '../Screens/MyOrders/MyOrders';
import About from '../Screens/About/About';
import OrderDetails from '../Screens/OrderDetails/OrderDetails';

const MyAccountStack = createStackNavigator();

function MyAccountNavigation({ navigation, route }) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName == 'MyAccount') {
            navigation.setOptions({ tabBarVisible: true })
        }
        else {
            navigation.setOptions({ tabBarVisible: false })
        }
    }, [navigation, route]);
    
    return(
        <MyAccountStack.Navigator
            initialRouteName='MyAccount'
            screenOptions={{ headerShown: false }}
        >
            <MyAccountStack.Screen
                name='MyAccount'
                component={MyAccount}
            />
            <MyAccountStack.Screen
                name='Profile'
                component={Profile}
            />
            <MyAccountStack.Screen
                name='MyOrders'
                component={MyOrders}
            />
            <MyAccountStack.Screen
                name='OrderDetails'
                component={OrderDetails}
            />
            <MyAccountStack.Screen
                name='About'
                component={About}
            />
        </MyAccountStack.Navigator>
    )
}

export default MyAccountNavigation;