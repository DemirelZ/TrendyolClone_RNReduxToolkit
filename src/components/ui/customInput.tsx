import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchNormal} from 'iconsax-react-native';
import {width} from '../../utils/Costants';

type CustomInputProps = {
  placeHolder: string;
};

const CustomInput: React.FC<CustomInputProps> = ({placeHolder}) => {
  return (
    <View style={styles.inputContainer}>
      <SearchNormal color="tomato" size={30} />
      <TextInput style={styles.input} placeholder={placeHolder}></TextInput>
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
