import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LOGIN, PRODUCTDETAIL, PRODUCTLIST, TAB} from '../utils/routes';
import TabNavigation from './tabNavigation';

import ProductList from '../screens/Product/ProductList';
import ProductDetail from '../screens/Product/ProductDetail';
import Login from '../screens/Login/Login';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TAB} component={TabNavigation} />
      <Stack.Screen name={PRODUCTDETAIL} component={ProductDetail} />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
