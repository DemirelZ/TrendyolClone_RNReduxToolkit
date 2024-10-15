import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {height, width} from '../utils/Costants';

type Props = {};

const Introduction = (props: Props) => {
  return (
    <View style={{margin: 'auto'}}>
      <WidgetsHeader title={'Introduction'} seeAll={false} />
      <Image
        source={require('../assets/images/saleFlash.jpg')}
        style={{
          width: width,
          height: height * 0.24,
        }}
      />
    </View>
  );
};

export default memo(Introduction);

const styles = StyleSheet.create({});
