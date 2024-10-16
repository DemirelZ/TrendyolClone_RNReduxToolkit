import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import widgets from '../../widgets/widgets.json';
import Introduction from '../../widgets/introduction';
import SpecialProducts from '../../widgets/specialProducts';
import NewArrival from '../../widgets/newArrival';
import BestSeller from '../../widgets/bestSeller';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/actions/productActions';
import {getCategories} from '../../store/actions/categoryAction';
import CategoriyCard from '../../components/Categories/CategoriyCard';
import {getCart} from '../../store/actions/cartActions';
import messaging from '@react-native-firebase/messaging';

interface WidgetItem {
  id: string;
  component: string;
  title: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories);

  async function requestUserPermission() {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token);
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    requestUserPermission();
    dispatch(getCart({userId: '2'}));
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  const widgetItem = (item: WidgetItem) => {
    switch (item.component) {
      case 'introduction':
        return <Introduction />;
      case 'SpecialProducts':
        return <SpecialProducts />;
      case 'NewArrival':
        return <NewArrival />;
      case 'BestSeller':
        return <BestSeller />;
      default:
        return <BestSeller />;
    }
  };

  const renderItem: ListRenderItem<WidgetItem> = ({item}) => widgetItem(item);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <CategoriyCard item={item} />}
      />
      <FlatList
        data={widgets}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
