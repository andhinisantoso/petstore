import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/BottomNavigation';
import Home from './Home';

const Favorite = () => {
  const FavoriteCard = () => {
    return (
      <View style={style.favoriteCard}>
        <Image source={require('../../assets/rc-persian.png')} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            marginTop: 30,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Royal Canin</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            Persian 1 kg
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rp 200.000</Text>
        </View>
        <View style={{marginTop: -20}}>
          <View style={{alignItems: 'center'}}>
            <View style={style.actionBtn}>
                <TouchableOpacity activeOpacity={0.8} onPress={Home} style={style.iconContainer}>
                    <MaterialIcons name="favorite" color={COLORS.primary} size={25} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={Home} style={style.iconContainer}>
                    <MaterialIcons name="shopping-cart" color={COLORS.primary} size={25} />
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28}/>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Favorite</Text>
      </View>
      <View style={{marginBottom: 210}}>
        <View style={style.card}>
          <FavoriteCard style={style.card}/>
        </View>
        <View style={style.card}>
          <FavoriteCard style={style.card}/>
        </View>
        <View style={style.card}>
          <FavoriteCard style={style.card}/>
        </View>
      </View>
      <BottomNavigator/>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  favoriteCard: {
    height: 120,
    width: 330,
    marginHorizontal: 20,
    marginLeft: 30,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionBtn: {
    width: 80,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 30,
  },
  iconContainer: {
    backgroundColor: COLORS.secondary,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  }
});

export default Favorite;
