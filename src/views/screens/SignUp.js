import React from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../const/colors';
import {PrimaryButton} from '../components/Button';
import Home from './Home';
import { Ionicons } from '@expo/vector-icons';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View 
        style={{
            paddingHorizontal: 150,
            justifyContent: 'space-between',
            marginBottom: 10,
            marginTop: 100
        }}
      >
        <Ionicons name="ios-person-circle-outline" size={100} color={COLORS.primary}/>
      </View>
      <View style={style.textContainer}>
        <View>
          <View style={style.formLogin}>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="Full Name"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16}}
                placeholder="Email"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16}}
                placeholder="Telephone"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16}}
                placeholder="Password"
              />
            </View>
            <PrimaryButton
              onPress={() => navigation.navigate('Home')}
              title="Next"
            />
          </View>
        </View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            Already have an Account? <TouchableOpacity activeOpacity={0.5} onPress={Home}><Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 18}}>Sign In</Text></TouchableOpacity>
          </Text>
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
    paddingTop: 10,
  },
  formLogin: {
    marginTop: 30,
  },
  inputContainer: {
    height: 50,
    width: 290,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    elevation: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignUp;
