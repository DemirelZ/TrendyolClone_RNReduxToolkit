import {useNavigation} from '@react-navigation/native';
import {Notification} from 'iconsax-react-native';
import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';

import {useDispatch} from 'react-redux';
import {PRODUCTDETAIL} from '../../utils/routes';

const NotificationItem: React.FC = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {id: item.productId})}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Notification color="tomato" size={32} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'black',
            marginVertical: 5,
          }}>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
        <Text> Estimated Date: {item.date}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderBottomWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    gap: 30,
  },
});

export default NotificationItem;
