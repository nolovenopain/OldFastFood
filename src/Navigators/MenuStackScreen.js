import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Menu from '../Screens/Menu/Menu';
import CategoryDetails from '../Screens/CategoryDetails/CategoryDetails';

const MenuStack = createStackNavigator();

function MenuNavigation({ navigation, route }) {

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName == 'CategoryDetails') {
            navigation.setOptions({ tabBarVisible: false })
        }
        else {
            navigation.setOptions({ tabBarVisible: true })
        }
    }, [navigation, route]);

    return(
        <MenuStack.Navigator
            initialRouteName='Menu'
            screenOptions={{ headerShown: false }}
        >
            <MenuStack.Screen
                name='Menu'
                component={Menu}
            />
            <MenuStack.Screen
                name='CategoryDetails'
                component={CategoryDetails}
            />
        </MenuStack.Navigator>
    )
}

export default MenuNavigation;