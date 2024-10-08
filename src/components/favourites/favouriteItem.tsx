import React, {memo} from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {Product} from '../../models/models';
import {PRODUCTDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {height, width} from '../../utils/Costants';

import CustomButton from '../ui/CustomButton';
import {updateCart} from '../../store/actions/cartActions';

const FavouriteItem: React.FC<Product> = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 10,
          padding: 5,
          paddingHorizontal: 10,
        }}>
        <View style={{padding: 5}}>
          {item?.image && (
            <Image style={styles.image} source={{uri: item?.image}} />
          )}
        </View>
        <View style={{flex: 1, padding: 8}}>
          <Text style={styles.title} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={styles.count} numberOfLines={1}>
            Count:{item?.description}
          </Text>
          <Text style={{color: 'green', fontSize: 16, marginTop: 6}}>
            Free Shipping
          </Text>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 20,
            }}>
            <Text style={styles.price}>${item?.price}</Text>
          </View>
        </View>
      </View>
      <CustomButton
        title="Remove"
        buttonType="outLine"
        onPress={() =>
          dispatch(
            updateCart(
              {
                userId: 2,
                date: '2019-12-10',
                products: [{productId: item.id, quantity: 3}],
              },
              '2',
            ),
          )
        }
      />
      <CustomButton
        title="Add to Cart"
        buttonType="bold"
        onPress={() =>
          dispatch(
            updateCart(
              {
                userId: 2,
                date: '2019-12-10',
                products: [{productId: item.id, quantity: 3}],
              },
              '2',
            ),
          )
        }
      />
    </Pressable>
  );
};

/* 
     <CustomButton
          title="Remove"
          buttonType="full"
          onPress={handleRemoveItem}
        />
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    padding: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  count: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
  price: {
    flex: 1,
    marginBottom: 6,
    color: 'tomato',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default memo(FavouriteItem);
