import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/routers/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';

type Props = {};

const App = (props: Props) => {
  const linking = {
    prefixes: ['https://www.trendyol.com', 'trendyol://'],
    config: {
      screens: {
        ProductDetail: 'productDetail/:id',
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer
        linking={linking}
        fallback={<ActivityIndicator animating />}>
        <StatusBar barStyle={'dark-content'} />
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
