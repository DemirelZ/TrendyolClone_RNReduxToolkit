import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';

type Props = {};

const SpecialProducts = (props: Props) => {
  return (
    <View style={{margin: 5}}>
      <WidgetsHeader title={'Special Products'} seeAll={true} />
      <Text>SpecialProducts</Text>
    </View>
  );
};

export default SpecialProducts;

const styles = StyleSheet.create({});
