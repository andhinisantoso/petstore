import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import {PrimaryButton} from '../components/Button';

const CartScreen = () => {
  const CartCard = () => {
    return (
      <View style={style.cartCard}>
        <Image source={require('../../assets/rc-persian.png')} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Royal Canin</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            Persian 1 kg
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Rp 200.000</Text>
        </View>
        <View style={{marginLeft: 60}}>
          <View style={{marginRight: 20, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
            <View style={style.actionBtn}>
                <MaterialIcons name="remove" size={25} color={COLORS.white} />
                <MaterialIcons name="add" size={25} color={COLORS.white} />
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
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <View>
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
        }}>
          <CartCard/>
        </View>
        <View style={style.footer}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 30}}>
            Total Price
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 40}}>Rp 200.000</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 30}}>
        <PrimaryButton title="CHECKOUT" />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
  }
});

export default CartScreen;
