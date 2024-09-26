import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
  pending,
}) => {
  if (buttonType == 'bold')
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={pending} // Buton pending iken devre dışı bırakılıyor
        style={{
          flex: 1,
          margin: 5,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: pending ? 'gray' : 'tomato', // Stili de değiştiriyoruz
          borderRadius: 10,
        }}>
        {!pending && (
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
            {title}
          </Text>
        )}
        {pending && <ActivityIndicator color={'white'} />}
      </TouchableOpacity>
    );
  if (buttonType == 'outLine')
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={pending} // Buton pending iken devre dışı bırakılıyor
        style={{
          flex: 1,
          margin: 5,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: pending ? 'gray' : 'tomato', // Stili de değiştiriyoruz
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: pending ? 'gray' : 'tomato',
            fontSize: 20,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({});
