import React from 'react';
import COLORS from '../../const/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

const BottomNavigator = () => {
  
  return (
    <View style={style.navigatorContainer}>
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="home" size={36} color={COLORS.primary}/>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="shopping-bag" size={36} color={COLORS.secondary}/>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="shopping-cart" size={36} color={COLORS.secondary}/>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="favorite" size={36} color={COLORS.secondary}/>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="store" size={36} color={COLORS.secondary}/>
      </TouchableOpacity>
      
    </View>
  );
};

const style = StyleSheet.create({
  navigatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    color: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey
  },
  icon: {
    marginHorizontal: 20,
    marginVertical: 5,
    
  }
});

export default BottomNavigator;