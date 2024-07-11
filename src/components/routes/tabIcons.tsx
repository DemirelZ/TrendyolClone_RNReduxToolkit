import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CART, FAVOURITES, HOME, TRENDYOLGO} from '../../utils/routes';
import {Home3, Google, Heart, ShoppingCart, User} from 'iconsax-react-native';

type TabIconsProps = {
  focused: boolean;
  color: string;
  size: number;
  name: string;
};

const TabIcons: React.FC<TabIconsProps> = ({focused, color, size, name}) => {
  if (name == HOME) {
    return (
      <Home3
        color={color}
        size={focused ? 33 : size}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  } else if (name == TRENDYOLGO) {
    return (
      <Google
        color={color}
        size={focused ? 33 : size}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  } else if (name == FAVOURITES) {
    return (
      <Heart
        color={color}
        size={focused ? 33 : size}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  } else if (name == CART) {
    return (
      <ShoppingCart
        color={color}
        size={focused ? 33 : size}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  } else {
    return (
      <User
        color={color}
        size={focused ? 33 : size}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
};

export default TabIcons;

const styles = StyleSheet.create({});
