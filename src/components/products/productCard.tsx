import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/Costants';
import {concatPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';
import {Heart, HeartAdd} from 'iconsax-react-native';
import {useDispatch} from 'react-redux';
import {addFavourite} from '../../store/slices/favouriteSlice';

interface IPoductCardItem {
  item: {
    id: string;
    title: string;
    image: string;
    price: string;
  };
}

const ProductCard: React.FC<IPoductCardItem> = ({item}) => {
  const navigation = useNavigation();
  //console.log(item);
  const dispatch = useDispatch();
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
      <Image
        style={{
          width: width * 0.3,
          height: height * 0.2,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
        source={{uri: item.image}}
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
        onPress={() => dispatch(addFavourite(item))}
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
        <Heart size={26} color="black" />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
