import React, {useEffect, useState, memo} from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {Cart} from '../../models/models';
import {PRODUCTDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {PRODUCTS_URL} from '../../service/URL';
import {getRequest} from '../../service/VERB';
import {height, width} from '../../utils/Costants';
import CustomButton from '../ui/CustomButton';
import {setTotalPrice} from '../../store/slices/cartSlice';

const CartItem: React.FC<Cart> = ({item}) => {
  const [product, setProduct] = useState<object>({});
  const [productPrice, setProductPrice] = useState<number[]>([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const productUrl: string = `${PRODUCTS_URL}/${item.productId}`;
    getRequest(productUrl).then(data => {
      setProduct(data.data);
    });
  }, []);

  /*
  const handleRemoveItem = () => {
    dispatch(deleteItemCart({productId: item.productId, price: product.price}));
    onChangePrice(-product.price); // Fiyatı çıkar
  };
  */

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: product})}>
      <View style={{padding: 5}}>
        {product?.image && (
          <Image style={styles.image} source={{uri: product?.image}} />
        )}
      </View>
      <View style={{flex: 1, padding: 8}}>
        <Text style={styles.title} numberOfLines={1}>
          {product?.title}
        </Text>
        <Text style={styles.count} numberOfLines={1}>
          Count:{product?.description}
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
          <Text style={styles.price}>${product?.price}</Text>
        </View>
      </View>
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
    flexDirection: 'row',
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
    marginBottom: 6,
    color: 'tomato',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default memo(CartItem);
