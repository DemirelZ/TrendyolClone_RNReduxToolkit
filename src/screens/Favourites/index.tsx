import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import FavouriteItem from '../../components/favourites/favouriteItem';
import ListEmtyComponent from '../../components/favourites/listEmtyComponent';
import {Heart} from 'iconsax-react-native';

const Favourites = () => {
  const {favourites} = useSelector(state => state.favourites);
  //console.log('favourites', favourites);

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <ListEmtyComponent
            icon={<Heart size={30} color="tomato" variant="Bold" />}
            title={'Add favorite first product'}
            description="Add the product you like to your favorites and we'll let you know when the price drops"
          />
        }
        data={favourites}
        renderItem={({item}) => <FavouriteItem item={item} />}
      />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
