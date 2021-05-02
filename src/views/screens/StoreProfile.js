import React from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/BottomNavigation';

const InfoPetStore = ({navigation}) => {
    const Map = ({}) => {
        return (
            <View style={style.card}>
              <Text>MAP</Text>
            </View>
        );
      };

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View 
        style={{
            paddingHorizontal: 130,
            justifyContent: 'space-between',
            marginBottom: 10,
            marginTop: 80
        }}
      >
        <Image source={require('../../assets/categories/home.png')} style={{
            width: 150,
            height: 150,}}/>
      </View>
      <View style={style.textContainer}>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Full Name
            </Text>
            <Text style={style.textInput}>
                Dadu
            </Text>
        </View>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Email
            </Text>
            <Text style={style.textInput}>
                dadu08@gmail.com
            </Text>
        </View>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Telephone
            </Text>
            <Text style={style.textInput}>
                0808080808
            </Text>
        </View>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Address
            </Text>
            <Text style={style.textInput}>
                Gang Beo, Sukarame, Lampung
            </Text>
        </View>
        <View style={{paddingTop: 30}}>
            <Map/>
        </View>
    </View>
    <BottomNavigator/>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: COLORS.dark,
    borderBottomWidth: 4,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold'
    },
  card: {
    height: 220,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey
  },
});

export default InfoPetStore;
