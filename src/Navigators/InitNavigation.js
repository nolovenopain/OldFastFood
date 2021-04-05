import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigation from '../Navigators/RootNavigation';
import Splash from '../Screens/Splash/Splash';
import { navigationRef } from '../Navigators/FirebaseRouter';

const InitialStack = createStackNavigator();

function InitialNavigation() {
    return(
        <NavigationContainer ref={navigationRef}>
            <InitialStack.Navigator
                initialRouteName='Splash'
                screenOptions={{ headerShown: false }}
            >
                <InitialStack.Screen
                    name='Splash'
                    component={Splash}
                />
                <InitialStack.Screen
                    name='RootNavigation'
                    component={RootNavigation}
                />
            </InitialStack.Navigator>
        </NavigationContainer>
    )
}

export default InitialNavigation;