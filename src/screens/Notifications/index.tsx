import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect} from 'react';
import ListEmtyComponent from '../../components/favourites/listEmtyComponent';
import {Notification} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import Home from '../home';
import {useDispatch, useSelector} from 'react-redux';
import {getNotifications} from '../../store/actions/notificationAction';
import NotificationItem from '../../components/notification/notificationItem';

type Props = {};

const Notifications = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {notifications, pending} = useSelector(state => state.notification);

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <ListEmtyComponent
            icon={<Notification size={30} color="tomato" variant="Bold" />}
            title={'Notifications'}
            description="No notification yet"
            buttonOnpress={() => navigation.navigate(Home)}
            buttonTitle="Keep shopping"
          />
        }
        data={notifications}
        renderItem={({item}) => <NotificationItem item={item} />}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
