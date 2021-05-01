import React from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';

const OnBoardScreen = ({ navigation }) => {
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
            width: 200,
            height: 200,
            top: 100,
            left: 120,
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
  },
});

export default OnBoardScreen;
