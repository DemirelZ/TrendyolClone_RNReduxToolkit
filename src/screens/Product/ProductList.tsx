import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {getSpesificCategory} from '../../store/actions/categoryAction';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../components/products/productCard';
import {height} from '../../utils/Costants';
import {useRoute} from '@react-navigation/native';

type Props = {};

const ProductList = () => {
  const route = useRoute();
  const {categoryType} = route.params;
  //console.log(categoryType);
  const dispatch = useDispatch();
  const {productsByCategry, selectedCategory, pending} = useSelector(
    state => state.categories,
  );
  const {products} = useSelector(state => state.products);

  if (categoryType == 'NewArrivals')
    useEffect(() => {
      dispatch(getSpesificCategory(selectedCategory));
    }, [selectedCategory]);

  if (categoryType == 'SpecialProducts') {
    return (
      <View
        style={{
          marginHorizontal: 5,
          paddingVertical: 50,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {pending ? (
          <ActivityIndicator style={{height: height * 0.36}} size={'large'} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={productsByCategry}
            renderItem={({item}) => <ProductCard item={item} />}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    );
  }

  if (categoryType == 'NewArrival') {
    const renderItem: ListRenderItem<productCardItem> = ({item}) => (
      <ProductCard item={item} />
    );
    return (
      <View
        style={{
          marginHorizontal: 5,
          paddingVertical: 50,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default ProductList;

const styles = StyleSheet.create({});
