import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/Costants';
import {concatPrice} from '../../utils/functions';
import CustomButton from '../../components/ui/CustomButton';
import {Heart, Star1} from 'iconsax-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCart} from '../../store/actions/cartActions';
import {RouteProp} from '@react-navigation/native';
import {addFavourite} from '../../store/slices/favouriteSlice';
import {addFavouriteProduct} from '../../store/slices/productSlice';

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  isFavourite: boolean;
};

type RootStackParamList = {
  ProductDetail: {product: Product};
};

// Route prop'u doğru şekilde tipleyelim
type Props = {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
};

const ProductDetail: React.FC<Props> = ({route}) => {
  //console.log(route.params);
  const {product} = route.params;
  //console.log(product);
  const dispatch = useDispatch();

  const favourites = useSelector(state => state.favourites.favourites) || [];

  const isFavourite = favourites.some(fav => fav.id === product.id);

  const handleAddFavourite = () => {
    if (isFavourite) {
      Alert.alert('Information', 'This product is already in your favourites.');
    } else {
      // Ürünü favorilere ekle
      dispatch(addFavourite({...product, isFavourite: true}));
      dispatch(addFavouriteProduct(product));
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Image
          source={{uri: product.image}}
          style={{
            width: width,
            height: height * 0.3,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
        <Text style={{margin: 10, fontSize: 30, fontWeight: '500'}}>
          {product.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 20, fontWeight: '500'}}>
              {product.rating.rate} |
            </Text>
            <Star1 size="28" color="#ffa41c" variant="Bold" />
          </View>
          <TouchableOpacity
            onPress={handleAddFavourite}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              backgroundColor: 'white',
              marginRight: 10,
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 100,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            {product.isFavourite ? (
              <Heart size={26} color="red" variant="Bold" />
            ) : (
              <Heart size={26} color="black" variant="Outline" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{margin: 10, fontSize: 18}}>{product.description}</Text>
      </ScrollView>
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
          }}>
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'tomato', fontSize: 26, fontWeight: '500'}}>
              {concatPrice(product.price)}
            </Text>
          </View>
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'green', fontSize: 14, fontWeight: '500'}}>
              Free Shipping
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.08,
            flex: 3,
          }}>
          <CustomButton
            title="Buy Now"
            buttonType="outLine"
            onPress={() => Alert.alert('merhaba')}
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
                    products: [{productId: product.id, quantity: 3}],
                  },
                  '2',
                ),
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
