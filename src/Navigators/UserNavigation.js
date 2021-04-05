import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import Register from '../Screens/Register/Register';
// import ForgotPassword from '../Screens/ForgotPassword/ForgotPassword';

const UserStack = createStackNavigator();

function UserNavigation() {
    return(
        <UserStack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <UserStack.Screen
                name='Login'
                component={Login}
            />
            {/* <UserStack.Screen
                name='ForgotPassword'
                component={ForgotPassword}
            /> */}
            <UserStack.Screen
                name='Register'
                component={Register}
            />
        </UserStack.Navigator>
    )
}

export default UserNavigation;