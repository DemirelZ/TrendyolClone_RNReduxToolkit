import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeCategory} from '../../store/slices/categorySlice';

type CategoriyCardProps = {
  item: string;
};

const CategoriyCard: React.FC<CategoriyCardProps> = ({item}) => {
  const {selectedCategory} = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const selectedCategoryHandle = () => {
    dispatch(changeCategory(item));
  };
  return (
    <View
      style={{
        padding: 6,
      }}>
      <TouchableOpacity
        onPress={selectedCategoryHandle}
        style={
          selectedCategory === item
            ? styles.selecteButtonStyle
            : {
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }
        }>
        <Text
          style={
            selectedCategory === item
              ? styles.selecteTextStyle
              : {
                  color: 'black',
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                }
          }>
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriyCard;

const styles = StyleSheet.create({
  selecteButtonStyle: {
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    backgroundColor: 'tomato',
  },
  selecteTextStyle: {
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
