import React from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../const/colors';
import {PrimaryButton} from '../components/Button';
import Home from './Home';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View 
        style={{
          width: '100%',	
          height: 250,
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
          <View>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
              Happy
            </Text>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
              Pet Store
            </Text>
          </View>
          <View style={style.formLogin}>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="Email / Telephone"
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
              title="Login"
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
            Do you have an Account? <TouchableOpacity activeOpacity={0.5} onPress={Home}><Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 18}}>Sign Up</Text></TouchableOpacity>
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
    paddingTop: 50,
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
    shadowRadius: 20,
    elevation: 13,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SignIn;
