import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

interface WidgetsHeaderProps {
  title: string;
  seeAll: boolean;
  type: string;
}

const WidgetsHeader: React.FC<WidgetsHeaderProps> = ({title, seeAll, type}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>{title}</Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(PRODUCTLIST, {categoryType: type});
          }}>
          <Text style={{fontSize: 16, color: 'tomato', fontWeight: '500'}}>
            See All
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WidgetsHeader;

const styles = StyleSheet.create({});
