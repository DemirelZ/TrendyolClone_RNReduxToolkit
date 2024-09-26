import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ListEmtyComponent from '../../components/favourites/listEmtyComponent';
import {ProfileCircle} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../utils/routes';
import {useSelector} from 'react-redux';

const Profile = () => {
  const navigation = useNavigation();
  const {isLogin} = useSelector(state => state.auth);

  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <Text>Profile</Text>
        </View>
      ) : (
        <ListEmtyComponent
          icon={<ProfileCircle size={40} color="tomato" variant="Bold" />}
          title="My Account"
          description="Log in to view your account. You can follow your orders and elite membership status from your account"
          buttonTitle="Login"
          buttonOnpress={() => navigation.navigate(LOGIN)}
        />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
