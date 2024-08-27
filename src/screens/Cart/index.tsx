import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getCart} from '../../store/actions/cartActions';

type Props = {};

const Cart = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart({userId: '2'}));
  }, []);

  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
