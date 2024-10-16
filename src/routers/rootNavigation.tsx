import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, StyleSheet} from 'react-native';
import {
  LOGIN,
  NOTIFICATIONS,
  PRODUCTDETAIL,
  PRODUCTLIST,
  TAB,
} from '../utils/routes';
import TabNavigation from './tabNavigation';
import ProductList from '../screens/Product/ProductList';
import ProductDetail from '../screens/Product/ProductDetail';
import Login from '../screens/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {userLoginCheck} from '../store/slices/authSlice';
import messaging from '@react-native-firebase/messaging';

import Header from '../components/Header';
import Notifications from '../screens/Notifications';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        dispatch(userLoginCheck(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'tomato',
      }}>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
        name={TAB}
        component={TabNavigation}
      />
      <Stack.Screen
        name={PRODUCTDETAIL}
        component={ProductDetail}
        options={{
          headerTitle: 'Product Detail',
        }}
      />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={NOTIFICATIONS} component={Notifications} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
