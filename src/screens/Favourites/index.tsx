import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCart} from '../../store/actions/cartActions';
import {height} from '../../utils/Costants';
import {concatPrice} from '../../utils/functions';
import CustomButton from '../../components/ui/CustomButton';
import CartItem from '../../components/cart/cartItem';
import FavouriteItem from '../../components/favourites/favouriteItem';

type Props = {};

const Favourites = (props: Props) => {
  const dispatch = useDispatch();
  const {favourites} = useSelector(state => state.favourites);
  console.log('favourites', favourites);

  return (
    <View style={styles.container}>
      <FlatList
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
