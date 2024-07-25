import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const ProductDetail = ({route}) => {
  //console.log(route.params);
  const {product} = route.params;
  return (
    <SafeAreaView>
      <Text>{product.title}</Text>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
