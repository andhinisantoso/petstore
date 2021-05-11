import React from 'react';
import COLORS from '../../const/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigator = () => {
  const navigation = useNavigation();
  
  return (
    <View style={style.navigatorContainer}>
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="home" size={36} color={COLORS.primary}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AdminCatalog')} activeOpacity={0.5} style={style.icon}>
        <MaterialIcons name="shopping-bag" size={36} color={COLORS.secondary}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Profile')} activeOpacity={0.5} style={style.icon}>
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
    marginHorizontal: 50,
    marginVertical: 5,
    
  }
});

export default BottomNavigator;