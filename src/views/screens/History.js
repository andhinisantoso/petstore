import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/BottomNavigation';
import Home from './Home';

const History = () => {
  const HistoryCard = () => {
    return (
      <View>
      <View style={style.historyCard}>
        <View style={style.textDesc}>
          <Text style={style.text}>Date</Text>
          <Text style={style.text}>Time</Text>
          <Text style={style.text}>Total</Text>
        </View>
        <View style={style.textData}>
          <Text style={style.text}>: 12 April 2021</Text>
          <Text style={style.text}>: 15:00</Text>
          <Text style={style.text}>: Rp 480.000</Text>
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={style.actionBtn}>
                <TouchableOpacity activeOpacity={0.5} onPress={Home} style={style.iconContainer}>
                    <MaterialIcons name="arrow-forward-ios" color={COLORS.primary} size={28} />
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}></View>
      <View style={{marginBottom: 380}}>
        <View style={style.card}>
          <HistoryCard style={style.card}/>
        </View>
        <View style={style.card}>
          <HistoryCard style={style.card}/>
        </View>
      </View>
      <BottomNavigator/>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    height: 70
  },
  historyCard: {
    height: 120,
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
  actionBtn: {
    width: 50,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textDesc: {
    height: 100,
    marginLeft: 10,
    marginTop: 20,
    flex: 0.3,
  },
  textData: {
    height: 100,
    marginTop: 20,
    flex: 1,
  },
  text: {
    fontWeight: 'bold', 
    fontSize: 16, 
    color: COLORS.primary,
    marginBottom: 10,
  },
});

export default History;
