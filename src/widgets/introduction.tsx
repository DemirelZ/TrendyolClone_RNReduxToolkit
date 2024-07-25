import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {height, width} from '../utils/Costants';

type Props = {};

const Introduction = (props: Props) => {
  return (
    <View style={{margin: 5}}>
      <WidgetsHeader title={'Introduction'} seeAll={false} />
      <Image
        source={require('../assets/images/saleFlash.jpg')}
        style={{
          width: width - 10,
          height: height * 0.24,
          resizeMode: 'cover',
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({});
