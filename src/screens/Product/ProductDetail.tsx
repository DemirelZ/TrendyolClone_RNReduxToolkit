import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/Costants';
import {concatPrice} from '../../utils/functions';
import CustomButton from '../../components/ui/CustomButton';
import {Star1} from 'iconsax-react-native';

type Props = {};

const ProductDetail = ({route}) => {
  //console.log(route.params);
  const {product} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Image
          source={{uri: product.image}}
          style={{
            width: width,
            height: height * 0.3,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
        <Text style={{margin: 10, fontSize: 30, fontWeight: '500'}}>
          {product.title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 20, fontWeight: '500'}}>
            {product.rating.rate} |
          </Text>
          <Star1 size="28" color="#ffa41c" variant="Bold" />
        </View>
        <Text style={{margin: 10, fontSize: 18}}>{product.description}</Text>
      </ScrollView>
      <View
        style={{
          height: height * 0.09,
          flexDirection: 'row',
          borderTopWidth: 0.3,
          borderTopColor: 'gray',
          paddingTop: 10,
        }}>
        <View
          style={{
            height: height * 0.08,
            flex: 1,
          }}>
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'tomato', fontSize: 26, fontWeight: '500'}}>
              {concatPrice(product.price)}
            </Text>
          </View>
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'green', fontSize: 14, fontWeight: '500'}}>
              Free Shipping
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.08,
            flex: 3,
          }}>
          <CustomButton
            title="Buy Now"
            buttonType="outLine"
            onPress={() => Alert.alert('merhaba')}
          />
          <CustomButton
            title="Add to Cart"
            buttonType="bold"
            onPress={() => Alert.alert('merhaba')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
