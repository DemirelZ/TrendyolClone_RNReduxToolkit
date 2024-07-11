import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface WidgetsHeaderProps {
  title: string;
  seeAll: boolean;
}

const WidgetsHeader: React.FC<WidgetsHeaderProps> = ({title, seeAll}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>{title}</Text>
      {seeAll && (
        <TouchableOpacity>
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
