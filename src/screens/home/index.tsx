import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import widgets from '../../widgets/widgets.json';
import Introduction from '../../widgets/introduction';
import SpecialProducts from '../../widgets/specialProducts';
import NewArrival from '../../widgets/newArrival';
import BestSeller from '../../widgets/bestSeller';

interface WidgetItem {
  id: number;
  component: string;
  title: string;
}

const Home = () => {
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
    <SafeAreaView>
      <FlatList
        data={widgets}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
