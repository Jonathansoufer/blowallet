import React from 'react';
import { View, YellowBox } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './screens/Main';
import MakePayment from './screens/MakePayment';
import PaymentDetail from './screens/PaymentDetail';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

const MainStack = createStackNavigator(
  {
    Main: { screen: Main },
    PaymentDetail: { screen: PaymentDetail },
  },
  {
    headerMode: 'float',
    headerBackTitleVisible: false,
  }
);

const PaymentStack = createStackNavigator(
  {
    MakePayment: { screen: MakePayment },
  },
  {
    headerMode: 'float',
  }
);

const RootNavigator = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="home" />
          </View>
        ),
      },
    },
    MakePayment: {
      screen: PaymentStack,
      navigationOptions: {
        tabBarLabel: 'Make Payments',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="add" />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Main',
    barStyle: { backgroundColor: '#441771' },
  }
);

export default createAppContainer(RootNavigator);
