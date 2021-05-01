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
const PrimaryButtonBox = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerBox}>
      <Text style={{...style.title, color: COLORS.white, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const PrimaryButtonBoxSml = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerBoxSml}>
      <Text style={{...style.title, color: COLORS.white, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
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
const SecondaryButtonBox = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerSBox}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButtonBoxSml = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerSBoxSml}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
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
  title: {
    color: COLORS.white, 
    fontWeight: 'bold', 
    fontSize: 18

  },
  btnContainer: {
    
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerBox: {
    
    backgroundColor: COLORS.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width:200,

  },
  btnContainerBoxSml: {
    
    backgroundColor: COLORS.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width:139,

  },
  btnContainerS: {
    backgroundColor: COLORS.secondary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerSBox: {
    backgroundColor: COLORS.secondary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width:230,
  },
  btnContainerSBoxSml: {
    backgroundColor: COLORS.secondary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width:139,
  },
  btnContainerG: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton, GreyButton, PrimaryButtonBox, SecondaryButtonBox, PrimaryButtonBoxSml, SecondaryButtonBoxSml};
