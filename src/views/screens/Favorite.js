import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/BottomNavigation';
import { useFocusEffect } from '@react-navigation/native';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { remove, moveCart } from '../../redux/favouriteSlice';
import { addToCart, removeFromCart } from '../../redux/cartSlice'
import { set } from '../../redux/navigationSlice'

const Favorite = ({ navigation }) => {
  const listFavourite = useSelector((state) => state.favourite.listFavourite)
  const listItem = useSelector((state) => state.item.listItem)
  const listCart = useSelector((state) => state.cart.listItem)
  const userId = useSelector((state) => state.log.userId)
  const dispatch = useDispatch()

  useFocusEffect(() => {
    dispatch(set({ value: 'Favourite' }))
  });

  const toCart = (data) => {
    if (data.inCart) {
      dispatch(removeFromCart({ id: data.id }))
      dispatch(moveCart({ id: data.id }))
    } else {
      for (let index = 0; index < listItem.length; index++) {
        const item = listItem[index];
        if (item.id = data.id) {
          dispatch(addToCart({ userId: userId, categoryId: item.category_id, itemId: item.id, price: item.price, name: item.name, detail: item.detail, image: item.image, total: 1 }))
          dispatch(moveCart({ id: data.id }))
        }
        break;
      }
    }
  }

  const FavoriteCard = (props) => {
    return (
      <View style={style.favoriteCard}>
        <Image source={{ uri: props.image }} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            marginTop: 30,
            flex: 1,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {props.detail}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rp {props.price}</Text>
        </View>
        <View style={{ marginTop: -20 }}>
          <View style={{ alignItems: 'center' }}>
            <View style={style.actionBtn}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => dispatch(remove({ id: props.id }))} style={style.iconContainer}>
                <MaterialIcons name="favorite" color={COLORS.primary} size={25} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => toCart({ id: props.id, inCart: props.inCart })} style={style.iconContainer}>
                <MaterialIcons name="shopping-cart" color={props.inCart ? COLORS.primary : COLORS.grey} size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={28} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Favorite</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 210 }}>
        {listFavourite.map((item) => (
          <View key={item.id} style={style.card}>
            <FavoriteCard style={style.card} key={item.id} image={item.image} id={item.id} name={item.name} price={item.price} detail={item.detail} inCart={item.inCart} />
          </View>
        ))}
      </View>
      <BottomNavigator />
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
