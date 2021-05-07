import React from 'react';
import COLORS from '../../const/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// redux
import { useSelector } from 'react-redux';

const BottomNavigator = () => {
  const navigation = useNavigation();
  const screen = useSelector((state) => state.navigation.value)

  return (
    <View style={style.navigatorContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="home" size={36} color={screen == 'Home' ? COLORS.primary : COLORS.secondary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('History')} activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="shopping-bag" size={36} color={screen == 'History' ? COLORS.primary : COLORS.secondary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="shopping-cart" size={36} color={screen == 'Cart' ? COLORS.primary : COLORS.secondary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="favorite" size={36} color={screen == 'Favourite' ? COLORS.primary : COLORS.secondary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('InfoPetStore')} activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="store" size={36} color={screen == 'Store' ? COLORS.primary : COLORS.secondary} />
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