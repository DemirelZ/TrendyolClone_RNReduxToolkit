import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  buttonType: string;
  title: string;
  pending?: boolean;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonType,
  title,
  onPress,
}) => {
  if (buttonType == 'bold')
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          margin: 5,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'tomato',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  if (buttonType == 'outLine')
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          margin: 5,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'tomato',
          borderRadius: 10,
        }}>
        <Text style={{color: 'tomato', fontSize: 20, fontWeight: '500'}}>
          {title}
        </Text>
      </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({});
