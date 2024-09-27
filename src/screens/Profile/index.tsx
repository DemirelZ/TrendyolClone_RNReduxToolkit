import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ListEmtyComponent from '../../components/favourites/listEmtyComponent';
import {ProfileCircle} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../utils/routes';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/ui/CustomButton';
import {height} from '../../utils/Costants';
import {userLogOut} from '../../store/slices/authSlice';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.auth);

  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <Text>Profile</Text>
          <View
            style={{
              width: '100%',
              height: height * 0.06,
              marginVertical: 10,
            }}>
            <CustomButton
              title="Log Out"
              buttonType="bold"
              onPress={() => dispatch(userLogOut())}
            />
          </View>
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
