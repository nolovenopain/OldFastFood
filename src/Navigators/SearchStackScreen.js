import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Screens/Search/Search';

const SearchStack = createStackNavigator();

function SearchNavigation() {
    return(
        <SearchStack.Navigator
            initialRouteName='Search'
            screenOptions={{ headerShown: false }}
        >
            <SearchStack.Screen
                name='Search'
                component={Search}
            />
        </SearchStack.Navigator>
    )
}

export default SearchNavigation;