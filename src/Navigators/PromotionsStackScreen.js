import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Promotions from '../Screens/Promotions/Promotions';
import PromotionDetails from '../Screens/PromotionDetails/PromotionDetails';

const PromotionsStack = createStackNavigator();

function PromotionsNavigation({ navigation, route }) {
    
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName == 'PromotionDetails') {
            navigation.setOptions({ tabBarVisible: false })
        }
        else {
            navigation.setOptions({ tabBarVisible: true })
        }
    }, [navigation, route]);

    return(
        <PromotionsStack.Navigator
            initialRouteName='Promotions'
            screenOptions={{ headerShown: false }}
        >
            <PromotionsStack.Screen
                name='Promotions'
                component={Promotions}
            />
             <PromotionsStack.Screen
                name='PromotionDetails'
                component={PromotionDetails}
            />
        </PromotionsStack.Navigator>
    )
}

export default PromotionsNavigation;