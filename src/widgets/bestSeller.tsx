import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';

type Props = {};

const BestSeller = (props: Props) => {
  return (
    <View style={{margin: 5}}>
      <WidgetsHeader title={'Best Seller'} seeAll={true} />
      <Text>BestSeller</Text>
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({});
