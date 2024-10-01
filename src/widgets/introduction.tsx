import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {height, width} from '../utils/Costants';
import FastImage from 'react-native-fast-image';

type Props = {};

const Introduction = (props: Props) => {
  return (
    <View style={{margin: 'auto'}}>
      <WidgetsHeader title={'Introduction'} seeAll={false} />
      <FastImage
        defaultSource={require('../assets/images/saleFlash.jpg')}
        source={{
          uri: require('../assets/images/saleFlash.jpg'),
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.cacheOnly,
        }}
        style={{
          width: width,
          height: height * 0.24,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({});
