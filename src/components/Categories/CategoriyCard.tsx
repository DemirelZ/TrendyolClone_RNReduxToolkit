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
                borderWidth: 0.3,
                borderRadius: 100,
              }
        }>
        <Text
          style={
            selectedCategory === item
              ? styles.selecteTextStyle
              : {
                  paddingHorizontal: 14,
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
    borderWidth: 0.3,
    borderRadius: 100,
    backgroundColor: 'tomato',
  },
  selecteTextStyle: {
    color: 'white',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
});
