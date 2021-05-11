import React from 'react';
import COLORS from '../../const/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const BottomNavigator = () => {
  const navigation = useNavigation();
<<<<<<< HEAD
  const screen = useSelector((state) => state.navigation.value)

=======
  
>>>>>>> 146bed330bb3131fbb1562d4ad0dc226c931ffe2
  return (
    <View style={style.navigatorContainer}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('AdminHome')} style={style.icon}>
        <MaterialIcons name="home" size={36} color={screen == 'AdminHome' ? COLORS.primary : COLORS.secondary} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('AdminCatalog')} style={style.icon}>
        <MaterialIcons name="shopping-bag" size={36} color={screen == 'AdminCatalog' ? COLORS.primary : COLORS.secondary} />
      </TouchableOpacity>
<<<<<<< HEAD
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="store" size={36} color={COLORS.secondary} />
=======
      <TouchableOpacity  onPress={() => navigation.navigate('Profile')} activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="store" size={36} color={COLORS.secondary}/>
>>>>>>> 146bed330bb3131fbb1562d4ad0dc226c931ffe2
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
    marginHorizontal: 50,
    marginVertical: 5,

  }
});

export default BottomNavigator;