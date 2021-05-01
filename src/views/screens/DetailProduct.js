import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import {GreyButton} from '../components/Button';
import Home from '../screens/Home';

const DetailsScreen = () => {

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28} onPress={Home} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details Product</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 220,
            marginBottom: 20,
          }}>
          <Image source={require('../../assets/rc-persian.png')} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.dark, marginBottom: -10}}>Rp 200.000</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.dark, marginBottom: -10}}>
              Royal Canin
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={Home} style={style.iconContainer}>
              <MaterialIcons name="favorite-border" color={COLORS.primary} size={25} />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: COLORS.dark, marginTop: 2}}>Persian 1 kg </Text>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            <GreyButton title="Add To Cart" />
          </View>
        </View>
      </ScrollView>
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
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.secondary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.dark,
  },
});

export default DetailsScreen;
