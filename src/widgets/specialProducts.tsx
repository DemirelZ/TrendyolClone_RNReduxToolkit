import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../components/products/productCard';
import {getSpesificCategory} from '../store/actions/categoryAction';
import {height} from '../utils/Costants';

type Props = {};

const SpecialProducts = (props: Props) => {
  const dispatch = useDispatch();
  const {productsByCategry, selectedCategory, pending} = useSelector(
    state => state.categories,
  );
  useEffect(() => {
    dispatch(getSpesificCategory(selectedCategory));
  }, [selectedCategory]);

  return (
    <View style={{margin: 5}}>
      <WidgetsHeader
        title={'Special Products'}
        seeAll={true}
        type={'SpecialProducts'}
      />
      {pending ? (
        <ActivityIndicator style={{height: height * 0.36}} size={'large'} />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={productsByCategry}
          renderItem={({item}) => <ProductCard item={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default SpecialProducts;

const styles = StyleSheet.create({});
