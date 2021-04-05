import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserNavigation from '../Navigators/UserNavigation';
import BottomNavigation from '../Navigators/BottomNavigation';

const RootStack = createStackNavigator();

function RootNavigation() {
    return(
        <RootStack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <RootStack.Screen
                name='UserNavigation'
                component={UserNavigation}
            />
            <RootStack.Screen
                name='BottomNavigation'
                component={BottomNavigation}
            />
        </RootStack.Navigator>
    )
}

export default RootNavigation;