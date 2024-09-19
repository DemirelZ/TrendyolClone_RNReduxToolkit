import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ListEmtyComponentProps {
  icon: any;
  title: string;
  description: string;
}

const ListEmtyComponent: React.FC<ListEmtyComponentProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <View
        style={{
          padding: 30,
          borderRadius: 50,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'tomato',
        }}>
        {icon}
      </View>
      <Text style={{padding: 30, fontSize: 30, fontWeight: '500'}}>
        {title}
      </Text>
      <Text style={{fontSize: 28, textAlign: 'center', color: 'gray'}}>
        {description}
      </Text>
    </View>
  );
};

export default ListEmtyComponent;

const styles = StyleSheet.create({});
