import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/Costants';
import CustomButton from '../ui/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Home from '../../screens/home';

interface ListEmtyComponentProps {
  icon: any;
  title: string;
  description: string;
  buttonTitle: string;
  buttonOnpress: () => void;
}

const ListEmtyComponent: React.FC<ListEmtyComponentProps> = ({
  title,
  description,
  icon,
  buttonTitle,
  buttonOnpress,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

        height: height - 200,
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
      <Text
        style={{
          padding: 30,
          fontSize: 30,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        {title}
      </Text>
      <Text style={{fontSize: 28, textAlign: 'center', color: 'gray'}}>
        {description}
      </Text>
      <View style={{width: width - 40, height: height * 0.06, marginTop: 20}}>
        <CustomButton
          title={buttonTitle}
          buttonType="bold"
          onPress={buttonOnpress}
        />
      </View>
    </View>
  );
};

export default ListEmtyComponent;

const styles = StyleSheet.create({});
