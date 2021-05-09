import { useFocusEffect } from '@react-navigation/core';
import React from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';

const OnBoardScreen = ({ navigation }) => {
  const status = useSelector((state) => state.log.status)
  const role = useSelector((state) => state.log.role)

  useFocusEffect(() => {
    if (status == 'login') {
      if (role == 'user') {
        navigation.replace('Home')
      } else if (role == 'admin') {
        navigation.replace('AdminHome')
      }
    }
  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          width: 400,
          height: 400,
          background: COLORS.white,
        }}>
        <Image
          style={{
            width: 300,
            height: 300,
            top: 130,
            left: 80,
          }}
          source={require('../../assets/categories/home.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
            Happy Pet Store
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            Make your pet happier
          </Text>
        </View>
        <PrimaryButton
          onPress={() => navigation.replace('SignIn')}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
    marginTop: 50,
  },
});

export default OnBoardScreen;
