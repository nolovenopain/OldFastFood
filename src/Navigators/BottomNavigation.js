import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PromotionsStackScreen from './PromotionsStackScreen';
import SearchStackScreen from './SearchStackScreen';
import MenuStackScreen from './MenuStackScreen';
import OrderStackSreen from './OrderStackSreen';
import MyAccountStackScreen from './MyAccountStackScreen';
import { orange } from '../Components/Colors/Color';

const Tab = createBottomTabNavigator();

function BottomNavigation(navigation) {
    return (
        <Tab.Navigator
            initialRouteName= "MenuStackScreen" 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == 'PromotionsStackScreen') {
                        iconName = focused ? 'pricetags-outline' : 'pricetags-outline';
                    } else if (route.name == 'SearchStackScreen') {
                        iconName = focused ? 'search-outline' : 'search-outline';
                        size = 30
                    } else if (route.name == 'OrderStackSreen') {
                        iconName = focused ? 'cart-outline' : 'cart-outline';
                        size = 30
                    } else if (route.name == 'MyAccountStackScreen') {
                        iconName = focused ? 'person-outline' : 'person-outline';
                        size = 28
                    } else if (route.name == 'MenuStackScreen') {
                        // return (
                        //     <MainButton navigation={navigation} focused={focused}/>
                        // )
                        iconName = focused ? 'document-text-outline' : 'document-text-outline';
                        size = 30
                    }
                    return  <Icon name={iconName} size={size} color={color}/>         
                },
            })}
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: 'gray',
                keyboardHidesTabBar: true,
                tabStyle: {
                    paddingTop: 15, 
                    backgroundColor: orange
                }
            }}
            lazy={false}
        >
            <Tab.Screen name="PromotionsStackScreen" component={PromotionsStackScreen} options={{ title: '' }}/>
            <Tab.Screen name="SearchStackScreen" component={SearchStackScreen} options={{ title: '' }}/>
            <Tab.Screen name="MenuStackScreen" component={MenuStackScreen} options={{ title: '' }} />
            <Tab.Screen name="OrderStackSreen" component={OrderStackSreen} options={{ title: '' }} />
            <Tab.Screen name="MyAccountStackScreen" component={MyAccountStackScreen} options={{ title: '' }} />
        </Tab.Navigator>
    );
}

export default BottomNavigation;