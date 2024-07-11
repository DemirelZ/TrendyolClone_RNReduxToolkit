import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';

type Props = {};

const Introduction = (props: Props) => {
  return (
    <View style={{margin: 5}}>
      <WidgetsHeader title={'Introduction'} seeAll={false} />
      <Text>Introduction</Text>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({});
