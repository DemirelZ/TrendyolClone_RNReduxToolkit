import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
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
import Notifications from '../screens/Notifications/notifications';
import Header from '../components/Header';
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
      <Stack.Screen name={PRODUCTDETAIL} component={ProductDetail} />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={NOTIFICATIONS} component={Notifications} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
