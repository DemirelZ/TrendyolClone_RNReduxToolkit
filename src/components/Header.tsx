import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {height, width} from '../utils/Costants';
import {Sms, Notification} from 'iconsax-react-native';
import CustomInput from './ui/customInput';
import {useNavigation} from '@react-navigation/native';
import {NOTIFICATIONS} from '../utils/routes';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.topLeftConteiner}>
          <CustomInput placeHolder="Marka, ürün veya kategori ara" />
        </View>
        <View style={styles.topRightButtons}>
          <Sms color="gray" size={30} />
          <TouchableOpacity onPress={() => navigation.navigate(NOTIFICATIONS)}>
            <View style={styles.bellContainer}>
              <Notification color="white" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.06,

    padding: 10,
    backgroundColor: 'white',
  },
  topRightButtons: {
    width: width * 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  topLeftConteiner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 100,
  },
});
