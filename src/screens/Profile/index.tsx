import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useEffect} from 'react';

import ListEmtyComponent from '../../components/favourites/listEmtyComponent';
import {
  ArrowCircleRight,
  Clock,
  ProfileCircle,
  Refresh,
  Sticker,
  Tag,
} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../utils/routes';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/ui/CustomButton';
import {height} from '../../utils/Costants';
import {userLogOut} from '../../store/slices/authSlice';
import {getUserInfo} from '../../store/actions/authAction';
import {getInitials} from '../../utils/functions';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLogin, userInfo} = useSelector(state => state.auth);

  useEffect(() => {
    if (isLogin) {
      dispatch(getUserInfo({userId: '1'}));
    }
  }, [isLogin]);

  return (
    <View style={styles.container}>
      {isLogin ? (
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                margin: 10,
                width: 70,
                height: 70,
                backgroundColor: 'tomato',
                borderRadius: 99,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  padding: 10,
                  color: 'white',
                  fontSize: 35,
                  fontWeight: '500',
                }}>
                {getInitials(userInfo?.name)}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 25, fontWeight: '400'}}>
                {userInfo?.name?.firstname} {userInfo?.name?.lastname}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '300',
                  color: 'gray',
                }}>
                {userInfo?.email}
              </Text>
            </View>
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

          <View
            style={{
              borderRadius: 5,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
            <View
              style={{
                alignItems: 'center',
                margin: 10,
                padding: 5,
                paddingHorizontal: 20,
                borderRadius: 5,
                borderRightWidth: 0.5,
                borderRightColor: 'gray',
              }}>
              <Clock size={32} color="black" />
              <Text style={{marginTop: 3}}>Orders</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                margin: 8,
                paddingHorizontal: 20,
                padding: 5,
                borderRadius: 5,
                borderRightWidth: 0.5,
                borderRightColor: 'gray',
              }}>
              <Sticker size="32" color="#FF8A65" />
              <Text>Save</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                margin: 8,
                padding: 3,
                paddingHorizontal: 20,
                borderRadius: 5,
                borderRightWidth: 0.5,
                borderRightColor: 'gray',
              }}>
              <Tag size="32" color="black" />
              <Text>Coupons</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                margin: 8,
                padding: 3,
              }}>
              <Refresh size="32" color="black" />
              <Text style={{textAlign: 'left', marginTop: 3}}>Buy Again</Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
            <Text
              style={{
                marginEnd: 60,
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
              }}>
              Special offer for you!
            </Text>
            <CustomButton
              title="More Information"
              buttonType="bold"
              onPress={() => console.log('basıldı')}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/intro.png')}
              style={{
                width: 390,
                height: 100,
                margin: 10,
                padding: 10,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 5,

              justifyContent: 'space-between',
              margin: 10,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25,
              }}>
              <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                Account Settings
              </Text>
              <Text style={{color: 'tomato', fontWeight: 500}}>See All</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Login & Security
              </Text>
              <ArrowCircleRight size="32" color="black" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Switch Accounts
              </Text>
              <ArrowCircleRight size="32" color="black" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Your Informations
              </Text>
              <ArrowCircleRight size="32" color="black" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Your Trendyol Day
              </Text>
              <ArrowCircleRight size="32" color="black" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Service Request
              </Text>
              <ArrowCircleRight size="32" color="black" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>Contact Us</Text>
              <ArrowCircleRight size="32" color="black" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>Devices</Text>
              <ArrowCircleRight size="32" color="black" />
            </View>
          </View>
        </ScrollView>
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
