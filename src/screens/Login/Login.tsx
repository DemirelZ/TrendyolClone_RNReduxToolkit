import React, {useEffect} from 'react';

import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import CustomInput from '../../components/ui/customInput';

import {height, width} from '../../utils/Costants';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {CloseCircle} from 'iconsax-react-native';

import CustomButton from '../../components/ui/CustomButton';
import {loginSchema} from '../../utils/validationSchema';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {isLogin, pending} = useSelector(state => state.auth);
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={{flex: 1, backgroundColor: 'tomato'}}>
        <View
          style={{
            position: 'absolute',
            top: 150,
            zIndex: 99,
            right: 8,
            width: 40,
            height: 40,
          }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'tomato',
              padding: 5,
              borderRadius: 100,
              shadowColor: 'white',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            }}>
            <CloseCircle size="32" color="white" />
          </Pressable>
        </View>
        <Image
          source={require('../../assets/images/login.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Formik
        initialValues={{username: 'mor_2314', password: '83r5^_'}}
        validationSchema={loginSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => console.log('Values', values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.loginBox}>
              <CustomInput
                placeHolder="Username"
                showIcon={false}
                placeholderTextColor={'gray'}
                value={values.username}
                onChangeText={handleChange('username')}
                errorText={errors?.username}
              />
              <CustomInput
                secureTextEntry={true}
                placeHolder="Password"
                showIcon={false}
                placeholderTextColor={'gray'}
                value={values.password}
                onChangeText={handleChange('password')}
                errorText={errors?.password}
              />
              <View
                style={{
                  width: '100%',
                  height: height * 0.06,
                  marginVertical: 10,
                }}>
                <CustomButton
                  pending={pending}
                  title="Sign In"
                  buttonType="bold"
                  onPress={handleSubmit}
                />
              </View>
              <View
                style={{
                  width: 330,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <Pressable>
                  <Text
                    style={{
                      color: 'tomato',
                      textDecorationLine: 'underline',
                    }}>
                    Forgot Password
                  </Text>
                </Pressable>
                <Pressable>
                  <Text>
                    Click for{' '}
                    <Text
                      style={{
                        color: 'tomato',
                        textDecorationLine: 'underline',
                      }}>
                      SignUp
                    </Text>
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height * 0.6,
  },
  loginBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 40,
    height: height * 0.35,
    position: 'absolute',
    backgroundColor: 'white',
    top: -height * 0.08,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'tomato',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default Login;
