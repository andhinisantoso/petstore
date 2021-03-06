import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/BottomNavigation';
import Home from './Home';

const DetailHistory = ({ route, navigation }) => {
  const { date, time, total, listItem } = route.params

  const HistoryCard = () => {
    return (
      <View style={style.historyCard}>
        <View style={style.textDesc}>
          <Text style={style.text}>Date</Text>
          <Text style={style.text}>Time</Text>
          <Text style={style.text}>Total</Text>
          <Text style={style.text}>List</Text>
        </View>
        <View style={style.textData}>
          <Text style={style.text}>: {date}</Text>
          <Text style={style.text}>: {time}</Text>
          <Text style={style.text}>: Rp {total}</Text>
          <Text style={style.text}>: </Text>
        </View>
      </View>
    );
  };

  const CartCard = (props) => {
    return (
      <View style={style.cartCard}>
        <Image source={{ uri: props.image }} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            flex: 1,
            marginTop: 30,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {props.detail}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rp {props.price}</Text>
        </View>
        <View style={{ marginRight: 30, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>{props.total}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detail History</Text>
      </View>
      <View style={{ marginBottom: 50 }}>
        <View>
          <View style={style.card}>
            <HistoryCard style={style.card} />
          </View>
          {listItem.map((item) => (
            <CartCard key={item.itemId} image={item.image} name={item.name} detail={item.detail} price={item.price} total={item.total} />
          ))}
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
  historyCard: {
    height: 150,
    width: 330,
    marginHorizontal: 20,
    marginLeft: 30,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.secondary,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textDesc: {
    marginLeft: 10,
    flex: 0.3,
  },
  textData: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.primary,
    marginBottom: 10,
  },
  cartCard: {
    height: 120,
    width: 330,
    marginHorizontal: 10,
    marginLeft: 30,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DetailHistory;
