import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../const/colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
      <Text style={{...style.title, color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerS}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const GreyButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerG}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerS: {
    backgroundColor: COLORS.secondary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerG: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton, GreyButton};
