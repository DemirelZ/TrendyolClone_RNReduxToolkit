import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/Costants';
import {concatPrice} from '../../utils/functions';

interface IPoductCardItem {
  item: {
    id: string;
    title: string;
    image: string;
    price: string;
  };
}

const ProductCard: React.FC<IPoductCardItem> = ({item}) => {
  console.log(item);
  return (
    <View
      style={{
        width: width * 0.4,
        height: height * 0.35,
        borderWidth: 0.5,
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
      <Text style={{marginVertical: 10}}>{item.title}</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Text style={{fontSize: 24}}>{concatPrice(item.price)}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
