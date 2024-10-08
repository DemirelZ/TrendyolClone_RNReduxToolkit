import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {CART, FAVOURITES, HOME, PROFILE, TRENDYOLGO} from '../utils/routes';
import TrendyolGo from '../screens/trendyolGo';
import Favourites from '../screens/Favourites';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import {Home3} from 'iconsax-react-native';
import TabIcons from '../components/routes/tabIcons';
import Header from '../components/Header';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const quantity = useSelector(state => state.cart.cart).length;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcons
            focused={focused}
            color={color}
            size={size}
            name={route.name}
          />
        ),
        headerShown: false,

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={FAVOURITES} component={Favourites} />
      <Tab.Screen
        name={CART}
        component={Cart}
        options={{
          tabBarBadge: quantity,
          tabBarBadgeStyle: {
            backgroundColor: 'tomato',
            color: 'white',
          },
        }}
      />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
