import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListEmtyComponent from '../../components/favourites/listEmtyComponent';
import {Heart, Notification} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import Home from '../home';
import {PRODUCTLIST} from '../../utils/routes';
import {useSelector} from 'react-redux';

type Props = {};

const Notifications = (props: Props) => {
  const navigation = useNavigation();

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
        data={[]}
        renderItem={({item}) => <Text>MErhaba</Text>}
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
