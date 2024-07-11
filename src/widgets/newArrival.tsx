import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/widgetsHeader';

type Props = {};

const NewArrival = (props: Props) => {
  return (
    <View style={{margin: 5}}>
      <WidgetsHeader title={'New Arrival'} seeAll={true} />
      <Text>NewArrival</Text>
    </View>
  );
};

export default NewArrival;

const styles = StyleSheet.create({});
