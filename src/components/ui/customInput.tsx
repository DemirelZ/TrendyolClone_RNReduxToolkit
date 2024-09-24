import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchNormal} from 'iconsax-react-native';
import {width} from '../../utils/Costants';

type CustomInputProps = {
  placeHolder: string;
  showIcon: boolean;
  placeholderTextColor: string;
  value: string;
  onChangeText: any;
  errorText: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  placeHolder,
  showIcon = true,
  placeholderTextColor,
  value,
  onChangeText,
  errorText,
}) => {
  return (
    <View style={styles.inputContainer}>
      {showIcon && <SearchNormal color={'tomato'} size={30} />}
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}></TextInput>
      {errorText && <Text>{errorText}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
    padding: 5,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    fontSize: 22,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
