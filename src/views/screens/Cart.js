import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
import BottomNavigator from '../navigation/BottomNavigation';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { plusOne, minusOne, checkout, resetMessage } from '../../redux/cartSlice';
import { set } from '../../redux/navigationSlice'
import { add } from '../../redux/historySlice'

const CartScreen = ({ navigation }) => {
  const listItem = useSelector((state) => state.cart.listItem)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const message = useSelector((state) => state.cart.message)
  const dispatch = useDispatch()

  const [itemHistory, setItemHistory] = useState([])
  const [totalHistory, setTotalHistory] = useState(0)

  useFocusEffect(() => {
    dispatch(set({ value: 'Cart' }))
  });

  useEffect(() => {
    if (message != '') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      if (message == 'Berhasil memesan. Tunggu pesanan diproses toko') {
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        const date = cDay + "/" + cMonth + "/" + cYear;
        let time = currentDate.getHours() + ":" + currentDate.getMinutes()
        const uuid = require("uuid");
        dispatch(add({
          id: uuid.v4(),
          date: date,
          time: time,
          total: totalHistory,
          listItem: itemHistory
        }))
      }
      dispatch(resetMessage())
    }
  }, [message])

  const _checkout = async () => {
    try {
      setItemHistory(listItem)
      setTotalHistory(totalPrice)
      await dispatch(checkout(listItem))
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT)
    }
  }

  const CartCard = (props) => {
    const { id, name, detail, price, total, image } = props

    return (
      <View style={style.cartCard}>
        <Image source={{ uri: image }} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            flex: 1,
            marginTop: 30,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {detail}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rp {price}</Text>
        </View>
        <View style={{ marginTop: -10 }}>
          <View style={{ marginRight: 20, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>{total}</Text>
            <View style={style.actionBtn}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => dispatch(minusOne({ id: id }))} style={style.icon}>
                <MaterialIcons name="remove" color={COLORS.white} size={25} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => dispatch(plusOne({ id: id }))} style={style.icon}>
                <MaterialIcons name="add" color={COLORS.white} size={25} />
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
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
        </TouchableOpacity>
      </View>
      <View>

        {listItem.map((item) => (
          <View key={item.itemId} style={style.card}>
            <CartCard key={item.itemId} id={item.itemId} name={item.name} detail={item.detail} price={item.price} total={item.total} image={item.image} />
          </View>
        ))}

        <View style={{ paddingBottom: 80 }}>
          <View style={style.footer}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 30 }}>
              Total Price
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 40 }}>Rp {totalPrice}</Text>
          </View>
          <View style={{ marginHorizontal: 30 }}>
            <PrimaryButton title="Checkout" onPress={() => _checkout()} />
          </View>
        </View>

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
  cartCard: {
    height: 120,
    width: 330,
    marginHorizontal: 10,
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
    width: 100,
    height: 40,
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
  },
  icon: {
    marginRight: 10,
    marginTop: 8,
    marginLeft: 7
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  }
});

export default CartScreen;
