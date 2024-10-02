import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCart} from '../../store/actions/cartActions';
import {height} from '../../utils/Costants';
import {concatPrice} from '../../utils/functions';
import CustomButton from '../../components/ui/CustomButton';
import CartItem from '../../components/cart/cartItem';

type Props = {};

const Cart = (props: Props) => {
  const dispatch = useDispatch();
  const {cart, pending, totalPrice} = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCart({userId: '2'}));
  }, []);

  return (
    <View style={styles.container}>
      {pending ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'gray'} />
        </View>
      ) : (
        <FlatList
          data={cart}
          renderItem={({item}) => <CartItem item={item} />}
        />
      )}
      <View
        style={{
          height: height * 0.09,
          flexDirection: 'row',
          borderTopWidth: 0.3,
          borderTopColor: 'gray',
          paddingTop: 10,
        }}>
        <View
          style={{
            height: height * 0.08,
            flex: 1,
            paddingLeft: 10,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              Sum:
            </Text>
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Text
              numberOfLines={1}
              style={{
                color: 'black',
                fontSize: 26,
                fontWeight: '500',
              }}>
              {concatPrice(totalPrice)}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.08,
            flex: 2,
          }}>
          <CustomButton title="Checkout" buttonType="bold" />
        </View>
      </View>
    </View>
  );
};

export default memo(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
