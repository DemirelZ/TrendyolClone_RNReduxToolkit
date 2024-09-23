import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ListEmtyComponent from '../../components/favourites/listEmtyComponent';
import {ProfileCircle} from 'iconsax-react-native';

const Profile = () => {
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
          buttonOnpress={() => console.log('giriş')}
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
