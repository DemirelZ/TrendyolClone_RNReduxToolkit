import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {useSelector} from 'react-redux';
import ProductCard from '../components/products/productCard';

type Props = {};

interface productCardItem {
  id: string;
  title: string;
  image: string;
}

const NewArrival: React.FC = () => {
  const {products} = useSelector(state => state.products);

  const renderItem: ListRenderItem<productCardItem> = ({item}) => (
    <ProductCard item={item} />
  );

  return (
    <View style={{margin: 5, backgroundColor: 'white'}}>
      <WidgetsHeader title={'New Arrival'} seeAll={true} type="NewArrival" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(NewArrival);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
