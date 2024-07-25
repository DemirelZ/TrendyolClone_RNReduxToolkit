import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PRODUCTDETAIL, PRODUCTLIST, TAB} from '../utils/routes';
import TabNavigation from './tabNavigation';
import ProductDetail from '../screens/Product/ProductDetail';
import ProductList from '../screens/Product/ProductList';
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
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
