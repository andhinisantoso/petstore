import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeFilled, ShopFilled, ShoppingFilled, HeartFilled, SwitcherFilled} from 'antd';
import COLORS from '../../const/colors';
import Home from '../screen/Home';
import CartScreen from '../screen/Cart';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            // <Icon name="home-filled" color={color} size={28} />
            <HomeFilled color={color} size={28}/>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ShoppingFilled color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SwitcherFilled color={COLORS.primary} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <HeartFilled color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ShopFilled color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
