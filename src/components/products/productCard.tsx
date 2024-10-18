import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {height, width} from '../../utils/Costants';
import {concatPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';
import {Heart} from 'iconsax-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite} from '../../store/slices/favouriteSlice';
import {addFavouriteProduct} from '../../store/slices/productSlice';
import FastImage from 'react-native-fast-image';

interface IPoductCardItem {
  item: {
    id: string;
    title: string;
    image: string;
    price: string;
    isFavourite?: boolean;
  };
}

const ProductCard: React.FC<IPoductCardItem> = ({item}) => {
  const navigation = useNavigation();
  //console.log(item);
  const dispatch = useDispatch();

  const favourites = useSelector(state => state.favourites.favourites) || [];

  const isFavourite = favourites.some(fav => fav.id === item.id);

  const handleAddFavourite = () => {
    if (isFavourite) {
      Alert.alert('Information', 'This product is already in your favourites.');
    } else {
      // Ürünü favorilere ekle
      dispatch(addFavourite({...item, isFavourite: true}));
      dispatch(addFavouriteProduct(item));
    }
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(PRODUCTDETAIL, {product: item});
      }}
      style={{
        width: width * 0.4,
        height: height * 0.35,
        backgroundColor: '#fff',

        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 5,
        margin: 5,
        padding: 5,
      }}>
      <View
        style={{
          width: width * 0.3,
          height: height * 0.2,
          alignSelf: 'center',
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
          source={{uri: item.image}}
        />
      </View>
      <Text numberOfLines={3} style={{marginVertical: 5}}>
        {item.title}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Text style={{fontSize: 22}}>{concatPrice(item.price)}</Text>
      </View>
      <TouchableOpacity
        onPress={handleAddFavourite}
        style={{
          position: 'absolute',
          top: 6,
          right: 6,
          padding: 6,
          backgroundColor: 'white',
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
        {item.isFavourite ? (
          <Heart size={26} color="red" variant="Bold" />
        ) : (
          <Heart size={26} color="black" variant="Outline" />
        )}
      </TouchableOpacity>
    </Pressable>
  );
};

export default memo(ProductCard);

const styles = StyleSheet.create({
  deneme: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 3,
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
  },
});
