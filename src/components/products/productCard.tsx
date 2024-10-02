import {
  Alert,
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
        borderWidth: 0.3,
        borderRadius: 8,
        margin: 5,
        padding: 5,
      }}>
      <FastImage
        style={{
          width: width * 0.3,
          height: height * 0.2,
          alignSelf: 'center',
        }}
        source={{
          uri: item.image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.web,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text numberOfLines={4} style={{marginVertical: 10}}>
        {item.title}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Text style={{fontSize: 24}}>{concatPrice(item.price)}</Text>
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

const styles = StyleSheet.create({});
