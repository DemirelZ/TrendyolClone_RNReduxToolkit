import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchNormal} from 'iconsax-react-native';
import {height, width} from '../../utils/Costants';

type CustomInputProps = {
  placeHolder: string;
  showIcon: boolean;
  placeholderTextColor: string;
  value: string;
  onChangeText: any;
  errorText: string;
  secureTextEntry: boolean;
};

const CustomInput: React.FC<CustomInputProps> = ({
  placeHolder,
  showIcon = true,
  placeholderTextColor,
  value,
  onChangeText,
  errorText,
  secureTextEntry = false,
}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.inputContainer}>
        {showIcon && <SearchNormal color={'tomato'} size={30} />}
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}></TextInput>
      </View>
      {errorText && <Text style={{color: 'red'}}>{errorText}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: height * 0.05,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#faf9f9',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#faf9f9',
    fontSize: 22,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
