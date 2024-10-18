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
import {addNotificationsToRemote} from '../store/actions/notificationAction';
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
      console.error('Error reading value', e);
    }
  };

  useEffect(() => {
    getData();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // notification objesindeki title ve body bilgilerini alıyoruz
      const notification = remoteMessage?.notification || {};

      dispatch(
        addNotificationsToRemote({
          title: notification.title || 'Default Title',
          description: notification.body || 'No description provided',
          productId: null, // `productId` verisi gelen mesajda yok, o yüzden null gönderiyoruz
          url: null, // `url` bilgisi de yoksa null olarak gönderiyoruz
        }),
      );
    });

    return () => {
      unsubscribe(); // Cleanup
    };
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
